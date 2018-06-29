//var user = require('./users');

module.exports = function(io,user){


	io.on('connection', (socket)=>{
		console.log('nueva conexion',socket.id);
		user.Socketid = socket.id; 
		console.log(user.Socketid);
		socket.on('clickemit',(clickData)=>{
			console.log(clickData);
			//io.sockets.emit('clickAtack',clickData);
			socket.broadcast.emit('clickAtack',clickData);
		});
			socket.on('clickplayer',(clickData)=>{
			console.log(clickData);
			//io.sockets.emit('clickAtack',clickData);
			socket.broadcast.emit('clickAtack',clickData);
			//socket.clients[user.oponentID].emit('clickAtack',clickData);
		});
});
}