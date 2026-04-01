const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// 静的ファイル（必要なら）
app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("接続:", socket.id);

  socket.on("changeColor", (color) => {
    console.log("color:", color); // ←デバッグ用（重要）
    io.emit("colorUpdate", color);
  });

  socket.on("flash", () => {
    console.log("flash");
    io.emit("flash");
  });

  socket.on("disconnect", () => {
    console.log("切断:", socket.id);
  });
});

// Render用PORT（安定版）
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
