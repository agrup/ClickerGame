
function Game (partidaId ,userId1,userId2){

	this.userId1 = userId1;
	this.userId2 = userId2;
	this.socketId1 = null;
	this.socketId2 = null;
	this.partidaId =partidaId;

	this.players=null;





}
	Game.prototype.getRoom = function getPlayer2(){
		this.players;
	} 
		Game.prototype.SetRoom = function getPlayer2(Room){
		this.players=Room;
	} 

	Game.prototype.getPlayer2 = function getPlayer2(){
		return this.player2;
	} 
		Game.prototype.getPlayerOneBySocket = function getPlayerOneBySocket(){
		return this.player;
	} 

	Game.prototype.getGame = function getPGame(){
		return this.socketId1;
	} 

	Game.prototype.getPartida = function getPartida(){
		return this.partidaId;
	} 

	Game.prototype.setuserId1 = function setuserId1(user){
		this.userId1= user;
	} 

	Game.prototype.setuserId2 = function setuserId2(user){
		this.userId2= user;
	}

	Game.prototype.setSocketId2 = function setuserId2(sock){
		this.SocketId2= sock;
	}

	Game.prototype.setSocketId1 = function setuserId1(sock){
		this.SocketId1= sock;
	}
	Game.prototype.setGame = function setGame(game){
		//console.log('holaaa:',game);
		//this.players= game;
		this.players=game;

	}


module.exports = Game;
