//const reglas = require('./reglas');
const path =require('path');
const express = require ('express');
var http = require('http');
var router = express.Router();
var hbs = require('express-handlebars');
var user = require('./users');
const app = express();
var expressWs = require('express-ws')(app);



var dotenv = require ('dotenv');
dotenv.load ();




var request = require("request");
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






app.get('/game/:game/:user/:signature', function(reque, res) {

//creado por insomnia 
//Recomendado totalmente
//tiene para muchos lenguajes

var options = { method: 'GET',
  url: process.env.URL+'/api/game',
  qs: 
   { 
     api_token:process.env.API_TOKEN,
     game: reque.params.game,
     user: reque.params.user,
     signature: reque.params.signature,

 } };


request(options, function (error, response, game) {
  if (error) throw new Error(error);

game = JSON.parse(game);
  if(game){
  //console.log(game);

  Admin.CreateGame(game);

		res.render('index');
	}else{
		
	 	//res.redirect('../');
	}

});



		//res.render('index');


});




