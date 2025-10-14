function esMayuscula(caracter) {
    if (!caracter) return false;
    var codigoAscii = caracter.charCodeAt(0);
    return codigoAscii >= 65 && codigoAscii <= 90;
}

function esGuion(caracter) {
    return caracter === "-";
}

function esDijito(caracter) {
    if (!caracter) return false;
    var codigoAscii = caracter.charCodeAt(0);
    return codigoAscii >= 48 && codigoAscii <= 57;
}

