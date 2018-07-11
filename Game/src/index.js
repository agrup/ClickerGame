const reglas = require('./reglas');
const path =require('path');
const express = require ('express');
var http = require('http');
var router = express.Router();
var hbs = require('express-handlebars');
var user = require('./users');
const app = express();
var expressWs = require('express-ws')(app);

//importo la clase game para crear la partida o agregar 
var Game =require('./Game');

//lista de partidas
gameAdmin = require('./gameAdmin');
global.Admin = new gameAdmin();

//importo sockets
const SocketIO = require('socket.io');


//especifico el directiorio de staticFiles publicas
var url = app.use(express.static(path.join(__dirname,'../public')));

// importo hbs para las vistas y seteo en app el directorio de las vistas
app.engine('hbs', hbs({extname: 'hbs' }));

app.set('views',__dirname + '/../views/');

app.set('view engine', 'hbs');

// defino el puerto en app, 5000 por defecto o el configurodo en .env
var port = (process.env.PORT || 5000);

app.set('port', port);


//server http
/*
console.log(port);
var serverHTTP = http.createServer(app);

*/

// defino a server para que escuche con los parametros de app
const server = app.listen(app.get('port'), ()=> {
	console.log('server on',app.get('port'))

});

//websockets
//creo un socket 
/*
const io = SocketIO(server);

require('./socket')(io,user);
*/

		//websockets
		//creo un socket 

		const io = SocketIO(server);
		sock= require('./socket');
		sock(io);
		//require('./socket')(io);
		//sock (io);


//redirect 
// creo los juegos
// o agrego jugador






app.get('/game/:id/:u1/:u2', function(req, res) {

		res.render('index');
	 	//res.redirect('../');

});
