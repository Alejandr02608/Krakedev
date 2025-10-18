let frutas=["Pera","Manzana ","Kiwi"]
// en probar busqueda capturo la caja de texto 
probarBusqueda = function (){
    let frutaIngresada = recuperarTexto("Fruta")
    let resultado=buscar(frutaIngresada)
    if (resultado == null){
        alert ("No existe la fruta ")
    }else{
        alert (frutaIngresada + "" +"existe en la canasta!!")
    }
}

buscar = function(fruta){
    let elemento
    let frutaEncontrada = null ; 
    for(let i=0 ; i<frutas.length;i++){
        elemento=frutas[i];
        if(fruta === elemento){
            frutaEncontrada = elemento;   //puedo utilizar tanto frutas como elemento
            break;  // utilzo el break para dejar de buscar cuando ya encontro lo que se pidio 
        }
    }
    return frutaEncontrada
}