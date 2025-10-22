let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0}
]

function mostrarOpcionEmpleado() {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados(); // ← Esta línea es clave
}


function mostrarOpcionRol() {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

function mostrarOpcionResumen() {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

mostrarEmpleados = function() {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table border='1'><tr><th>CÉDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";
    let empleado;

    // Barrer el arreglo de empleados
    for (let i = 0; i < empleados.length; i++) {
        empleado = empleados[i];
        contenidoTabla += "<tr>";
        contenidoTabla += "<td>" + empleado.cedula + "</td>";
        contenidoTabla += "<td>" + empleado.nombre + "</td>";
        contenidoTabla += "<td>" + empleado.apellido + "</td>";
        contenidoTabla += "<td>" + empleado.sueldo.toFixed(2) + "</td>";
        contenidoTabla += "</tr>";
    }

    // Cerrar la tabla
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

function ejecutarNuevo() {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}


function buscarEmpleado(cedula) {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula === cedula) {
            return empleados[i];
        }
    }
    return null;
}


function agregarEmpleado(empleado) {
    if (buscarEmpleado(empleado.cedula) === null) {
        empleados.push(empleado);
        return true;
    }
    return false;
}


function guardar() {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");

    if (cedula.length < 3 || isNaN(parseInt(cedula)) ||
        nombre.length < 3 || !isNaN(nombre) ||
        isNaN(sueldo)) {
        mostrarTexto("lblErrorCedula", "Error en las validaciones");
        return;
    }

    if (esNuevo) {
        let nuevoEmpleado = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            sueldo: sueldo
        };

        if (agregarEmpleado(nuevoEmpleado)) {
            mostrarTexto("lblErrorCedula", "EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
            deshabilitarCamposEmpleado();
        } else {
            mostrarTexto("lblErrorCedula", "YA EXISTE UN EMPLEADO CON LA CÉDULA " + cedula);
        }
    }
}
