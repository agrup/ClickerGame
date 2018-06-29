const reglas = require('./reglas');
const path =require('path');
const express = require ('express');
var http = require('http');
var router = express.Router();
var hbs = require('express-handlebars');

const app = express();

const SocketIO = require('socket.io');



var url = app.use(express.static(path.join(__dirname,'public')));


app.engine('hbs', hbs({extname: 'hbs' }));

app.set('views',__dirname + '/views/');

app.set('view engine', 'hbs');


var port = (process.env.PORT || 5000)

app.set('port', port);


//const server =http.createServer(app);


//const io = SocketIO.listen(server);


//server http
/*
console.log(port);
var serverHTTP = http.createServer(app);




*/
const server = app.listen(app.get('port'), ()=> {
	console.log('server on',app.get('port'))
});

const io = SocketIO(server);

io.on('connection', (socket)=>{
	console.log('nueva conexion',socket.id);
	socket.on('clickemit',(clickData)=>{
		console.log(clickData);
		//io.sockets.emit('clickAtack',clickData);
		socket.broadcast.emit('clickAtack',clickData);
	});
		socket.on('clickplayer',(clickData)=>{
		console.log(clickData);
		//io.sockets.emit('clickAtack',clickData);
		socket.broadcast.emit('clickAtack',clickData);
	});
});

//websockets


//static file 


app.get('/users/:id', function(req, res) {
		
	 	console.log(req.params.id);
	 	res.redirect('../');

});
/*
	app.redirect('view/index');
	console.log('server on',app.get('port'));
	



//start
const server = app.listen(app.get('port'));
*/

/*
const SocketIO = require('socket.io');
const io = SocketIO(server);

//websockets
io.on('connection', (socket)=>{
	console.log('nueva conexion',socket.id);
	socket.on('clickemit',(clickData)=>{
		console.log(clickData);
		//io.sockets.emit('clickAtack',clickData);
		socket.broadcast.emit('clickAtack',clickData);
	});
		socket.on('clickplayer',(clickData)=>{
		console.log(clickData);
		//io.sockets.emit('clickAtack',clickData);
		socket.broadcast.emit('clickAtack',clickData);
	});
});

*/


/* GET home page. 
router.get('/users', function(req, res, next) {
  res.redirect('/view/index', { title: 'Cool, huh!', condition: true, anyArray: [1,2,3] });
});



module.exports = router;
*/

