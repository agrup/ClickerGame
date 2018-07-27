
Game = require('./Game');
var HashMap = require('hashmap');
function gameAdmin(){

		//harcodeadas las partidas
		//partidas autorizadas
	//this.gameAvalible=[11,17,19];


	//hash de sockets id de usuarios
	this.map = new HashMap();

	//hash de socket con game
	this.SockGameMap = new HashMap();
	//this.hashMap=[];
	//Lista de Games
	this.gameArray =[];
	//this.lastGameCreated=null;
};



	gameAdmin.prototype.terminarPartidaBySocketId = function terminarPartidaBySocketId(socketId){
		//this.
		//console.log(this.gameArray);
		this.gameArray.splice(this.SockGameMap.get(socketId),1);
		//console.log(this.gameArray);

	}

		gameAdmin.prototype.getMap = function getMap(){
		return this.map;
	}

	gameAdmin.prototype.IsPlayerOne = function IsPlayerOne(socketId){
		console.log('ADMIN GAME',(this.gameArray[this.SockGameMap.get(socketId)]).socketId1,' s id',socketId)
			if((this.gameArray[this.SockGameMap.get(socketId)]).socketId1 == socketId){
				return true;
			}else{
				return false;
			}


	}

	gameAdmin.prototype.clickEvent = function clickEvent(socketId,opp, clickData){
		//busco el oponente y le aplico el ataque
		//busco la partida
		let partida = this.SockGameMap.get(socketId);
		//veridico que player es
		if (partida !==undefined){
			let game = this.gameArray[partida];
			if(game.socketId2==socketId){
				if(clickData.Userc=='Player1'){
					//console.log('Click gme',game.players.Player1);

				let vida =game.players.Player1.vida -=
					game.players.Player2.ataque;
							if(game.players.Player1.vida <=0){
								return true;
								//console.log('vida: '+vida);
							};
						}else{
							console.log('defensa deshabilitada');
						}

			}else{
				if(clickData.Userc=='Player2'){
					let vida =game.players.Player2.vida -=
						game.players.Player1.ataque;
							if(game.players.Player2.vida <=0){
								return true;
								//console.log('vida: '+vida);
							};
						//console.log('vida: '+vida);
				}else{
					console.log('defensa deshabilitada');
				}

			}
		}else
		{console.log('click undifined');}

	}

	gameAdmin.prototype.CreateGame = function CreateGame(game){

		var b=true;

		this.gameArray.forEach(function(valor, indice) {

			
			if(game.Game ==valor.partidaId){
				b=false;
				var gameAux = game;
				Admin.gameArray[indice].setGame(game)
				//console.log('AUX',Admin.gameArray);
				
			}

		});
			if(b){
				var game = new Game(game.Game,game.url1,game.url2);
				Admin.gameArray.push(game);
				//console.log('Gaame array:',this.gameArray[game.Game]);

			}

			

		//console.log('gameArray:->',this.gameArray);
		return b;
	}




	
	gameAdmin.prototype.getPartidaByid = function getPartidaByid(id){

	return this.gameArray[id];
	//console.log(gameArray);
	} 
	gameAdmin.prototype.getPartidaBySockerId = function getPartidaBySockerId(Sockid){

	return this.gameArray[
	this.SockGameMap.get(Sockid)
	];
	//console.log(gameArray);
	} 

	gameAdmin.prototype.getGames = function getGames(){

	return this.gameArray;
	//console.log(gameArray);
	} 

	gameAdmin.prototype.getLastGame = function getLastGames(){

	return this.lastGameCreated;
	//console.log(gameArray);
	} 

	gameAdmin.prototype.getSocketIdOponent = function getSocketIdOponent(socketId){
		
		this.gameArray.forEach(function(valor, indice) {
			(valor);
		});

	}

	gameAdmin.prototype.addNewGame = function addNewGame(hash,socket,indice){
		//console.log('socket: '+s1);

		this.gameArray[indice].socketId1=socket;
		
		//this.gameArray[indice].userId1=u1;

		//hash scok game
		

		//hash socket game
		this.SockGameMap.set(socket,indice);
		if(this.gameArray[indice].socketId2!==null){

		this.SockGameMap.set(this.gameArray[indice].socketId2,indice);
		//hash  sock1 sock2
		this.map.set(this.gameArray[indice].socketId2,socket);
		//this.hashmap[this.gameArray[indice].socketId1]=s2;
		this.map.set(socket,this.gameArray[indice].socketId2);
		};

		//console.log(this.map);
		//console.log('juego creado::::',this.gameArray[indice]);
		return true;

	} ;


	gameAdmin.prototype.addOponent = function addOponent(hash2,socket2,indice){
		//seteo el socket del player 2
		this.gameArray[indice].socketId2=socket2;
		//this.gameArray[indice].userId2=hash2;
		//console.log(socket2,'casaaaaa0',this.gameArray[indice]);

		//hash sock game
		
		//this.gameArray[indice].socketI1d2=s2
		
		//
		//this.gameArray[indice].players.p2=s2
		//this.gameArray[indice].p2=s2
			//hash socket con indice 
		this.SockGameMap.set(socket2,indice);
		if(this.gameArray[indice].socketId1!==null){

			this.map.set(this.gameArray[indice].socketId1,socket2);
			//hash socket game
			//indice con socket de 1->2
			this.SockGameMap.set(this.gameArray[indice].socketId1,indice);
			//this.hashmap[this.gameArray[indice].socketId1]=s2;
			//indice con socket de 2->1
			this.map.set(socket2,this.gameArray[indice].socketId1);
		};
		//console.log(this.map);

		return true;
	}	


	gameAdmin.prototype.addGames = function addGames(id,hash,socket){

		var ub=null;
		var newP = true;
		

				//verifico si existe la partida si no la creo
			//gameArray.forEach(function(valor, indice, array) {
			this.gameArray.forEach(function(valor, indice) {
	    	//console.log("En el índice " + indice + " hay este valor: " + valor.partidaId + " id requerido"+ id);
	    		
	    		if(valor.partidaId==id){
		    		if(valor.userId2==hash)
		    		{
		    			//console.log('agregar oponente',hash,id);
		    			ub = indice;
		    			newP = false;
		    			Admin.addOponent(hash,socket.id,indice);
		    			console.log("agregado a partida");
		    			return ub;
		    			//console.log(ub);
		    			//console.log(newP);    		
		    		}
		    		else
		    		{
		    			Admin.addNewGame(hash,socket.id,indice);
						console.log('Creada la partida');
		    			ub = indice;
		    			return ub;
		    		}
	    		}else{

	    		}

			});

		return ub;

	}
				//creo la partida
				/*
					if(newP){
					return false;
					}else
					{return true};
	}
				*/



module.exports = gameAdmin;