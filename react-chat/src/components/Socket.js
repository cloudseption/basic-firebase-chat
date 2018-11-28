import openSocket from 'socket.io-client';
let socket = openSocket();

function selectConversationPartner(userId) {
  socket.emit('onSelectConversation', { userId: userId });
}

export { selectConversationPartner };