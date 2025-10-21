let clientes = [
    {cedula : "7535437" , nombre : "Pedro" , edad : 20},
    {cedula : "1733699" , nombre : "Leo" , edad : 70},
    {cedula : "0908766" , nombre : "Axel" , edad : 40},
];

crearCliente = function (){
    let valorCedula = recuperarTexto("txtCedula")
    let valorNombre = recuperarTexto("txtNombre")
    let valorEdad = recuperarFloat("txtEdad")

    let nuevoCliente = {}
    nuevoCliente.cedula = valorCedula
    nuevoCliente.nombre = valorNombre
    nuevoCliente.edad = valorEdad

    agregarCliente(nuevoCliente)
}



//agrego clientes y evito clientes duplicados 
agregarCliente = function (cliente){
    let resultado 
    resultado=buscarCliente(cliente.cedula)
    if(resultado == null ){
        clientes.push (cliente)
        alert("Cliente agregado ")
        mostrarClientes()
    }else{
        alert ("Ya existe un cliente con la cedula " + cliente.cedula)
    }
    
}

buscarCliente = function (cedula){
    let elementoCliente
    let clienteEncontrado = null
    for (let i=0 ; i<clientes.length ; i++){
        elementoCliente = clientes [i];
        if (elementoCliente.cedula == cedula){
            clienteEncontrado = elementoCliente
            break
        }
    }
        return clienteEncontrado;
}

mostrarClientes = function (){
    let cmpTabla = document.getElementById ("tablasClientes")
    let contenidoTabla = "<table <tr>" + 
    "<th>cedula</th>"+
    "<th>nombre</th>"+
    "<th>edad</th>"+
    "</tr>"; 
    let elementoCliente
    for (let i=0; i<clientes.length ; i++){
        elementoCliente = clientes[i];
        contenidoTabla+=
        "<tr><td>"+elementoCliente.cedula+"</td>"
        +"<td>"+elementoCliente.nombre+"</td>"
        + "<td>"+elementoCliente.edad+"</td>"
        +"</tr>"
    }
    contenidoTabla+= "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}


ejecutarBusqueda = function (){
    let valorCedula = recuperarTexto("txtCedulaBusqueda")
    let cliente=buscarCliente(valorCedula)
    if (cliente === null ){
        alert ("cliente no encontrado")
    }else {
        mostrarTextoEnCaja("txtCedula" , cliente.cedula)
        mostrarTextoEnCaja("txtNombre" , cliente.nombre)
        mostrarTextoEnCaja("txtEdad" , cliente.edad)
    }
}


modificarCliente = function (cliente ){
    let clienteEncontrado=buscarCliente(cliente.cedula)
    if (clienteEncontrado != null){
        clienteEncontrado.nombre = cliente.nombre
        clienteEncontrado.edad = cliente.edad
        
    }
}

guardarCambios = function(){
    let valorCedula = recuperarTexto("txtCedula")
    let valorNombre = recuperarTexto("txtNombre")
    let valorEdad = recuperarFloat("txtEdad")

    let datosCliente = {}
    datosCliente.cedula = valorCedula
    datosCliente.nombre = valorNombre
    datosCliente.edad = valorEdad

    modificarCliente(datosCliente)
    mostrarClientes()
}
