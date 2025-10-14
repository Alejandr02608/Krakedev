function mostrarTexto(elementId, mensaje) {
    var elemento = document.getElementById(elementId);
    if (elemento) {
        elemento.innerText = mensaje;
    }
}

function validarPlaca(placa) {
    

    var placaIngresada = (placa || "").trim();
    var error = validarEstructura(placaIngresada);

    if (error === null) {
        // estructura correcta
        mostrarTexto("lblEstado", "PLACA VÁLIDA");
        var el = document.getElementById("lblEstado");
        if (el) el.style.color = "green";

        // obtener y mostrar provincia
        var provincia = obtenerProvincia(placaIngresada);
        if (provincia !== null) {
            mostrarTexto("lblProvincia", "PROVINCIA: " + provincia);
        } else {
            mostrarTexto("lblProvincia", "PROVINCIA: Desconocida");
        }

        // obtener y mostrar tipo de vehículo
        var tipo = obtenerTipoVehiculo(placaIngresada);
        if (tipo !== null) {
            mostrarTexto("lblTipoVehiculo", "Tipo de vehículo: " + tipo);
        } else {
            mostrarTexto("lblTipoVehiculo", "Tipo de vehículo no identificado");
        }

        // obtener y mostrar pico y placa
        var diaPicoYPlaca = obtenerDiaPicoYPlaca(placaIngresada);
        if (diaPicoYPlaca !== null) {
            mostrarTexto("lblDiaPicoYPlaca", "Día de Pico y Placa: " + diaPicoYPlaca);
        } else {
            mostrarTexto("lblDiaPicoYPlaca", "Día de Pico y Placa no identificado");
        }

    } else {
        // estructura incorrecta
        mostrarTexto("lblEstado", "PLACA INCORRECTA");
        var el2 = document.getElementById("lblEstado");
        if (el2) el2.style.color = "red";
        mostrarTexto("lblErrores", error);
    }
}

function obtenerDescripcionError(placa) {
    if (!placa) {
        return "Ingrese una placa";
    }
    return validarEstructura(placa);
}

function limpiar(){
    // limpiar mensajes anteriores
    mostrarTexto("lblEstado", "");
    mostrarTexto("lblErrores", "");
    mostrarTexto("lblProvincia", "");
    mostrarTexto("lblTipoVehiculo", "");
    mostrarTexto("lblDiaPicoYPlaca", "");
}