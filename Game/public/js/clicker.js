

$(document).ready(function(){

	const socket = io();

	let click =document.getElementById('click');
	click.addEventListener('click',function(){
		console.log(click);
		socket.emit('clickemit',{
			click :"+1",
			User:"Playerx",
		})
	});
	//Al hacer click en un  jugador informo al server 
	var clickP =document.getElementsByClassName("click");

		$('.click-container').click(function (){

			let UserId = socket.id;
			let UserClickeado = this.id;
			console.log(UserClickeado);
			socket.emit('clickplayer',{
				click :"+1",
				//User: UserId,
				Userc:UserClickeado,
		//	})
		});

	});
  //respuesta clickAtack del servidor
	socket.on('clickAtack',function(ataque){
		console.log($('.click-container'));
		
		var itemagregar = $('div#'+ataque.Userc+'.click-container');
		itemagregar.append('<p class="clickeffect">'+'-1'+'</p>')
		/*
		*/
		$('.clickeffect').animate({
		    opacity: 1,
		   // left: "+=20",
		    height: "toggle",
		    //fontSize:"8em",
		    //transform: "translateY(4px)"
		},100,function(){
			opacity: 1;
			$('p.clickeffect').slideup(400,function(){
			$('p.clickeffect').remove();
				
			});
		});
		//console.log(itemagregar);
	});

	socket.on('readyConnection',function(ataque){
		

	});
});
