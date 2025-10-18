let notas=[];

agregarElementos = function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
recorrerArreglo=function(){
    let notaR
    for(let indice=0; indice<notas.length;indice++){
        notaR=notas[indice]
        console.log(notaR);
    }
}

probarAgregarNotas = function(){
    let notarecuperada;
    notarecuperada = recuperarInt("txtNota");
    agregarNotas(notarecuperada);
}


agregarNotas = function(nota){
    notas.push(nota);

}

calcularPromedio=function(){
    let sumaNotas =0;
    let promedio=0;
    for(let indice=0; indice<notas.length;indice++){
        sumaNotas=sumaNotas+notas[indice];
    }
    promedio=sumaNotas/notas.length;
    return promedio;
    }

    ejecutarPromedio = function(){
    let promedioCalculado = calcularPromedio(); // llamamos la función
    mostrarTexto("lblPromedio", "Promedio: " + promedioCalculado.toFixed(2)); // mostramos
}
    