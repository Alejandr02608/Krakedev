saludar=function(){
    let nombre=recuperarTexto("txtnombre")
    let apellido=recuperarTexto("txtapellido")
}


recuperarTexto=function(idComponete){
    let componete 
    let valorIngresado 
    componete=document.getElementById(idComponete)
    valorIngresado=componete.value
    return valorIngresado
}