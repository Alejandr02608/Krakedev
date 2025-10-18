
probarAtributos = function (){
    let persona = {
        nombre : "Jose" , 
        apellido : "Alcivar",
        edad : 18 ,
        estaVivo : true
    }
    console.log(persona.nombre)
    console.log(persona.estaVivo)
    if (persona.estaVivo === false){
        console.log("NO esta vivo :(")
    }else{
        console.log("Si esta vivo ")
    }
}


crearProducto = function (){
    let Producto1 = {
        nombre : "Papas",
        precio : 0.25 ,
        stock : 50
    }
    console.log(Producto1.nombre)

    let Producto2 = {
        nombre : "Lechuga",
        precio : 0.50 ,
        stock : 30
    }
    console.log(Producto2.precio)

    // Comparación de stock
    if (Producto1.stock > Producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if (Producto1.stock < Producto2.stock) {
        console.log("Producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }
}
