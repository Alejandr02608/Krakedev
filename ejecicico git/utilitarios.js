saludar=function(){
    let nombre=recuperarTexto("txtnombre")
    let apellido=recuperarTexto("txtapellido")
    
    let edad=recuperarInt("txtedad")

    let estatura=recuperarFloat("txtestatura")

    let mensajeBievenido="Bienvenido  "+ nombre  +" " + apellido

    mostrarTexto("Resultado",mensajeBievenido)

    mostrarImagen("ImgSaludo","/imagenes/ok.gif")
}

mostrarImagen=function(idComponente, rutaImagen){
    let componente = document.getElementById(idComponente)
    componente.src = rutaImagen
}



mostrarTexto=function(idComponete,mensaje){
    let componete
    componete=document.getElementById(idComponete)
    componete.innerText=mensaje
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

