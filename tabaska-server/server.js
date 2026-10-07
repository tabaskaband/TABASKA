const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

console.log("TABASKA SERVER NEW VERSION");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

let currentColor = "#000000";

app.get("/", (req, res) => {

  res.send("TABASKA Socket Server Running");

});


io.on("connection", (socket) => {

  console.log(
    "接続:",
    socket.id
  );


  /* 現在色 */

  socket.emit(
    "colorUpdate",
    currentColor
  );


  /* =========================
     色変更
  ========================= */

  socket.on("changeColor", (color) => {

    console.log(
      "changeColor:",
      color
    );

    currentColor = color;

    io.emit(
      "colorUpdate",
      color
    );

  });


  /* =========================
     ランダム演出開始
  ========================= */

  socket.on("effect", () => {

    console.log(
      ">>> EFFECT"
    );

    io.emit(
      "effect"
    );

  });


  /* =========================
     ランダム演出停止
  ========================= */

  socket.on("stopEffect", () => {

    console.log(
      ">>> STOP EFFECT"
    );

    io.emit(
      "stopEffect"
    );

  });


  /* =========================
     フラッシュ開始
  ========================= */

  socket.on("flash", () => {

    console.log(
      ">>> FLASH"
    );

    io.emit(
      "flash"
    );

  });


  /* =========================
     フラッシュ停止
  ========================= */

  socket.on("stopFlash", () => {

    console.log(
      ">>> STOP FLASH"
    );

    io.emit(
      "stopFlash"
    );

  });


  socket.on("disconnect", () => {

    console.log(
      "切断:",
      socket.id
    );

  });

});


const PORT =
  process.env.PORT || 10000;


server.listen(
  PORT,
  () => {

    console.log(
      "Server running on port",
      PORT
    );

  }
);
