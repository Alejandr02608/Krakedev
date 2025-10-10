
// 1. calcularTasaInteres
function calcularTasaInteres(ingresoAnual) {
    let tasa;
    if (ingresoAnual <= 300000) tasa = 0.16;
    else if (ingresoAnual <= 500000) tasa = 0.15;
    else if (ingresoAnual <= 1000000) tasa = 0.14;
    else if (ingresoAnual <= 2000000) tasa = 0.13;
    else tasa = 0.12;
    return tasa;
}
// 2. calcularCapacidadPago
function calcularCapacidadPago(edad, ingresos, egresos) {
    let cuota;
    if (edad >= 50) cuota = (ingresos - egresos) * 0.30;
    else cuota = (ingresos - egresos) * 0.40;
    return cuota;
}
// 3. calcularDescuento
function calcularDescuento(precio, cantidad) {
    let descuento = 0;

    if (cantidad >= 30) descuento = 0.25;
    else if (cantidad >= 10) descuento = 0.20;
    else if (cantidad >= 5) descuento = 0.15;
    else if (cantidad === 1) descuento = 0.03;
    else descuento = 0.04;

    let total = precio * cantidad;
    let totalConDescuento = total - (total * descuento);
    return totalConDescuento;
}
// 4. determinarColesterolLDL
function determinarColesterolLDL(nivelColesterol) {
    if (nivelColesterol < 100) return "Óptimo";
    else if (nivelColesterol < 130) return "Casi óptimo";
    else if (nivelColesterol < 160) return "Límite alto";
    else if (nivelColesterol < 190) return "Alto";
    else return "Muy alto";
}

// 5. validarClave
function validarClave(clave) {
    if (clave.length >= 6 && clave.length <= 10) return true;
    else return false;
}
// 6. esMayuscula
function esMayuscula(caracter) {
    let codigo = caracter.charCodeAt(0);
    return (codigo >= 65 && codigo <= 90); // A-Z
}

// 7. esMinuscula
function esMinuscula(caracter) {
    let codigo = caracter.charCodeAt(0);
    return (codigo >= 97 && codigo <= 122); // a-z
}

// 8. esDigito
function esDigito(caracter) {
    let codigo = caracter.charCodeAt(0);
    return (codigo >= 48 && codigo <= 57); // 0-9
}

// 9. darPermiso
function darPermiso(notaMatematica, notaFisica, notaGeometria) {
    if (notaMatematica >= 90 && notaFisica >= 90 && notaGeometria >= 90)
        return true;
    else
        return false;
}
// 10. otorgarPermiso
function otorgarPermiso(notaMatematica, notaFisica, notaGeometria) {
    if (notaMatematica > 90 && notaFisica > 90 && notaGeometria > 80)
        return true;
    else
        return false;
}

// 11. dejarSalir
function dejarSalir(notaMatematica, notaFisica, notaGeometria) {
    if ((notaMatematica > 90 && notaFisica > 90 && notaGeometria > 90) ||
        (notaMatematica > 90 && notaFisica > 90 && notaGeometria > 80))
        return true;
    else
        return false;
}

