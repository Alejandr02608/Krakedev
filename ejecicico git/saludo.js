saludar=function(){
    let nombre=recuperarTexto("txtnombre")
    let apellido=recuperarTexto("txtapellido")
    
    let edad=recuperarInt("txtedad")

    let estatura=recuperarFloat("txtestatura")

    let mensajeBievenido="Bienvenido  "+ nombre  +" " + apellido

    mostrarTexto("Resultado",mensajeBievenido)

    mostrarImagen("ImgSaludo","/imagenes/ok.gif")

    mostrarTextoEnCaja("txtnombre", "")
}