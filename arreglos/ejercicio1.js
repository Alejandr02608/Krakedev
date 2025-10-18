let notas = [];

/**
 * Agrega valores de ejemplo al arreglo.
 */
agregarElementos = function () {
    notas.push(5);
    notas.push(10);
    console.log("Notas agregadas automáticamente:", notas.length);
};

/**
 * Recorre el arreglo y muestra las notas en consola.
 */
recorrerArreglo = function () {
    for (let indice = 0; indice < notas.length; indice++) {
        console.log("Nota:", notas[indice]);
    }
};

/**
 * Recupera la nota desde la caja de texto y la agrega al arreglo.
 */
probarAgregarNotas = function () {
    let notaRecuperada = recuperarInt("txtNota");
    agregarNotas(notaRecuperada);
    console.log("Nota agregada:", notaRecuperada);
};

/**
 * Agrega una nota al arreglo.
 */
agregarNotas = function (nota) {
    notas.push(nota);
};

/**
 * Calcula y retorna el promedio del arreglo de notas.
 */
calcularPromedio = function () {
    let sumaNotas = 0;
    let promedio = 0;

    if (notas.length === 0) {
        return 0; // Evita dividir por cero
    }

    for (let indice = 0; indice < notas.length; indice++) {
        sumaNotas = sumaNotas + notas[indice];
    }

    promedio = sumaNotas / notas.length;
    return promedio;
};

/**
 * Ejecuta el cálculo del promedio y lo muestra en pantalla.
 */
ejecutarPromedio = function () {
    let promedioCalculado = calcularPromedio();

    if (promedioCalculado === 0 && notas.length === 0) {
        mostrarTexto("lblPromedio", "Promedio: No hay notas ingresadas");
    } else {
        mostrarTexto("lblPromedio", "Promedio: " + promedioCalculado.toFixed(2));
    }
};
