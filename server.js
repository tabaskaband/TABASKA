const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = 3000;

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("接続:", socket.id);

  socket.on("changeColor", (color) => {
    io.emit("colorUpdate", color);
  });

  socket.on("flash", () => {
    io.emit("flash");
  });
});

http.listen(PORT, () => {
  console.log(`サーバー起動 http://localhost:${PORT}`);
});