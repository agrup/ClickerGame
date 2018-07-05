
function Game (partidaId ,userId1,userId2,socketId1){

	this.userId1 = userId1;
	this.userId2 = userId2;
	this.socketId1 = socketId1;
	this.socketI1d2 = null;
	this.partidaId =partidaId;



	this.players={
		"player1":
			{
				"Vida":10,
				"Ataque":1,
				"Defensa":0.5,
				"especial":{
					"Ataque +":0,
					"Ataque x":1,
					"Vida":0
				},
				"User":{
				"Player":1,
				"name":"Bruno",
				"Player":"Goku-00",
				"img":"Goku-00"
			}
		},

		"player2":
		{
			"Vida":10,
			"Ataque":1,
			"Defensa":0.5,
			"especial":{
				"Ataque +":1,
				"Ataque x":1,
				"Vida":0
			},
			"User":{
				"Player":2,
				"name":"Agustin",
				"Player":"Freezer",
				"img":"Freezer-4"
			}
		}
	};




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

	Game.prototype.getGame = function getPGame(){
		return this;
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


module.exports = Game;
