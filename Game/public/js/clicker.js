game = {

inicio:false,
	init:function(){
			
			$(document).ready(function(){

			const socket = io();

			//Al hacer click en un  jugador informo al server 
			var clickP =$(".click");

				$('.click-container').click(function (){

					let UserId = socket.id;
					let UserClickeado = this.id;
					
					//console.log(UserClickeado);
					socket.emit('clickPlayer',{
						click :"+1",
						//User: UserId,
						Userc:UserClickeado,
				//	})
				});



			});



		  //respuesta clickAtack del servidor
			socket.on('clickAtack',function(ataque){
				//console.log('casa   ', ataque.Userc);
				
				var itemagregar = $('div#'+ataque.Userc+'.click-container');
				//var itemagregar = $('div#'+ataque.Userc+'Click');
				console.log(itemagregar);
				itemagregar.append('<div class="ciruclo"><p class="clickeffect circulo">Click</p></div>');
				/*
				itemagregar.slideup();
				*/
				if(ataque.Userc=='Player1'){
					
				
				$('.clickeffect').animate({
			    	opacity: 0.25,
			    	background: "red",
				    left: -500,
				    width: 100
				    //height: "toggle"
				  }, 1100, function() {
				    this.remove();
				    // Animation complete.
				  });
				}else{

				$('.clickeffect').animate({
					left: -10,
		     		pacity: 0.25,
				    width: 200,
		     		height: 200
				    //height: "toggle"
				    //height: "toggle"
				  }, 1100, function() {
				    this.remove();
				    // Animation complete.
				  });


				}
				//console.log(itemagregar);
			});





			socket.on('GameReady',function(Game,ub){
				console.log(ub);

				if(!game.inicio)
				{
					game.inicio=true;
				$('.finish').hide();
		if(ub){
			aux = $(".left")
			$(".right").attr('class', 'split left');
			
			aux.attr('class', 'split right');
		}
				var a = $('#img-p1').children('img');
				$("#img-p1").append(a);
				a.attr('src','/img'+Game.Player1.user.img+'.png');



				var b =$('#img-p2').children('img');
				$("#img-p2").append(b);
				b.attr('src','/img'+Game.Player2.user.img+'.png');

				//$("#img-p2").append('<img src=/img'+Game.Player2.user.img+'.png alt=P2>');

				$('#np1').children('p').text(Game.Player1.user.name);
				$('#np2').children('p').text(Game.Player2.user.name);
				//$('#np2').append('<p>'+Game.Player2.user.name+'</p>');
				
				$('#lp1').text(" Energia "+Game.Player1.vida);		
				
				$('#lp1-bar').append('<progress id="health-1" value='+Game.Player1.vida+' max='+Game.Player1.vida+'></progress>');
				
				$('#lp2').text(" Energia "+Game.Player2.vida);
				$('#lp2-bar').append('<progress id="health-2" value='+Game.Player2.vida+' max='+Game.Player2.vida+'></progress>');
				
				$('#up1').children('p').append(Game.Player1.user.Player);
				$('#up2').children('p').append(Game.Player2.user.Player);

				}
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

			socket.on('GameWait',function(Time,p1){
				/*
				console.log(Time,p1);
				if(p1)
				{	
					var texttime=4
					//setInterval( function(){
					a = $('#img-p2').children('div')
					a.text('oponente a clickear')
					//$('#img-p2').children('div').text('oponente en '+texttime)
					a.css('color','white')
					a.css('font-size',24)
					a.toggle( "bounce", { times: 3 }, 2999 );
					//})
					//$( "#toggle" ).toggle( "bounce", { times: 3 }, "slow" );

				}else{
					var texttime=4
					//setInterval( function(){
					a = $('#img-p1').children('div')
					a.text('oponente en '+(texttime-1))
					//$('#img-p2').children('div').text('oponente en '+texttime)
					a.css('color','white')
					a.css('font-size',24)
					a.toggle( "bounce", { times: 3 }, 2999 );
					
				}
				*/

			});

			socket.on('GameFinsh',function(Result){
				$('dev.finish').append('<h1>Usted: '+Result+'</h1>');
				alert(Result);
				window.close();
			});

			function block(){
				$('myblock').width('100%');
			};
			function unBlock(){
				$('myblock').width('0%');
			};
		});
	}
}
