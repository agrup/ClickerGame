//var user = require('./users');
const path =require('path');

module.exports = function(io){

	//verificar coockie para permitir conccion 

	io.on('connection', (socket)=>{

			var dir = socket.handshake.headers.referer.split(path.sep);

			s1= (socket.id);
			let ub = Admin.addGames(dir[4],dir[5],dir[6],s1);

			socket.on('clickemit',(clickData)=>{
			//console.log(clickData);
			//io.sockets.emit('clickAtack',clickData);

			socket.broadcast.emit('clickAtack',clickData);
			});
				socket.on('clickplayer',(clickData)=>{
				//console.log(clickData);
				//io.sockets.emit('clickAtack',clickData);
				//console.log(Admin.getMap().get(socket.id),socket.id);
				//socket.broadcast.emit('clickAtack',clickData);
				//let oponent = Admin.getMap().get(socket.id);
				socket.broadcast.to(Admin.getMap().get(socket.id)).emit('clickAtack',clickData);
			});

	});
}