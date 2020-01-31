const PIEDRA  = 0;
const PAPEL   = 1;
const TIJERAS = 2;
const LAGARTO = 3;
const SPOCK   = 4;

var opciones = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];

var opcionUsuario = -1;
var opcionMaquina = -1; 
var puntosUsuario = 0;
var puntosMaquina = 0;

//Genera un numero aleatorio entre un rango de enteros
function aleatorio(minimo, maximo){
	
	return Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
}

//
function usuario(opcion){

	var s1 = "op" + opcion;
	var s2 = "op" + opcionUsuario;
	
	document.getElementById( s1 ).classList.add('is-success');
	
	if (opcionUsuario != -1){
		document.getElementById( s2 ).classList.remove('is-success');
	}
	
	if (opcionMaquina != -1){
		document.getElementById( "opMaq" + opcionMaquina ).classList.remove('is-info');
	}
	
	document.getElementById("resultados1").textContent = "";
	document.getElementById("resultados2").textContent = "";
	
	//
	opcionUsuario = opcion;


}

//Empezar partida nueva
function nuevoJuego(){

	opcionUsuario = -1;
	opcionMaquina = -1;
	puntosUsuario =  0;
	puntosMaquina =  0;	

	document.getElementById("resultados1").textContent = "";
	document.getElementById("resultados2").textContent = "";

	document.getElementById("barraUsuario").value = 0;
	document.getElementById("barraMaquina").value = 0;
}

//
function jugar(){
	
	//
	opcionMaquina = aleatorio(0, 4); 

	//
	document.getElementById( "opMaq" + opcionMaquina ).classList.add('is-info');	
	
	var ganaUsuario = false;

	//
	if (opcionUsuario == opcionMaquina){
		result = "EMPATE";
	}
	else{
		
		switch (opcionUsuario) {

			case PIEDRA:	
				if (opcionMaquina == PAPEL)   { result = "Papel envuelve piedra";  ganaUsuario = false; break; }
				if (opcionMaquina == TIJERAS) { result = "Piedra aplasta tijera";  ganaUsuario = true;  break; }
				if (opcionMaquina == LAGARTO) { result = "Piedra aplasta lagarto"; ganaUsuario = true;  break; }
				if (opcionMaquina == SPOCK)   { result = "Spock vaporiza piedra";  ganaUsuario = false; break; }			
	
			case PAPEL:
				if (opcionMaquina == PIEDRA)  { result = "Papel envuelve piedra";   ganaUsuario = true;  break; }
				if (opcionMaquina == TIJERAS) { result = "Tijera corta papel";      ganaUsuario = false; break; }
				if (opcionMaquina == LAGARTO) { result = "Lagarto devora papel";    ganaUsuario = false; break; }
				if (opcionMaquina == SPOCK)   { result = "Papel desautoriza Spock"; ganaUsuario = true;  break; }			
	
			case TIJERAS: 				
				if (opcionMaquina == PIEDRA)  { result = "Piedra aplasta tijera";   ganaUsuario = false; break; }
				if (opcionMaquina == PAPEL)   { result = "Tijera corta papel";      ganaUsuario = true;  break; }
				if (opcionMaquina == LAGARTO) { result = "Tijera decapita lagarto"; ganaUsuario = true;  break; }
				if (opcionMaquina == SPOCK)   { result = "Spock rompe tijera";      ganaUsuario = false; break; }			
	
			case LAGARTO: 				
				if (opcionMaquina == PIEDRA)  { result = "Piedra aplasta lagarto";  ganaUsuario = false; break; }
				if (opcionMaquina == PAPEL)   { result = "Lagarto devora papel";    ganaUsuario = true;  break; }
				if (opcionMaquina == TIJERAS) { result = "Tijera decapita lagarto"; ganaUsuario = false; break; }
				if (opcionMaquina == SPOCK)   { result = "Lagarto envenena Spock";  ganaUsuario = true;  break; }
	
			case SPOCK: 	
				if (opcionMaquina == PIEDRA)  { result = "Spock vaporiza piedra";   ganaUsuario = true;  break; }
				if (opcionMaquina == PAPEL)   { result = "Papel desautoriza Spock"; ganaUsuario = false; break; }
				if (opcionMaquina == TIJERAS) { result = "Spock rompe tijera";      ganaUsuario = true;  break; }
				if (opcionMaquina == LAGARTO) { result = "Lagarto envenena Spock";  ganaUsuario = false; break; }	
		}


		//
		if (ganaUsuario){

			puntosUsuario += 1;
			document.getElementById("puntosUsuario").textContent = "Puntos " + puntosUsuario;
			document.getElementById("barraUsuario").value = (puntosUsuario * 20);

			document.getElementById("resultados2").textContent = "Gana Jugador 1";
		}
		else{
	
			puntosMaquina += 1;
			document.getElementById("puntosMaquina").textContent = "Puntos " + puntosMaquina;
			document.getElementById("barraMaquina").value = (puntosMaquina * 20);

			document.getElementById("resultados2").textContent = "Gana CPU !";	
		}

	}

	//
	document.getElementById("resultados1").textContent = result;
	


	//TODO mostrar ventana modal ¡has ganado!
	//document.getElementById( "modal" ).classList.add('is-active');	

}