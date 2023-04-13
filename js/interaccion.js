function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
 }
 
 function eleccion(jugada){
    let resultado = ""
    if(jugada == 1) {
        resultado = "Piedra 🥌 "
    } else if(jugada  == 2) {
        resultado = "Papel 📄 "
    } else if(jugada == 3) {
        resultado = "Tijeras ✂️ "
    } else {
        resultado = "Error"
    }
    return resultado
 }
//1 es piedra, 2 es papel, 3 es tijeras//
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3 ){
    pc = aleatorio(1,3)
    jugador = prompt("Selecciona: 1 para piedra, 2 para papel, 3 para tijeras")

    //alert("Elegiste: " + jugador)//
    
    alert("Pc selecciono; " + eleccion(pc))
    alert(" Tu selección fue: " + eleccion(jugador))
    
    //COMBATE//
    if(pc == jugador){
        alert("Es un empate 🤼")
    }
    else if((jugador == 1 && pc ==3) || (jugador == 2 && pc ==1) || (jugador == 3 && pc ==2)){
        alert("¡Felicidades Ganaste! 🥳 ")
        triunfos = triunfos + 1
    }
    else{
        alert("Perdiste 😢 ")
        perdidas = perdidas + 1
    }
}

alert("Ganaste " + triunfos + " veces y perdiste " + perdidas + " veces ")