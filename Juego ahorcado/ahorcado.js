let palabraSecreta = "";
let intentos = 0;
let coincidencias = 0;
let errores = 0;

function esMayuscula(caracter) {
    var codigo = caracter.charCodeAt(0);
    return codigo >= 65 && codigo <= 90;
}

function guardarPalabra() {
    let palabra = document.getElementById("txtSecreta").value.toUpperCase();

    if (palabra.length != 5) {
        alert("La palabra debe tener 5 letras mayúsculas.");
        return;
    }

    palabraSecreta = palabra;
    console.log("Palabra guardada:", palabraSecreta);

    // Reiniciar variables
    intentos = 0;
    coincidencias = 0;
    errores = 0;

    // Limpiar letras mostradas
    for (let i = 0; i < 5; i++) {
        let div = document.getElementById("div" + (i + 1));
        if (div) div.textContent = "";
    }

    // Reiniciar imagen del ahorcado
    let imagen = document.getElementById("ahorcado");
    if (imagen) {
        imagen.src = "/Juego ahorcado/Ahorcado_01.png";
    }

    alert("Palabra guardada correctamente. ¡Comienza el juego!");
}

function mostrarLetra(letra, posicion) {
    var div = document.getElementById("div" + (posicion + 1));
    if (div) {
        div.textContent = letra;
    }
}

function validar(letra) {
    let letrasEncontradas = 0;

    for (let i = 0; i < palabraSecreta.length; i++) {
        let letraCadena = palabraSecreta.charAt(i);
        if (letraCadena === letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
        }
    }

    if (letrasEncontradas > 0) {
        coincidencias += letrasEncontradas;
    } else {
        errores++;
        if (errores < 10) {
            alert("Letra incorrecta, te quedan " + (10 - errores) + " intentos");
        }
        mostrarAhorcado();
    }
}

function ingresarLetra() {
    if (palabraSecreta === "") {
        alert("Primero debes guardar una palabra secreta.");
        return;
    }

    let letra = document.getElementById("txtLetra").value.toUpperCase();

    if (letra.length != 1 || !esMayuscula(letra)) {
        alert("Ingrese una letra mayúscula válida.");
        return;
    }

    // Validar la letra
    validar(letra);

    // Verificar si ganó
    if (coincidencias >= palabraSecreta.length) {
        alert("¡Felicidades! Has ganado!");
        palabraSecreta = ""; // Bloquear más intentos
        return;
    }

    // Verificar si perdió
    if (errores >= 10) {
        alert("¡Has perdido! La palabra era: " + palabraSecreta);
        palabraSecreta = ""; // Bloquear más intentos
        return;
    }

    document.getElementById("txtLetra").value = "";
}

function mostrarAhorcado() {
    let imagen = document.getElementById("ahorcado");
    if (imagen) {
        imagen.src = "ahorcado" + errores + ".png";
    }
}