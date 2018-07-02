Game = require('./Game');
var HashMap = require('hashmap');
function gameAdmin(){

	//harcodeadas las partidas
	//partidas autorizadas
this.gameAvalible=[11,17,19];
this.map = new HashMap();
this.SockGameMap = new HashMap();
//this.hashMap=[];
this.gameArray =[];
this.lastGameCreated=null;
};

	gameAdmin.prototype.getMap = function getMap(){
		return this.map;
	}

	gameAdmin.prototype.clickEvent = function clickEvent(socketId,opp, clickplayer){
		//busco el oponente y le aplico el ataque
		//busco la partida
		let partida = this.SockGameMap.get(socketId);
		//veridico que player es
		let game = this.gameArray[partida];
		if(game.socketId1==socketId){
			let vida =game.players['player2'].Vida -=
				game.players['player1'].Ataque;
						console.log('vida: '+vida);

		}else{
			let vida =game.players['player1'].Vida -=
				game.players['player2'].Ataque;
						console.log('vida: '+vida);

		}


	}
	gameAdmin.prototype.addNewGame = function addNewGame(id,u1,u2,s1){
		//console.log('socket: '+s1);

		var game = new Game(id,u1,u2,s1);
		game.players.p1=s1;
		//game.setuserId2(u2);
		//game.setuserId1(u1);
		var ub = this.gameArray.push(game);
		//this.gameArray[ub].players.p1=s1;
		//console.log("game"+game.getGameJSON());
		console.log("gameArray"+game.getPlayer2());

		//this.lastGameCreated = id;
		//console.log(this.gameArray ,this.lastGameCreated);

		return ub;
	} ;
	
	gameAdmin.prototype.getPartidaByid = function getPartidaByid(id){

	return this.gameArray[id];
	//console.log(gameArray);
} 
	gameAdmin.prototype.getPartidaBySockerId = function getPartidaBySockerId(Sockid){

	return this.gameArray[id];
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
/*
*/
	}
	gameAdmin.prototype.addOponent = function addOponent(s2,indice){
		//console.log(s2);
		this.gameArray[indice].socketId2=s2;
		this.gameArray[indice].players.p2=s2
		this.map.set(this.gameArray[indice].socketId1,s2);
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
		    			Admin.addOponent(s1,indice);
		    			console.log("agregado a partida");
		    			//console.log(newP);    		
		    		}

				});


				//creo la partida
					if(newP){
						//creo una partida nueva
					//var game = new Game(id);
					let ub = this.addNewGame(id,u1,u2,s1);

					return ub;
					}
		}



module.exports = gameAdmin;