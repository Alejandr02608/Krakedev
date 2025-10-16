// recuperar texto de una caja por id
function recuperarTexto(id) {
    var el = document.getElementById(id);
    return el ? el.value : "";
}

function mostrarTexto(id, mensaje) {
    var el = document.getElementById(id);
    if (el) {
        el.innerText = mensaje;
    }
}

function ejecutarPrueba1(){
    var mensaje = recuperarTexto("txtCadena");
    var salida = recorrerCadena(mensaje);
    mostrarTexto("lblResultado", salida);
}

function ejecutarPrueba2(){
    var mensaje = recuperarTexto("txtCadena");
    var resultado = invertirCadena(mensaje);
    mostrarTexto("lblResultado", resultado);
}

function recorrerCadena(cadena){
    if (!cadena) return "";
    var resultado = "";
    for (var posicion = 0; posicion < cadena.length; posicion++) {
        resultado = resultado + cadena.charAt(posicion);
    }
    return resultado;
}

function invertirCadena(cadena) {
    if (!cadena) return "";
    var resultado = "";
    for (var i = cadena.length - 1; i >= 0; i--) {
        resultado = resultado + cadena.charAt(i);
    }
    return resultado;
}

function buscarLetra(cadena, letra) {
    var letraAlt
    var existeLetra = false;
    for(var i=0; i<cadena.length; i++){
        letraAlt=cadena.charAt(i);
        if(letraAlt==letra){
            existeLetra=true;

    }
}if(existeLetra == true){
    return true;
}else{
    return false;
}

}

function contarMayusculas(cadena){
    var letra;
    let contadorMayusculas
    for(let i=0; i<cadena.length; i++){
        letra=cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas++;
        }
    }
    console.log(contadorMayusculas);
    }