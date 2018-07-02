//var user = require('./users');
const path =require('path');

module.exports = function(io){

	//verificar coockie para permitir conccion 

	io.on('connection', (socket)=>{

			var dir = socket.handshake.headers.referer.split(path.sep);

			s1= (socket.id);
			
			// creo los juegos
			// o agrego jugador
			//se lo pido al Admin
			let ub = Admin.addGames(dir[4],dir[5],dir[6],s1);

			socket.on('clickemit',(clickData)=>{
			
			//io.sockets.emit('clickAtack',clickData);

			socket.broadcast.emit('clickAtack',clickData);
			});
				socket.on('clickplayer',(clickData)=>{
				let opp = Admin.getMap().get(socket.id);
				console.log(socket.id,opp, "clickplayer",clickData);


				Admin.clickEvent(socket.id,opp, clickData);
				//console.log(clickData);
				//console.log(Admin.getMap().get(socket.id),socket.id);
				//socket.broadcast.emit('clickAtack',clickData);

				socket.broadcast.to(opp).emit('clickAtack',clickData);
			});

	});
}