// Variables globales para el puntaje
let puntosUsuario = 0;
let puntosComputador = 0;
let juegoTerminado = false;

// nuevos contadores globales
var partidasGanas = 0;
var partidasPerdidas = 0;
var empates = 0;

function mostrarTexto(elementId, mensaje) {
    let elemento = document.getElementById(elementId);
    if (elemento) {
        elemento.innerText = mensaje;
    }
}

function actualizarPuntajes() {
    mostrarTexto("lblPuntajeUsuario", "Puntaje Usuario: " + puntosUsuario);
    mostrarTexto("lblPuntajeComputador", "Puntaje Computador: " + puntosComputador);
}

function actualizarContadores() {
    mostrarTexto("lblGanar", String(partidasGanas));
    mostrarTexto("lblPerder", String(partidasPerdidas));
    mostrarTexto("lblEmpate", String(empates));
}

function jugar(seleccionado) {
    if (juegoTerminado) return;

    var elementoComputador = generarElemento();
    var resultado = determinarGanador(seleccionado, elementoComputador);

    if (resultado === 0) {
        mostrarTexto("lblResultado", "EMPATE (computador: " + elementoComputador + ")");
    } else if (resultado === 1) {
        puntosUsuario++;
        mostrarTexto("lblResultado", "GANASTE LA PARTIDA (computador: " + elementoComputador + ")");
    } else {
        puntosComputador++;
        mostrarTexto("lblResultado", "PERDISTE LA PARTIDA (computador: " + elementoComputador + ")");
    }

    actualizarPuntajes();

    if (puntosUsuario >= 5) {
        mostrarTexto("lblResultado", "HAS GANADO EL JUEGO");
        terminarJuego();
    } else if (puntosComputador >= 5) {
        mostrarTexto("lblResultado", "EL COMPUTADOR TE HA VENCIDO");
        terminarJuego();
    }
}

function terminarJuego() {
    juegoTerminado = true;
    var opciones = document.querySelectorAll('.opcion');
    for (var i = 0; i < opciones.length; i++) {
        opciones[i].style.pointerEvents = "none";
        opciones[i].style.opacity = "0.6";
    }
}

function limpiar() {
    puntosUsuario = 0;
    puntosComputador = 0;
    juegoTerminado = false;
    mostrarTexto("lblResultado", "");
    actualizarPuntajes();

    var opciones = document.querySelectorAll('.opcion');
    for (var i = 0; i < opciones.length; i++) {
        opciones[i].style.pointerEvents = "auto";
        opciones[i].style.opacity = "1";
    }
}