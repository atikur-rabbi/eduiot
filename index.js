// npm install --save peer
// const port = process.env.PORT || 9000,
const { PeerServer } = require('peer');

const peerServer = PeerServer({ port: port, path: '/' });