
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);//selecionamos elementos
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//seleccionamos elemento por id queryElementibyId()
    console.log(numeroSecreto); 
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Ácertaste el número secreto en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);//Operador ternario
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {

        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p','Ya se sortearon todos los números posibles')
        document.getElementById('reiniciar').removeAttribute('disabled')
        listaNumerosSorteados = [];
    } else {
    // Si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesInciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    // Indicar mensaje de inicio
    //  generar el número aleatorio
    // Reinciar número de intentos
    condicionesInciales();
    // deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');//selecion elemento id queryselector('#elemento')
}

condicionesInciales();