mostrarNumeros = function (){
    console.log("antes de For");
    for(let i=0; i<4;i++){
    console.log(i);
    }
    
    console.log("despues del for")
}

mostrarNumeros2 = function (){
    console.log("antes de For");
    for(let indice=0; indice<=5;indice++){
    console.log(indice);
    }  
    console.log("despues del for")
}

mostrarPares = function (){
    console.log("antes de For");
    for(let pares=2 ; pares<=10;pares+=2){
    console.log(pares);
    }
    console.log("despues del for")
}

mostrarInverso = function (){
    console.log("antes de For");
    for(let i=10; i>=0; i--){
        console.log(i);
    }
    console.log("despues del for")
}
hackearNasaPelis = function (){
    //hakeando la nasa 0%
    for(let i=0; i<=100; i+=10){
        console.log("Hakeando la nasa " + i +"%");
    }
    console.log("La nasa a sido hackeada :)");
}

mostrarImpares = function (){
    console.log("antes de For");
    for(let i=1; i<21; i+=2){
        console.log(i);
    }
    console.log("despues del for")
}