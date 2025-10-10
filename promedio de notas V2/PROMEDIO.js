function calcularPromedioNotas() {
    // Recuperar valores de las 3 cajas de texto como FLOAT
    let nota1 = parseFloat(document.getElementById("txtNota1").value);
    let nota2 = parseFloat(document.getElementById("txtNota2").value);
    let nota3 = parseFloat(document.getElementById("txtNota3").value);

    // Calcular promedio
    let promedio = (nota1 + nota2 + nota3) / 3;

    // Mostrar el promedio con 2 decimales
    document.getElementById("lblPromedio").innerText = promedio.toFixed(2);

    // Mostrar mensaje e imagen según el promedio
    let mensaje = "";
    let imagen = "";

    if (promedio > 0 && promedio < 5) {
        mensaje = "REPROBADO 😞";
        imagen = "/imagenes/reprobada-donramon.gif";
    } else if (promedio >= 5 && promedio <= 8) {
        mensaje = "BUEN TRABAJO 🙂";
        imagen = "/imagenes/disco.gif";
    } else if (promedio > 8 && promedio <= 10) {
        mensaje = "EXCELENTE 🎉";
        imagen = "/imagenes/ok.gif";
    } else {
        mensaje = "DATOS INCORRECTOS ⚠️";
        imagen = "/imagenes/failed-failure.gif";
    }

    // Mostrar el mensaje
    document.getElementById("lblMensaje").innerText = mensaje;

    // Mostrar el gif
    document.getElementById("imgResultado").src = imagen;
}
