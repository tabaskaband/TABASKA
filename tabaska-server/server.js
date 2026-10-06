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

/* =========================
   動作確認用
========================= */

app.get("/", (req, res) => {
  res.send("TABASKA Socket Server Running");
});

/* =========================
   Socket.IO
========================= */

io.on("connection", (socket) => {

  console.log("接続:", socket.id);

  /* 色変更 */
  socket.on("changeColor", (color) => {

    console.log("changeColor:", color);

    io.emit("colorUpdate", color);

  });

  /* ランダム演出開始 */
  socket.on("effect", () => {

    console.log("effect");

    io.emit("effect");

  });

  /* ランダム演出停止 */
  socket.on("stopEffect", () => {

    console.log("stopEffect");

    io.emit("stopEffect");

  });

  /* フラッシュ開始 */
  socket.on("flash", () => {

    console.log("flash");

    io.emit("flash");

  });

  /* フラッシュ停止 */
  socket.on("stopFlash", () => {

    console.log("stopFlash");

    io.emit("stopFlash");

  });

  socket.on("disconnect", () => {

    console.log("切断:", socket.id);

  });

});

/* =========================
   Render
========================= */

const PORT = process.env.PORT || 10000;

server.listen(PORT, () => {

  console.log(
    "Server running on port",
    PORT
  );

});
