//ejercicio 1
const $cambiarInterruptor = document.getElementById("cambiarInterruptor"),
      $cambiarFoco = document.getElementById("cambiarFoco"),
      $swith = document.querySelector(".switch");

function cambiarImagenes(){
    if($cambiarFoco.src.match("../imagenes/encendido-1.png") && $cambiarInterruptor.src.match("../imagenes/on-or.png")){
        $cambiarFoco.src = "../imagenes/apagado-1.png";
        $cambiarInterruptor.src =  "../imagenes/off-or.png";
    }else{
        $cambiarFoco.src = "../imagenes/encendido-1.png";
        $cambiarInterruptor.src = "../imagenes/on-or.png";
    }
}

$swith.addEventListener("click",cambiarImagenes)
//ejercicio 2
let cuadrado = document.querySelector(".cuadrado");
let contadorCuadrado = 0;
cuadrado.addEventListener("mouseover",mouseSuma);
function mouseSuma() {
    contadorCuadrado++;
    console.log("Usted paso el mouse "+ contadorCuadrado + " veces");
}

let userRandom = document.querySelector(".userRandom");
userRandom.addEventListener("click",random);
function random(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(resp => console.log(resp.results))
}
function eleccionUser(num) {
    parseInt(num);
    let numRandom = Math.floor(Math.random() * (3 - 0) + 0);
    if(num == 0 && numRandom == 0){
        console.log("Empate");
    } else if(num == 1 && numRandom == 1){
        console.log("Empate");
    } else if(num == 2 && numRandom == 2){
        console.log("Empate");
    }else if(num == 0 && numRandom == 1){
        console.log("Perdiste");
    }else if(num == 1 && numRandom == 2){
        console.log("Perdiste");
    }else if(num == 0 && numRandom == 2){
        console.log("Ganaste");
    }else if(num == 1 && numRandom == 2){
        console.log("Ganaste");
    }else if(num == 2 && numRandom == 0){
        console.log("Ganaste");
    }else{
    }
}


