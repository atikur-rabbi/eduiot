// npm install --save peer
// const port = process.env.PORT || 9000,
// const { PeerServer } = require('peer');

// const peerServer = PeerServer({ port: process.env.PORT || 9000,key: 'peerjs', path: '/peerjs' });


var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;

const PORT = process.env.PORT || 80;

app.use(express.static('./public'));

var srv = app.listen(PORT, function () {
    console.log('Listening on ' + PORT)
})

peerServer = ExpressPeerServer(srv, {
	debug: true, key: 'peerjs',
});
app.use('/peerjs', peerServer);



// peerServer.on('connection', function(id) {
//     console.log(id)
//   console.log(server._clients)
// });



// var express = require('express');
// const app = express();

// /**
//  * Create HTTP server.
//  */
// const server = http.createServer(app);

// /* integrate peer server -- start */
// const ExpressPeerServer = require('peer').ExpressPeerServer;
// const peerServer = ExpressPeerServer(server, {
//   debug: true
// });

// app.use('/peerjs', peerServer);
// /* integrate peer server -- end */

// app.use(cors());
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

