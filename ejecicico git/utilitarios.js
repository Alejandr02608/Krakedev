saludar=function(){
    let nombre=recuperarTexto("txtnombre")
    let apellido=recuperarTexto("txtapellido")
    
    let edad=recuperarInt("txtedad")

    let estatura=recuperarFloat("txtestatura")

}


recuperarTexto=function(idComponete){
    let componete 
    let valorIngresado 
    componete=document.getElementById(idComponete)
    valorIngresado=componete.value
    return valorIngresado
}

recuperarInt=function(idComponete){
    let=valorCaja=recuperarTexto(idComponete)
    let valorEntero=parseInt(valorCaja)
    return valorEntero
}

recuperarFloat=function(idComponete){
    let=valorCaja=recuperarTexto(idComponete)
    let valorFloat=parseFloat(valorCaja)
    return valorFloat
}

