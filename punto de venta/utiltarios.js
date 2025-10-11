mostrarImagen = function (idComponente, rutaImagen) {
    let componente = document.getElementById(idComponente);
    if (componente) {
        componente.src = rutaImagen;
    } else {
        
    }
}

mostrarTexto = function (idComponente, mensaje) {
    let componente = document.getElementById(idComponente);
    if (componente) {
        componente.innerText = mensaje;
    } else {
        console.log("No se encontró el elemento con id:", idComponente);
    }
}

mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente = document.getElementById(idComponente);
    if (componente) {
        componente.value = mensaje;
    } else {
        console.log("No se encontró el elemento con id:", idComponente);
    }
}

recuperarTexto = function (idComponente) {
    let componente = document.getElementById(idComponente);
    if (componente) {
        return componente.value;
    } else {
        console.error("No se encontró el elemento con id:", idComponente);
        return "";
    }
}

recuperarInt = function (idComponente) {
    return parseInt(recuperarTexto(idComponente));
}

recuperarFloat = function (idComponente) {
    return parseFloat(recuperarTexto(idComponente));
}
