
function Game (partidaId ,userId1,userId2){

	this.userId1 = userId1;
	this.userId2 = userId2;
	this.socketId1 = null;
	this.socketId2 = null;
	this.partidaId =partidaId;

	this.players=null;


//partida harcodeada para poder hacer las pruebas 
/*

	this.players={
		"player1":
			{


				"max-vida":100,
				"Vida":100,

				"Ataque":1,
				"Defensa":0.5,
				"especial":{
					"Ataque +":0,
					"Ataque x":1,
					"Vida":0
				},
				"User":{
				"Player":1,
				"name":"Luli",
				"Player":"Goku-00",

				"img":"freezer-4.png"
			}
		},

		"player2":
		{

			"max-vida":100,
			"Vida":100,
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
				"Player":"Goku",
				"img":"Goku-0.png"
			}
		}
	};


*/


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
	Game.prototype.setGame = function setGame(game){
		console.log('holaaa:',game);
		//this.players= game;
		this.players=game;

	}


module.exports = Game;
