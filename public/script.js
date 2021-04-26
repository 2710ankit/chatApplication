const socket = io();
// const socket = require('socket.io');
const chat = document.querySelector('.chat-form');
const input=document.querySelector('.chat-input');
const chatWindow = document.querySelector('.chat-window');
const textarea = document.querySelector('textarea');

chat.addEventListener('submit', event =>{
    event.preventDefault();
    socket.emit('chat', input.value);
    input.value= '';
});

const renderMessage = message =>{
   const div = document.createElement('div');
   div.setAttribute('class','render-message');
   div.innerText= message;
   chatWindow.appendChild(div);

};
socket.on('chat',message =>{
    console.log('from server ', message);
    renderMessage(message);
});


textarea.addEventListener('keydown', autosize);             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}