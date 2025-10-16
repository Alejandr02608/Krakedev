//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let coincidencias = 0;
let errores = 0;



function esMayuscula(caracter) {
    var codigo = caracter.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90) {
        return true;
    } else {
        return false;
    }
    
}

function guardarPalabra() {
    var palabra = document.getElementById("txtSecreta").value;
    if (palabra.length != 5) {
        alert("La palabra debe tener 5 letras mayusculas.");
        return;
    }
    // Guardar la palabra en una variable global
    palabraSecreta = palabra.toUpperCase();
    console.log("Palabra guardada:", palabraSecreta);
}

function mostrarLetra(letra, posicion) {
    var div = document.getElementById("div" + posicion);
    if (div) {
        div.textContent = letra;
    }
}

function validar(letra) {
    let letraCadena
    var letrasEncontradas = 0;
    for (var i = 0; i < palabraSecreta.length; i++) {
        letraCadena = palabraSecreta.charAt(i);
        if (letraCadena === letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
        }
    }
    if (letrasEncontradas > 0) {
        coincidencias += letrasEncontradas;
    }else{
        errores++;
        alert ("Letra incorrecta, te quedan " + (6 - errores) + " intentos");
    }
    }
    
    




function ingresarLetra() {
    var letra = document.getElementById("txtLetra").value;
    if (letra.length !== 1) {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
        return;
    }
    
    validar(letra);
}

