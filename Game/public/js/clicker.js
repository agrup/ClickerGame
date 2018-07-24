

$(document).ready(function(){

	const socket = io();

	//Al hacer click en un  jugador informo al server 
	var clickP =document.getElementsByClassName("click");

		$('.click-container').click(function (){

			let UserId = socket.id;
			let UserClickeado = this.id;
			
			console.log(UserClickeado);
			socket.emit('clickPlayer',{
				click :"+1",
				//User: UserId,
				Userc:UserClickeado,
		//	})
		});

	});
  //respuesta clickAtack del servidor
	socket.on('clickAtack',function(ataque){
		//console.log($('.click-container'));
		
		var itemagregar = $('div#'+ataque.Userc+'.click-container');
		itemagregar.append('<p class="clickeffect">Click</p>')
		/*
		itemagregar.slideup();
		*/
		$('.clickeffect').animate({
		    opacity: 0.25,
		    left: "+=100",
		    //height: "toggle"
		  }, 700, function() {
		    this.remove();
		    // Animation complete.
		  });
		//console.log(itemagregar);
	});

	socket.on('GameReady',function(Game){
		console.log(Game);
		console.log(Game.Player2);
		console.log(Game.Player1);


		$("#img-p1").append('<img src=/img'+Game.Player1.user.img+'.png alt=P1>');
		$("#img-p2").append('<img src=/img'+Game.Player2.user.img+'.png alt=P2>');

		$('#np1').append('<p>'+Game.Player1.user.name+'</p>');
		$('#np2').append('<p>'+Game.Player2.user.name+'</p>');
		
		$('#lp1').text(" Energia "+Game.Player1.vida);		
		
		$('#lp1-bar').append('<progress id="health-1" value='+Game.Player1.vida+' max='+Game.Player1.vida+'></progress>');
		
		$('#lp2').text(" Energia "+Game.Player2.vida);
		$('#lp2-bar').append('<progress id="health-2" value='+Game.Player2.vida+' max='+Game.Player2.vida+'></progress>');
		
		$('#up1').append('<p>Personaje'+Game.Player1.user.Player+'</p>');
		$('#up2').append('<p>Personaje'+Game.Player2.user.Player+'</p>');

	});	
	socket.on('oponentDiconnect',function(){
		console.log('Desconectado');
	});

	socket.on('GameRefresh',function(Game){

		$('#lp1').text(' Energia '+Game.Player1.vida);
		$('#lp2').text(' Energia '+Game.Player2.vida);

		$('#lp1').attr('value',Game.Player1.vida);
		//$('#lp1').append('<p> Energia '+Game.Player1.Vida+'</p>');		
		
		$('#health-1').attr('value',Game.Player1.vida);

		$('#lp1').attr('value',Game.Player1.vida);
		//$('#lp2').append('<p> Energia '+Game.Player2.Vida+'</p>');
		$('#health-2').attr('value',Game.Player2.vida);
		//$('#lp2').append('<progress id="health-2" value='+Game.Player2.Vida+' max='+Game.Player2.Vida+'></progress>');


	});
	socket.on('GameFinsh',function(Result){
		$('dev.finish').append('<h1>Usted: '+Result+'</h1>');
		alert(Result);
	});

	function block(){
		$('myblock').width('100%');
	};
	function unBlock(){
		$('myblock').width('0%');
	};
});
