const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // GitHub Pagesから接続OKにする
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {

  console.log("接続:", socket.id);

  socket.on("changeColor", (color) => {
    io.emit("colorUpdate", color);
  });

  socket.on("effect", () => {
    io.emit("effect");
  });

  socket.on("stopEffect", () => {
    io.emit("stopEffect");
  });

  socket.on("flash", () => {
    io.emit("flash");
  });

  socket.on("stopFlash", () => {
    io.emit("stopFlash");
  });

  socket.on("disconnect", () => {
    console.log("切断:", socket.id);
  });

});


// Render用（重要）
const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
