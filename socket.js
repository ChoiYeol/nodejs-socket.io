
var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

 
// 'connection' 이라는 이벤트를 감지한다.
io.on('connection', function (socket) {
  console.log('a user connected')

  socket.on("mess", req => {
    console.log(req);

    socket.emit("mess", { data: "aaaa" });
  });
})

// http를 3000포트에서 실행한다.
http.listen(3000, function () {
  console.log('listening on *:3000')
})
 