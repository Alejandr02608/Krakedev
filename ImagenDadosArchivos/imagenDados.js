jugar = function() {
    let resultado;
    resultado = lanzarDado();       
    mostrarcara(resultado);         
    modificarPuntos(resultado);     
    modificarLanzamientos();        
}

// Variables globales
let puntos = 0;
let lanzamientos = 5;

// Suma puntos
modificarPuntos = function(numero) {
    puntos = puntos + numero;
    cambiarTexto("lblPuntos", puntos);
}

// Resta lanzamientos y revisa si terminó el juego
modificarLanzamientos = function() {
    lanzamientos = lanzamientos - 1;
    cambiarTexto("lblLanzamientos", lanzamientos);

    // Si los lanzamientos llegan a 0 → evaluar resultado final
    if (lanzamientos == 0) {
        if (puntos > 20) {
            cambiarTexto("mensaje", "🎉 ¡GANASTE! 🎉");
        } else {
            cambiarTexto("mensaje", "❌ PERDISTE ❌");
        }

        
        
    }
}

// Reinicia el juego
limpiar = function() {
    puntos = 0;
    lanzamientos = 5;
    cambiarTexto("lblPuntos", puntos);
    cambiarTexto("lblLanzamientos", lanzamientos);
    cambiarTexto("mensaje", ""); // limpiar mensaje
}

// Función mostrar cara del dado
mostrarcara = function(numero) {
    if (numero == 1) {
        cambiarImagen("imgDados", "dados1.png");
    } else if (numero == 2) {
        cambiarImagen("imgDados", "dados2.png");
    } else if (numero == 3) {
        cambiarImagen("imgDados", "dados3.png");
    } else if (numero == 4) {
        cambiarImagen("imgDados", "dados4.png");
    } else if (numero == 5) {
        cambiarImagen("imgDados", "dados5.png");
    } else if (numero == 6) {
        cambiarImagen("imgDados", "dados6.png");
    }
}

// Función que genera un número aleatorio entre 1 y 6
lanzarDado = function() {
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio = Math.random();
    aleatorioMultiplicado = aleatorio * 6;
    aleatorioEntero = parseInt(aleatorioMultiplicado);
    valorDado = aleatorioEntero + 1;
    return valorDado;
}