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
	console.log(sock);
		//require('./socket')(io);

	 //let ub = Admin.addGames(req.params.id,req.params.u1,req.params.u2);

	 //console.log(Admin.getPartidaByid(ub));

	 

/*
		// variable para verificar si existe la partida
		//con la api se verificara passport
		var newP = true;

		//verifico si existe la partida si no la creo
		//gameArray.forEach(function(valor, indice, array) {
		Admin.getGames().forEach(function(valor, indice, array) {
    	console.log("En el índice " + indice + " hay este valor: " + valor.partidaId + " id requerido"+ req.params.id);
    		
    		if(valor.partidaId==req.params.id ){
    			
    			newP = false;
    			var ub = indice;
    			console.log(newP);    		
    		}

		});


		//creo la partida
			if(newP){
				//creo una partida nueva
			var game = new Game(req.params.id);
			Admin.addNewGame(req.params.id);

			//game.setuserId1()
			//la agrego a la listas de partidas
			console.log("game: "+game.getPartida());    
			//gameArray.push(game);		
			console.log('Nueva Partida:'+ game.partidaId);	
			global.partida=game.partidaId;
			//require('./socket')(io,req.params.id);
			}else{
			
			console.log("agregado a partida");

			}

*/

		//console.log(gameArray);

		res.render('index');
	 	//res.redirect('../');

});