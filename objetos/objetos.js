
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

probarDeterminarMayor = function (){
    let per={nombre:"Daniel" , edad : 45}
    let per2={nombre:"Luisa" , edad : 48}
    let mayor;
    mayor=determinarMayor(per,per2);
    if(mayor != null){
        console.log("El mayor es :" + mayor.nombre
        )
    }
}

probarIncremntarSaldo= function(){
    let cta = {numero: "1235" , saldo : 34.0}
    incrementarSaldo(cta,100)
    console.log(cta.saldo)
}


modificarAtibutos = function (){
    let cuenta = {
        numero : "2234789090",
        saldo : 0.0
    }
    cuenta.saldo= 100
    cuenta.saldo+=10
    console.log(cuenta.saldo)
}

crearCliente = function (){
    let cliente = {
        cedula : "120214656" ,
        nombre : "Rosa "
    
    }
    let cliente1 = {}
    cliente1.nombre ="Juan"
    cliente1.apellido="Palma"
    cliente1.cedula="851452642"
    
}

incrementarSaldo = function (Cuenta , monto ){
    Cuenta.saldo+=monto

}

determinarMayor = function(persona1,persona2){
    if (persona1.edad>persona2.edad){
        return persona1
    }else if (persona2.edad>persona1.edad){
        return persona2
    }else{
        return null
    }
}