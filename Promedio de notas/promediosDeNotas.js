function calcularPromedioNotas() {
    // Recuperar las 3 notas
    let n1 = recuperarFloat("txtNota1");
    let n2 = recuperarFloat("txtNota2");
    let n3 = recuperarFloat("txtNota3");

    // Calcular promedio usando la función del servicio
    let promedio = calcularPromedio(n1, n2, n3);

    // Mostrar el promedio con 2 decimales
    mostrarTexto("lblResultado", "El promedio es: " + promedio.toFixed(2));

    // Mostrar imagen según el resultado
    if (promedio > 7) {
        mostrarImagen("imgResultado", "/imagenes/ok.gif"); // éxito
    } else {
        mostrarImagen("imgResultado", "/imagenes/failed-failure.gif"); // fracaso
    }
}
