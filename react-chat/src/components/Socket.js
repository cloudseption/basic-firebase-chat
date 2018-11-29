import openSocket from 'socket.io-client';
let socket = openSocket();

let newMessageCallback = () => {};

function selectConversationPartner(userId) {
  socket.emit('onSelectConversation', { userId: userId });
}

function sendMessage(message) {
  socket.emit('sendMessage', message);
}

socket.on('updateMessageList', data => {
  console.log('messages received', data);
  newMessageCallback(data);
})

function registerListener(callback) {
  newMessageCallback = callback;
}

export {
  selectConversationPartner,
  sendMessage,
  registerListener
};