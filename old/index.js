// const PORT = process.env.PORT || 3000;
/*
npm install --save peer
npm install --save express
npm install --save socket.io
*/
var PeerServer = require('./lib/server').PeerServer;
var express = require('express');
var app = express();

const PORT = process.env.PORT || 80;

app.use(express.static('./public'))

app.listen(PORT, function () {
    console.log('Listening on ' + PORT)
})

app.use('/peerjs', PeerServer);

