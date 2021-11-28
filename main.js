var canvas
var ctx

var puntos=0
var vidas=3
var tiempo=60

var posFondo=0
var moverFondo=false
var pausa=false

var sonidoMapa1
var sonidoVida1
var sonidoPerdida1
var sonidoMoneda1
var sonidoReloj
var sonidoInicio
var sonidoFin
var sonidoGanaste

/***********************	 PJ,ELEMENTOS	 ***********************/
var imgPersonaje1=new Image()
var imgEnemigo= new Image()
var imgEnemigoDos= new Image()
var imgEnemigoTres= new Image()
var imgEnemigoCuatro=new Image()
var imgEnemigoCinco=new Image()
var imgEnemigoSeis=new Image()
var imgEnemigoSiete= new Image()
var imgEnemigoOcho= new Image()
var imgMoneda= new Image()
var imgReloj= new Image()
var imgPegamento= new Image()
var imgVidas3= new Image()
var imgVidas2= new Image()
var imgVidas1= new Image()
var imgcuadroDialogo= new Image()


/***********************	 SONIDOS	 ***********************/
sonidoMapa1=new Audio()
sonidoMapa1.src="sound/mapa1.mp3"
sonidoVida1=new Audio()
sonidoVida1.src="sound/lifeUp.mp3"
sonidoPerdida1=new Audio()
sonidoPerdida1.src="sound/colision1.mp3"
sonidoMoneda1=new Audio()
sonidoMoneda1.src="sound/moneda1.mp3"
sonidoReloj=new Audio()
sonidoReloj.src="sound/moneda1.mp3"     
sonidoInicio=new Audio()
sonidoInicio.src="sound/inicioJuego.mp3"
sonidoFin=new Audio()
sonidoFin.src="sound/finJuego.mp3"
sonidoMenuClick=new Audio()
sonidoMenuClick.src="sound/menuClick.wav"
sonidoStart=new Audio()
sonidoStart.src="sound/start.ogg"
sonidoGanaste=new Audio()
sonidoGanaste.src="sound/ganaste.mp3"

var contador=0
var textos=["Uh... Se me hizo re tarde...","Justo estan saliendo todos...","¡ Esta maqueta es muy fragil !","¡ Si no me aprueban voy a recursar !","Tengo hambre...","Ese que viene ahí lo conozco...","¿Qué hora es?","Quiero que termine el año!"]
var pos=0

/***********************	 FUENTES	 ***********************/
var fuente= new FontFace("FuentePlaca","url(fonts/04b_30_.TTF) format('truetype')")
document.fonts.add(fuente)
fuente.load().then(dibujar)
var fuente2= new FontFace("FuenteDialogo","url(fonts/upheavtt.ttf) format('truetype')")
document.fonts.add(fuente2)
fuente2.load().then(dibujar)

/*********************** POSICIONES INICIALES ***********************/
var alturaInicial=80;
var anchoInicial=64;
var alturaEnemigoInicial=80
var anchoEnemigoInicial=80
var posXPer=210;
var posYPer=400;
var posMonedaX=210
var posMonedaY=200
var posRelojX=80
var posRelojY=200
var posPegamentoX=210
var posPegamentoY=-200
var posEnemigo1X=160
var posEnemigo1Y=100
var posEnemigo2X=500
var posEnemigo2Y=0
var posEnemigo3X=30
var posEnemigo3Y=600
var posEnemigo4X=130
var posEnemigo4Y=700
var posEnemigo5X=30
var posEnemigo5Y=-600
var posEnemigo6X=30
var posEnemigo6Y=-600
var posEnemigo7X=30
var posEnemigo7Y=-600
var posEnemigo8X=30
var posEnemigo8Y=-600
var fondoInicial="url(imgs/escenario1.png)"

/*********************** CREACION DE PERSONAJES ***********************/

var personajeUno=new Personaje(posXPer,posYPer,anchoInicial,alturaInicial,3,1);
var moneda= new Elemento(210,200,50,50,"moneda")
var reloj= new Elemento(80,200,43,43,"reloj")
var pegamento= new Elemento(180,600,80,30,"pegamento")
var enemigoUno= new SpriteEnemigo(160,100,anchoEnemigoInicial,alturaEnemigoInicial,3,1,"Enemigo")
var enemigoDos= new SpriteEnemigo(500,0,anchoEnemigoInicial,alturaEnemigoInicial,3,1,"Enemigo2")
var enemigoTres= new SpriteEnemigo(30,600,anchoEnemigoInicial,alturaEnemigoInicial,3,1,"Enemigo3")
var enemigoCuatro= new SpriteEnemigo(130,700,anchoEnemigoInicial,alturaEnemigoInicial,3,1,"Enemigo")
var enemigoCinco= new SpriteEnemigo(90,700,anchoEnemigoInicial,alturaEnemigoInicial,3,1,"Enemigo2")
var enemigoSeis= new SpriteEnemigo(400,700,anchoEnemigoInicial,alturaEnemigoInicial,3,1,"Enemigo2")
var enemigoSiete= new SpriteEnemigo(530,700,anchoEnemigoInicial,alturaEnemigoInicial,3,1,"Enemigo2")
var enemigoOcho= new SpriteEnemigo(30,700,anchoEnemigoInicial,alturaEnemigoInicial,3,1,"Enemigo2")
var vidas3=new Elemento(150,508,120,120,"vidas3")
var vidas2= new Elemento(150,508,120,120,"vidas2")
var vidas1= new Elemento(150,508,120,120,"vidas1")
var cuadroDialogo= new Elemento(0,600,400,200,"cuadro")


var colorBoton="#000";
var inicio=false;


window.onload=function(){
	dibujar()
	window.onload=function(){
		jugar()
	}
}
function dibujar(){
	//Acá creo el canvas y el contexto
	canvas=document.getElementById("canvas");
	ctx=canvas.getContext('2d');

	canvas.style.background="url(imgs/imgsPlacaInicio/placa.jpg)"
	canvas.style.backgroundSize="cover";
	//y dibujo el estado inicial, el resto que estaba acá lo moví a la función juego.
	borrar();
}


function jugar(){
	dibujar()
	inicio=true; //indico que el juego está iniciado

	canvas.style.cursor=""; // preventivamente, vuelvo el cursor a normal
	canvas.style.background="url(imgs/escenario1.png)"


	imgPersonaje1.src="imgs/spritePersonaje.png" //dibujamos nuestro personaje
	imgPersonaje1.onload=function(){
	personajeUno.dibujar()
	}
	dibujarTexto()
	dibujarMaqueta()

	imgMoneda.src="imgs/moneda.png"  //dibujamos nuestra moneda
	imgMoneda.onload=function(){
		moneda.dibujar(imgMoneda)
	}

	imgReloj.src="imgs/reloj.png"  //dibujamos nuestra moneda
	imgReloj.onload=function(){
		reloj.dibujar(imgReloj)
	}

	imgPegamento.src="imgs/suprabond.png"  //dibujamos nuestro pegamento
	imgPegamento.onload=function(){
		pegamento.dibujar(imgPegamento)
	}


	imgEnemigo.src="imgs/spriteEnemigo1.png"  //dibujamos nuestro enemigo numero 1
	imgEnemigo.onload=function(){
		enemigoUno.dibujar(imgEnemigo)
	}
	imgEnemigoDos.src="imgs/spriteEnemigo2.png"  //dibujamos nuestro enemigo numero 2
	imgEnemigoDos.onload=function(){
		enemigoDos.dibujar(imgEnemigoDos)
	}
	imgEnemigoTres.src="imgs/spriteEnemigo3.png"  //dibujamos nuestro enemigo numero 3
	imgEnemigoTres.onload=function(){
		enemigoTres.dibujar(imgEnemigoTres)
	}

	imgVidas3.src="imgs/vidas3.png"
	imgVidas3.onload=function(){
		//imgVidas3.dibujar(imgVidas3)
	}

	imgVidas2.src="imgs/vidas2.png"
	imgVidas2.onload=function(){
		//imgVidas2.dibujar(imgVidas2)
	}
	imgVidas1.src="imgs/vidas1.png"
	imgVidas1.onload=function(){

		//imgVidas1.dibujar(imgVidas1)
	}

	imgcuadroDialogo.src="imgs/cuadroDialogo.png"
	imgcuadroDialogo.onload=function(){
		cuadroDialogo.dibujar(imgcuadroDialogo)
	}

	setInterval(function(){  			//intervalo para mover/colisionar/dibujar nuestros objetos 

		

	if(vidas>0&&tiempo>0){
		sonidoMapa1.play()
		contador++;
		moverFondo=true
		if(contador%40==0&&tiempo>0){
			tiempo--;
		}
		if(contador%250==0){
			sortearArray();
		}	

		if(puntos<25){
			enemigoUno.caer()
			moneda.caer2()
			enemigoDos.caer()
			enemigoTres.caer()
			enemigoCuatro.caer()
			enemigoCinco.caer()
			moneda.caer2()
			if(tiempo<100){
				reloj.caer2()
			}

		}else if(puntos>=25&&puntos<=50){
			canvas.style.background="url(imgs/escenario2.png)"
			pegamento.caer2()
			enemigoUno.caer()
			enemigoUno.caer()
			enemigoDos.caer()
			enemigoTres.caer()
			enemigoCuatro.caer()
			enemigoCinco.caer()
			moneda.caer2()
			if(tiempo<100){
				reloj.caer2()
			}
			
		}else if(puntos>50&&puntos<=100){
			
			pegamento.caer2()
			enemigoUno.caer2()
			enemigoUno.caer()
			enemigoDos.caer()
			enemigoTres.caer3()
			enemigoCuatro.caer3()
			enemigoCinco.caer()
			enemigoSeis.caer3()
			enemigoOcho.caer()
			enemigoSiete.caer2()
			moneda.caer2()
			if(tiempo<100){
				reloj.caer2()

			}
			}else if(puntos>=100&&puntos<=200){
				canvas.style.background="url(imgs/escenario3.png)"
				pegamento.caer2()
				enemigoUno.caer3()
				enemigoUno.caer3()
				enemigoDos.caer3()
				enemigoTres.caer3()
				enemigoCuatro.caer2()
				enemigoCinco.caer3()
				enemigoSeis.caer()
				enemigoSiete.caer3()
				enemigoSiete.caer3()
				moneda.caer2()
				if(tiempo<100){
					reloj.caer2()
				}
		}
		
		enemigoUno.colision()
		enemigoDos.colision()
		enemigoTres.colision()
		enemigoCuatro.colision()
		enemigoCinco.colision()
		enemigoSeis.colision()
		enemigoSiete.colision()
		enemigoOcho.colision()
		moneda.colision()
		reloj.colision()
		pegamento.colision()
		borrar()
		
		personajeUno.actualizar()
		personajeUno.dibujar()
		
		moneda.dibujar(imgMoneda)
		reloj.dibujar(imgReloj)
		pegamento.dibujar(imgPegamento)
		enemigoUno.actualizar()
		enemigoUno.dibujar()
		enemigoDos.actualizar()
		enemigoDos.dibujar()
		enemigoTres.actualizar()
		enemigoTres.dibujar()
		enemigoCuatro.actualizar()
		enemigoCuatro.dibujar()
		enemigoCinco.actualizar()
		enemigoCinco.dibujar()
		enemigoSeis.actualizar()
		enemigoSeis.dibujar()
		enemigoSiete.actualizar()
		enemigoSiete.dibujar()
		enemigoOcho.actualizar()
		enemigoOcho.dibujar()

		dibujarCuadro()
		dibujarTexto()
		dibujarMaqueta()
		dibujarPensamiento()

	}else if(vidas==0||tiempo==0||vidas==-1||tiempo==-1){
		borrar()
		sonidoMapa1.pause() 							//Detener sonido
		sonidoFin.play() 								//Sonido FIN 											
		vidas=-2									//forzamos "vidas", para detener el sonido
		tiempo=-2										
		ctx.font="40px FuentePlaca"
		ctx.fillText("PERDISTE!",50,320)
		ctx.font="30px FuentePlaca";
		ctx.fillText("REINICIAR",90,370);
		pausa=true
	}

		if(puntos>=150){
		borrar()
		moverFondo=false
		vidas=-2
		puntos=-2
		tiempo=-2
		sonidoMapa1.pause() 
		sonidoGanaste.play()												
		ctx.font="40px FuentePlaca"
		ctx.fillText("GANASTE",85,320)
		ctx.font="30px FuentePlaca";
		ctx.fillText("REINICIAR",100,370);
		canvas.style.background="url(imgs/imgsPlacaInicio/finJuego.jpg)"
		canvas.style.backgroundSize="cover";
		pausa=true
	}
		
		if(moverFondo==true && puntos<25){
		 /*********		MOVEMOS EL FONDO 		******/
		 posFondo+=2
		 canvas.style.backgroundPosition="0px "+posFondo+"px"
		}else if(moverFondo==true && puntos>=25&&puntos<100){
			posFondo+=4
		 canvas.style.backgroundPosition="0px "+posFondo+"px"
		}else if(moverFondo==true && puntos>=100&&puntos<=200){
			posFondo+=6
		 canvas.style.backgroundPosition="0px "+posFondo+"px"
		}else if(moverFondo==false){
				posFondo=0
				canvas.style.backgroundPosition="0px "+posFondo+"px"
		}	
	},1000/25)
}

/************************* MOLDE DE NUESTROS PERSONAJES ************************/
function Personaje(x,y,ancho,alto,fotogramasTotales,tiempoPorFotograma){
    this.x=x;
    this.y=y;
    this.ancho=ancho;
    this.anchoRecorte=64;
    this.alto=alto;
    this.altoRecorte=64;
	this.fotogramasTotales=fotogramasTotales;
    this.tiempoPorFotograma=tiempoPorFotograma;
    this.contador = 0;
    this.fotogramaActual=0;

	this.actualizar = function () {

        this.contador += 1;

        if (this.contador > tiempoPorFotograma) {

            this.contador = 0;
            
            // va pasando de fotogramas
            if (this.fotogramaActual < fotogramasTotales - 1) {	
                //ir al fotograma siguiente
                this.fotogramaActual += 1;
            } else {
                //sino el siguiente es el primer fotograma
                this.fotogramaActual = 0;
            }
        }
    }

    this.dibujar=function(){
        ctx.drawImage(
			imgPersonaje1,
			this.fotogramaActual * this.anchoRecorte, //donde empieza el recorte en x
			0, //donde empieza el recorte en y
			this.anchoRecorte, //ancho del recorte
			this.altoRecorte,//alto del recorte
			this.x,//ubicacion del personaje en x
			this.y,//ubicacion del personaje en y
			this.ancho,//ancho de la imagen
			this.alto //alto de la imagen
		);
    }

	this.irDerecha=function(){
		if(this.x<320){
			this.x+=32;
		}
		
	}
	this.irIzquierda=function(){
		if(this.x>0){
			this.x-=32;

		}
	}
	this.avanzar=function(){
		posFondo+=6
		canvas.style.backgroundPosition="0px "+posFondo+"px"
	}

}
/************************ MOLDE DE NUESTROS OBJETOS ***************************/
function Elemento(x,y,ancho,alto,tipo){
	this.x=x
	this.y=y
	this.ancho=ancho
	this.alto=alto
	this.tipo=tipo

	this.dibujar=function(img){
		ctx.drawImage(img,this.x,this.y,this.ancho,this.alto)
	}
	this.caer=function(){  
		if(this.y<800){										//si está dentro del canvas, que caiga
			this.y+=5
		}else{
			this.sortear()									//si no, que sortee una posX e Y en el top
		}
	}
	
	this.sortear=function(){
		this.x=Math.floor(Math.random()*(350-30+1))+30         //sortea una posX random

		this.y=Math.floor(Math.random()*((-70)-(-190)+1))+(-190) //sortea una posY random
	}

	this.caer2=function(){  
		if(this.y<800){										
			this.y+=3
		}else{
			this.sortear()	
		}								
	}

	this.colision=function(){  									//colision teniendo en cuenta el vertice 0,0 de la imagen
		if(
			(this.x<personajeUno.x+personajeUno.ancho)&&
			(this.x>personajeUno.x-this.ancho)&&
			(this.y>personajeUno.y-this.alto)&&
			(this.y<personajeUno.y+personajeUno.alto)
		  ){

			if(this.tipo=="moneda"){
				puntos+=5
				sonidoMoneda1.play()
				this.sortear()                                         //Sonido +Puntos
			}else if(this.tipo=="pegamento"){
				if(vidas<3 && vidas>=0){
					vidas++
					sonidoVida1.play()                                         //Sonido +Vida
				}
			}else if (this.tipo=="reloj"){
				tiempo+=5
				puntos+=5
				sonidoMoneda1.play() 
			}  else{
				tiempo-=5
				vidas--
				sonidoPerdida1.play()
				if(tiempo<=0){
					tiempo=0
				}                                        //Sonido -Vida
			}
			this.sortear()
		   }
	}
}

function SpriteEnemigo(x,y,ancho,alto,fotogramasTotales,tiempoPorFotograma,tipo){
    this.x=x;
    this.y=y;
    this.ancho=ancho;
    this.anchoRecorte=64;
    this.alto=alto;
    this.altoRecorte=64;
	this.fotogramasTotales=fotogramasTotales;
    this.tiempoPorFotograma=tiempoPorFotograma;
    this.contador = 0;
    this.fotogramaActual=0;
	this.tipo=tipo

	this.actualizar = function () {

        this.contador += 1;

        if (this.contador > tiempoPorFotograma) {

            this.contador = 0;
            
            // va pasando de fotogramas
            if (this.fotogramaActual < fotogramasTotales - 1) {	
                //ir al fotograma siguiente
                this.fotogramaActual += 1;
            } else {
                //sino el siguiente es el primer fotograma
                this.fotogramaActual = 0;
            }
        }
    }

    this.dibujar=function(){
		if(tipo=="Enemigo"){
			ctx.drawImage(
				imgEnemigo,
				this.fotogramaActual * this.anchoRecorte, //donde empieza el recorte en x
				0, //donde empieza el recorte en y
				this.anchoRecorte, //ancho del recorte
				this.altoRecorte,//alto del recorte
				this.x,//ubicacion del personaje en x
				this.y,//ubicacion del personaje en y
				this.ancho,//ancho de la imagen
				this.alto //alto de la imagen
			);
		}else if(tipo=="Enemigo2"){
			ctx.drawImage(
				imgEnemigoDos,
				this.fotogramaActual * this.anchoRecorte, //donde empieza el recorte en x
				0, //donde empieza el recorte en y
				this.anchoRecorte, //ancho del recorte
				this.altoRecorte,//alto del recorte
				this.x,//ubicacion del personaje en x
				this.y,//ubicacion del personaje en y
				this.ancho,//ancho de la imagen
				this.alto //alto de la imagen
			);
		}else if(tipo=="Enemigo3"){
			ctx.drawImage(
				imgEnemigoTres,
				this.fotogramaActual * this.anchoRecorte, //donde empieza el recorte en x
				0, //donde empieza el recorte en y
				this.anchoRecorte, //ancho del recorte
				this.altoRecorte,//alto del recorte
				this.x,//ubicacion del personaje en x
				this.y,//ubicacion del personaje en y
				this.ancho,//ancho de la imagen
				this.alto //alto de la imagen
			);
		}
        
    }

	this.caer=function(){  
		if(this.y<800){										//si está dentro del canvas, que caiga
			this.y+=5
		}else{
			this.sortear()									//si no, que sortee una posX e Y en el top
		}
	}
	
	this.sortear=function(){
		this.x=Math.floor(Math.random()*(350-30+1))+30         //sortea una posX random

		this.y=Math.floor(Math.random()*((-70)-(-190)+1))+(-190) //sortea una posY random
	}

	this.caer2=function(){  
		if(this.y<800){										
			this.y+=3
		}else{
			this.sortear()	
		}								
	}
	this.caer3=function(){  
		if(this.y<800){										
			this.y+=6
		}else{
			this.sortear()	
		}								
	}

	this.colision=function(){  									//colision teniendo en cuenta el vertice 0,0 de la imagen
		if(
			(this.x<personajeUno.x+personajeUno.ancho)&&
			(this.x>personajeUno.x-this.ancho)&&
			(this.y>personajeUno.y-this.alto)&&
			(this.y<personajeUno.y+personajeUno.alto)
		  ){

			if(this.tipo=="moneda"){
				puntos+=5
				sonidoMoneda1.play()
				this.sortear()                                         //Sonido +Puntos
			}else if(this.tipo=="pegamento"){
				if(vidas<3 && vidas>=0){
					vidas++
					sonidoVida1.play()                                         //Sonido +Vida
				}
			}else if (this.tipo=="reloj"){
				tiempo+=5
				puntos+=5
				sonidoMoneda1.play() 
			}  else{
				tiempo-=5
				vidas--
				sonidoPerdida1.play()
				if(tiempo<=0){
					tiempo=0
				}                                      
			}
			this.sortear()
		   }
	}
}

function dibujarTexto(){							//dibuja vidas y puntos
	ctx.font="25px FuenteDialogo"
	ctx.fillStyle="#000"
	ctx.fillText("Puntos: "+puntos,20,630)
	ctx.fillText("Vidas: "+vidas,230,630)
	ctx.fillText("Tiempo: "+tiempo,230,650)
}

function dibujarMaqueta(){
	if(vidas==3){
		vidas3.dibujar(imgVidas3)
	}else if(vidas==2){
		vidas2.dibujar(imgVidas2)
	}else{
		vidas1.dibujar(imgVidas1)
	}
	
}

function dibujarPensamiento(){
	ctx.font="20px FuenteDialogo"
	ctx.fillStyle="#000"
	ctx.fillText(textos[pos],20,720)
	}

function sortearArray(){
	pos=Math.floor(Math.random()*7)
}

function dibujarCuadro(){
	cuadroDialogo.dibujar(imgcuadroDialogo)
}

/*function dibujarTextoInicio(){
	borrar();
	ctx.font="35px FuentePlaca";
	ctx.fillStyle=colorBoton;
	ctx.fillText('INICIAR', 100,300);

}*/

function borrar(){									//borra la img para que no se repita
	ctx.clearRect(0,0,canvas.width,canvas.height)	
}
document.addEventListener("keydown",function(e){    //mover personaje
	switch(e.key){
		case "a":
			personajeUno.irIzquierda()
		break
		case "d":
			personajeUno.irDerecha()
		break
		case "w":
			personajeUno.avanzar()
			enemigoUno.caer()
			enemigoDos.caer()
			enemigoTres.caer()
			enemigoCuatro.caer()
			enemigoCinco.caer()
			moneda.caer()
			reloj.caer()
			pegamento.caer()
		break;
	}
})

document.addEventListener("click",function(e){
	//Acá evaluo en función de vidas y de la variable inicio, si estoy al principio o al final del juego
	if(vidas<=0 || tiempo<=0){
		if(e.x>100&&e.x<300&&e.y>330&&e.y<400){
			contador=0
			pos=0
			vidas=3;
			puntos=0;
			tiempo=60
			personajeUno.x=posXPer;
			personajeUno.y=posYPer;
			moneda.x=posMonedaX
			moneda.y=posMonedaY	
			reloj.x=posRelojX
			reloj.y=posRelojY
			pegamento.x=posPegamentoX
			pegamento.y=posPegamentoY
			enemigoUno.x=posEnemigo1X
			enemigoUno.y=posEnemigo1Y
			enemigoDos.x=posEnemigo2X
			enemigoDos.y=posEnemigo2Y
			enemigoTres.x=posEnemigo3X
			enemigoTres.y=posEnemigo3Y
			enemigoCuatro.x=posEnemigo4X
			enemigoCuatro.y=posEnemigo4Y
			enemigoCinco.x=posEnemigo5X
			enemigoCinco.y=posEnemigo5Y
			enemigoSeis.x=posEnemigo6X
			enemigoSeis.y=posEnemigo6Y
			enemigoSiete.x=posEnemigo7X
			enemigoSiete.y=posEnemigo7Y
			enemigoOcho.x=posEnemigo8X
			enemigoOcho.y=posEnemigo8Y
			canvas.style.background=fondoInicial;
			sonidoStart.play()

		}
	}else if(e.x>70&&e.x<330&&e.y>670&&e.y<710){
		canvas.style.background="url(imgs/imgsPlacaInicio/placaInstrucciones.jpg)"
		sonidoMenuClick.play()

	}else if(e.x>330&&e.x<390&&e.y>740&&e.y<790){
		canvas.style.background="url(imgs/imgsPlacaInicio/placa.jpg)"
		sonidoMenuClick.play()
	}
	else if(e.x>100&&e.x<300&&e.y>330&&e.y<400&&inicio==false){
		//si inicio es falso estamos al principio del juego y llamo a la función juego
		jugar();
		sonidoStart.play()
	}
	
});

	document.addEventListener("mousemove",function(e){
		//si está al final o al principio del juego:
		if((vidas<=0 || tiempo<=0 || inicio==false)){
			if(e.x>100&&e.x<300&&e.y>330&&e.y<400){
				canvas.style.cursor="pointer";
			}else if((e.x>70&&e.x<330&&e.y>670&&e.y<710)&&pausa==false){
				canvas.style.cursor="pointer";
			}else if((e.x>300&&e.x<390&&e.y>720&&e.y<790)&&pausa==false){
				canvas.style.cursor="pointer";
			}else{
				canvas.style.cursor="";
				colorBoton="#000";
			}
			//y si es al principio, hago que redibuje el botón de inicio.
			if(inicio==false){
				borrar();
			}
		}
		
	});


