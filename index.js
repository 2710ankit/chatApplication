const express = require('express');
const app = express();
const server = require('http').createServer(app);
// const server = require('http').Server(app);
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));
const io= require('socket.io')(server);


app.get('/',(req,res)=>{
  res.sendFile('index.html',{root: 'public'});
})

io.on('connection', socket => {
    // console.log('other client connected');
    socket.on('chat', message =>{
      //  console.log('from client', message);
      io.emit('chat', message);
    });
})

server.listen(2000, ()=>{
    console.log('server is working');
})