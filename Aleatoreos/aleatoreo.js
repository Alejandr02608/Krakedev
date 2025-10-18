
// Genera y retorna un número entero aleatorio entre 1 y 100 (ambos incluidos)

function generarAleatorio() {
    let numero = Math.floor(Math.random() * 100) + 1;
    return numero;
}

/**
 * Genera un arreglo con números aleatorios según la cantidad que indique el usuario.
 */
function generarAleatorios() {
    let aleatorios = []; // a.
    let cantidad = recuperarInt("txtCantidad"); // b. Usamos función de utilitarios.js

    // Validar que sea un número entre 5 y 20
    if (isNaN(cantidad) || cantidad < 5 || cantidad > 20) {
        mostrarTexto("txtCantidad", "⚠️ Ingrese un número válido entre 5 y 20.");
        return;
    }

    // Limpiar mensaje anterior
    mostrarTexto("txtCantidad", "Generando " + cantidad + " números aleatorios...");

    // c. Recorrer con un for desde 0 hasta cantidad - 1
    for (let i = 0; i < cantidad; i++) {
        console.log("Índice:", i);

        // e. Generar número aleatorio y agregarlo al arreglo
        let numeroGenerado = generarAleatorio();
        aleatorios.push(numeroGenerado);
    }

    // f. Mostrar resultados en pantalla
    mostrarResultados(aleatorios);
}



// Muestra el arreglo recibido en una tabla generada dinámicamente

function mostrarResultados(arregloNumeros) {
    let tabla = "<table>";
    tabla += "<tr><th>Valores Aleatorios</th></tr>";

    for (let i = 0; i < arregloNumeros.length; i++) {
        tabla += `<tr><td>${arregloNumeros[i]}</td></tr>`;
    }

    tabla += "</table>";

    // Mostrar la tabla en el div 'resultado'
    let contenedor = document.getElementById("resultado");
    contenedor.innerHTML = tabla;
}