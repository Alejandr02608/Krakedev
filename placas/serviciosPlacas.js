function validarEstructura(placa) {
    if (!placa) return "Ingrese una placa";
    if (placa.length !== 7 && placa.length !== 8) {
        return "La placa debe tener 7 u 8 caracteres";
    }

    // Verifica que los primeros 3 caracteres sean letras mayúsculas
    for (var i = 0; i < 3; i++) {
        if (!esMayuscula(placa.charAt(i))) {
            return "Los tres primeros caracteres deben ser letras mayúsculas";
        }
    }

    // Verifica que el cuarto carácter sea un guion
    if (placa.charAt(3) !== '-') {
        return "El guión debe estar en la posición 4";
    }

    // Verifica que los últimos 3 o 4 caracteres sean dígitos
    for (var j = 4; j < placa.length; j++) {
        if (!esDijito(placa.charAt(j))) {
            return "Los últimos caracteres deben ser números";
        }
    }

    return null; // Si no hay errores, retorna null
}

// Obtiene la provincia a partir de la placa (ejemplo simple).
// Retorna el nombre de la provincia o null si no se encuentra.
function obtenerProvincia(placa) {
    if (!placa || placa.length < 1) return null;
    var primeraLetra = placa.charAt(0);

    // Mapeo ejemplo (ajusta según tu país/datos reales)
    var mapa = {
        A: "Azuay",
        B: "Bolívar",
        C: "Carchi",
        G: "Guayas",
        P: "Pichincha",
        L: "Loja",
        Y: "Santa Elena",
        M: "Manabí",
        R: "El Oro",
        S: "Santo Domingo",
        L: "Los Ríos",
        T: "Tungurahua",
        H: "Chimborazo",
        O: "Orellana",
        N: "Napo",
        F: "Cañar",
        E: "Esmeraldas",
        I: "Imbabura",
        Z: "Zamora Chinchipe",
        W: "Galápagos"

    };

    if (mapa[primeraLetra]) {
        return mapa[primeraLetra];
    }

    return null;
}

// Obtiene el tipo de vehículo a partir del segundo caracter de la placa.
// Retorna el tipo como string o null si no corresponde a ninguno.
function obtenerTipoVehiculo(placa) {
    if (!placa || placa.length < 2) return null;
    var segundo = placa.charAt(1);

    // Mapeo de ejemplo (ajusta según la referencia oficial que tengas)
    var mapaTipo = {
        A: "Automóvil",
        B: "Bus",
        C: "Camioneta",
        M: "Motocicleta",
        T: "Taxi",
        P: "Particular",

    };

    if (mapaTipo[segundo]) {
        return mapaTipo[segundo];
    }

    return null;
}

function obtenerDiaPicoYPlaca(placa) {
    // Obtener fecha actual
    let fecha = new Date();
    let diaSemana = fecha.getDay(); // 0=Domingo, 1=Lunes, ..., 6=Sábado

    // Si es fin de semana, retornar mensaje de libre circulación
    if (diaSemana === 0) {
        return "Domingo - Libre circulación";
    }
    if (diaSemana === 6) {
        return "Sábado - Libre circulación";
    }

    if (!placa || placa.length < 7) return null;
    
    // Obtener el último dígito de la placa
    let ultimoDigito = placa.charAt(placa.length - 1);
    
    // Validar que sea un número
    if (!esDijito(ultimoDigito)) return null;
    
    // Mapeo de último dígito a día de pico y placa
    switch(ultimoDigito) {
        case '1':
        case '2':
            return "Lunes";
        case '3':
        case '4':
            return "Martes";
        case '5':
        case '6':
            return "Miércoles";
        case '7':
        case '8':
            return "Jueves";
        case '9':
        case '0':
            return "Viernes";
        default:
            return null;
    }
}
