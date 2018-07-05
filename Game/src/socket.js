//var user = require('./users');
const path =require('path');
var HashMap = require('hashmap');



module.exports = function(io){

this.socketIdSocketHash = new HashMap();


	//verificar coockie para permitir conccion 

	io.on('connection', (socket)=>{

			var dir = socket.handshake.headers.referer.split(path.sep);;
			this.socketIdSocketHash.set(socket.id,socket);
			//console.log(this.socketIdSocketHash.set(socket.id,socket));

			s= (socket);
			//console.log(io.sockets[socket.id].socket);

			// creo los juegos
			// o agrego jugador
			//se lo pido al Admin
			let ub = Admin.addGames(dir[4],dir[5],dir[6],s);

			if (ub){
				
				let opp = Admin.getMap().get(socket.id);
				//cargo la partida en data y la comparto para armar la pag
				//Data 
				Data = Admin.getPartidaBySockerId(socket.id);

				let time = 3000;

				socket.emit('GameWait',time);
				socket.broadcast.to(opp).emit('Gamewait',time);

				setTimeout(init,time);

				//console.log('GAME :',Data.players); 

				function init(){

				socket.emit('GameReady',Data.players);
				socket.broadcast.to(opp).emit('GameReady',Data.players);
				}
			}


				socket.on('clickplayer',(clickData)=>{
				let opp = Admin.getMap().get(socket.id);
				//console.log("oponente",opp);

				let fin = Admin.clickEvent(socket.id,opp, clickData);

				//cargo la partida en data y la comparto para armar la pag
				//Data 
				Data = Admin.getPartidaBySockerId(socket.id);

				socket.emit('GameRefresh',Data.players);
				socket.broadcast.to(opp).emit('GameRefresh',Data.players);
				socket.broadcast.to(opp).emit('clickAtack',clickData);
				if (fin){
					socket.emit('GameFinsh','YOU WIN');

					//socket.id[opp].disconnect();
					socket.disconnect();
					socket.broadcast.to(opp).emit('GameFinsh','YOU LOSE');
					this.socketIdSocketHash.get(opp).disconnect();
					socket.broadcast.to(opp).disconnect();
					Admin.terminarPartidaBySocketId(socket.id);
				}
			});

	});
}