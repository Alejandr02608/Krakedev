function recuperarFloat(idCampo) {
    let valor = parseFloat(document.getElementById(idCampo).value);
    return valor;
}

function mostrarTexto(idCampo, mensaje) {
    document.getElementById(idCampo).innerHTML = mensaje;
}

function mostrarImagen(idImg, rutaImagen) {
    document.getElementById(idImg).src = rutaImagen;
}
