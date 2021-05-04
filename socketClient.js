
let io = require("socket.io-client");

const socketClient = io('http://localhost:3000/');

socketClient.on("connect", () => {
  console.log("connection server");
   
});

socketClient.emit("mess", { data: "first Reuqest" });
 
socketClient.on("mess", req => {
  console.log(req);
});
 