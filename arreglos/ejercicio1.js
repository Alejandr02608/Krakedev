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
    mostrarNotas()
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


generarTabla=function(){
    let contenidoTabla=""
    let ComTabla = document.getElementById("divTabla")
    contenidoTabla+="<table><tr><td>Dos</td></tr><tr><td>Tres</td></tr></table>"
    ComTabla.innerHTML= contenidoTabla
}


mostrarNotas = function(){
    let cmpTabla = document.getElementById("divTabla")
    let contenidoTabla = "<table><tr>Nota<th></th></tr>";
    let miNota
    //Por cada elemeto genera uan fila 
    //Barrer el arreglo 
    for(let i=0 ; i<notas.length;i++){
        miNota=notas[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</tr></td>";
    }
    //table que cierra se agrega afuera del for 
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}