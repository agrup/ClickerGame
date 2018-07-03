
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


	gameAdmin.prototype.getMap = function getMap(){
		return this.map;
	}

	gameAdmin.prototype.clickEvent = function clickEvent(socketId,opp, clickData){
		//busco el oponente y le aplico el ataque
		//busco la partida
		let partida = this.SockGameMap.get(socketId);
		//veridico que player es
		if (partida !==undefined){
			let game = this.gameArray[partida];
			if(game.socketId1==socketId){
				if(clickData.Userc=='player1'){

				let vida =game.players['player1'].Vida -=
					game.players['player2'].Ataque;
							if(game.players['player1'].Vida <=0){
								return true;
								//console.log('vida: '+vida);
							};
						}else{
							console.log('defensa deshabilitada');
						}

			}else{
				if(clickData.Userc=='player2'){
					let vida =game.players['player2'].Vida -=
						game.players['player1'].Ataque;
							if(game.players['player2'].Vida <=0){
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
	gameAdmin.prototype.addNewGame = function addNewGame(id,u1,u2,s1){
		//console.log('socket: '+s1);

		var game = new Game(id,u1,u2,s1);
		//game.players.p1=s1;
		game.p1=s1.id;
		//game.setuserId2(u2);
		//game.setuserId1(u1);
		var ub = this.gameArray.push(game);
		//this.gameArray[ub].players.p1=s1;
		//console.log("game"+game.getGameJSON());
		console.log(s1);

		//this.lastGameCreated = id;
		//console.log(this.gameArray ,this.lastGameCreated);

		return ub;
	} ;
	
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
	gameAdmin.prototype.addOponent = function addOponent(s2,indice){
		//console.log(s2);
		//seteo el socket del player 2
		this.gameArray[indice].socketId2=s2;
		//hash scok game
		this.map.set(this.gameArray[indice].socketId1,s2);
		
		//this.gameArray[indice].socketI1d2=s2
		
		//
		//this.gameArray[indice].players.p2=s2
		this.gameArray[indice].p2=s2
		//hash socket game
		this.SockGameMap.set(s2,indice);
		this.SockGameMap.set(this.gameArray[indice].socketId1,indice);
		//this.hashmap[this.gameArray[indice].socketId1]=s2;
		this.map.set(s2,this.gameArray[indice].socketId1);
		//console.log(this.map);

		return true;
	}	


	gameAdmin.prototype.addGames = function addGames(id,u1,u2,s1){


		var newP = true;

				//verifico si existe la partida si no la creo
				//gameArray.forEach(function(valor, indice, array) {
				this.gameArray.forEach(function(valor, indice) {
		    	//console.log("En el índice " + indice + " hay este valor: " + valor.partidaId + " id requerido"+ id);

		    		if(valor.partidaId==id ){
		    			
		    			newP = false;
		    			var ub = indice;
		    			Admin.addOponent(s1.id,indice);
		    			console.log("agregado a partida");
		    			//console.log(newP);    		
		    		}

				});


				//creo la partida
					if(newP){
						//creo una partida nueva
					//var game = new Game(id);
					console.log(s1,s1.id)
					let ub = this.addNewGame(id,u1,u2,s1.id);

					return false;
					}else
					{return true};
	}



module.exports = gameAdmin;