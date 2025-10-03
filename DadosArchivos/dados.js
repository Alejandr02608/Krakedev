jugar=function(){
    let aleatoreo
    aleatoreo=lanzarDado()
    cambiarTexto("lblNumero" ,aleatoreo )
    if(aleatoreo>3){
        console.log("Es Mayor a 3 ")
        console.log("Ganaste")
    }else{
        console.log("Es Menor a 3 ")
        console.log("Perdiste :(")
    }
}

//crear una funcion llamada lanzarDado 
//No recibe parametros 
//Retorna un numero aleatorio entre 1 y 6 

lanzarDado=function(){
    let aleatoreo 
    let numeroMultiplicado
    let numeroEntero 
    let valorDado
    aleatoreo=Math.random()// entre 0 y 1
    numeroMultiplicado=aleatoreo*6

    numeroEntero=parseInt(numeroMultiplicado)

    valorDado=numeroEntero+1 // entre 0 y 6 
    
    return valorDado
}

