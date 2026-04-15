import { WebSocketServer } from 'ws';
import { v4 as uuid } from 'uuid';

const server = new WebSocketServer({ 
  port: 3000
});

const poll = {
  "name": "Enquete ABCD",
  "options": [
    {"name": "Opção A", "votes": []},
    {"name": "Opção B", "votes": []},
    {"name": "Opção C", "votes": []},
    {"name": "Opção D", "votes": []},
  ],
};

const clients = new Set();

server.on('connection', (socket) => {
  socket.id = uuid().toString(); 
  clients.add(socket);
  socket.send(socket.id);

  socket.on('message', (message) => {
    let request = JSON.parse(message);
    let option = poll.options.find((item) => item.name === request["option"]);

    let userVote = option.votes.find((votes) => votes === socket.id);
    if (userVote) {
      option.votes = option.votes.filter((item) => item != socket.id);
    } else {
      option.votes.push(socket.id);
    }

    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(poll));
      }
    });
  });

  socket.on('close', () => {
    clients.delete(socket);
  });
});