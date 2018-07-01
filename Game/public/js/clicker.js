const socket = io()
console.log(socket)

$(document).ready(function(){


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
				User: UserId,
				Userc:UserClickeado,
		//	})
		});
	});
  //respuesta clickAtack del servidor
	socket.on('clickAtack',function(ataque){
		console.log($('.click-container'));
	
		var itemagregar = $('div#'+ataque.Userc+'.click-container');
		console.log(itemagregar);
		itemagregar.append('<li>'+ataque.click+'->'+ataque.User+'->'+ataque.Userc+'</li>');
	});
});
