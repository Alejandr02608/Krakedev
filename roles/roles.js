let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0}
]
let empleados1 = [];
let roles = [];
let esNuevo = false;


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


function modificarEmpleado(empleado) {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula === empleado.cedula) {
            empleados[i] = empleado; // reemplaza datos
            return true;
        }
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
    apellido.length < 3 || !isNaN(apellido) ||
    isNaN(sueldo) || sueldo <= 0) {
    mostrarMensaje("Error en los datos ingresados");
    return;
}


    let empleado = { cedula, nombre, apellido, sueldo };

    if (esNuevo) {
        if (agregarEmpleado(empleado)) {
            mostrarMensaje("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
            deshabilitarCamposEmpleado();
        } else {
            mostrarMensaje("YA EXISTE UN EMPLEADO CON LA CÉDULA " + cedula);
        }
    } else {
        if (modificarEmpleado(empleado)) {
            mostrarMensaje("EMPLEADO MODIFICADO CORRECTAMENTE");
            mostrarEmpleados();
            deshabilitarCamposEmpleado();
        } else {
            mostrarMensaje("NO SE PUDO MODIFICAR EL EMPLEADO");
        }
    }
}

function ejecutarBusqueda() {
    let cedula = recuperarTexto("txtBusquedaCedula");
    let empleado = buscarEmpleado(cedula);

    if (empleado == null) {
        alert("EMPLEADO NO EXISTE");
        return;
    }

    // Llenar cajas con datos
    asignarTexto("txtCedula", empleado.cedula);
    asignarTexto("txtNombre", empleado.nombre);
    asignarTexto("txtApellido", empleado.apellido);
    asignarTexto("txtSueldo", empleado.sueldo);

    // Habilitar campos y botón guardar
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");

    esNuevo = false;
}


function limpiar() {
    limpiarComponente("txtCedula");
    limpiarComponente("txtNombre");
    limpiarComponente("txtApellido");
    limpiarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

function buscarPorRol() {
    let cedula = recuperarTexto("txtBusquedaCedulaRol");
    let empleado = buscarEmpleado(cedula);

    if (empleado == null) {
        alert("EMPLEADO NO EXISTE");
        return;
    }

    mostrarTexto("infoCedula", empleado.cedula);
    mostrarTexto("infoNombre", empleado.nombre);
    mostrarTexto("infoSueldo", empleado.sueldo);
}

function calcularAporteEmpleado(sueldo) {
    return sueldo * 0.0945;
}

function calcularValorAPagar(sueldo, descuento, aporteIESS) {
    return sueldo - descuento - aporteIESS;
}

function calcularRol() {
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuento = recuperarFloat("txtDescuentos");

    if (isNaN(descuento) || descuento < 0 || descuento > sueldo) {
        alert("ERROR EN DESCUENTOS");
        return;
    }

    let aporte = calcularAporteEmpleado(sueldo);
    mostrarTexto("infoIESS", aporte.toFixed(2));

    let total = calcularValorAPagar(sueldo, descuento, aporte);
    mostrarTexto("infoPago", total.toFixed(2));
}


function buscarRol(cedula) {
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].cedula === cedula) {
            return roles[i];
        }
    }
    return null;
}

function calcularAporteEmpleador(sueldo) {
    return sueldo * 0.1115;
}

function guardarRol() {
    let cedula = recuperarTextoDiv("infoCedula");
    let nombre = recuperarTextoDiv("infoNombre");
    let sueldo = recuperarFloatDiv("infoSueldo");
    let valorPagar = recuperarFloatDiv("infoPago");
    let aporteEmpleado = recuperarFloatDiv("infoIESS");
    let aporteEmpleador = calcularAporteEmpleador(sueldo);

    let rol = { cedula, nombre, sueldo, valorPagar, aporteEmpleado, aporteEmpleador };

    if (buscarRol(cedula) === null) {
        roles.push(rol);
        mostrarMensaje("ROL GUARDADO CORRECTAMENTE");
        mostrarRoles();
        limpiarRol();
    } else {
        mostrarMensaje("YA EXISTE UN ROL PARA ESA CÉDULA");
    }
}

function mostrarRoles() {
    let contenedor = document.getElementById("tablaResumen");
    let tabla = "<table border='1'><tr><th>CÉDULA</th><th>NOMBRE</th><th>VALOR A PAGAR</th><th>APORTE EMPLEADO</th><th>APORTE EMPLEADOR</th></tr>";

    for (let i = 0; i < roles.length; i++) {
        let r = roles[i];
        tabla += "<tr>";
        tabla += "<td>" + r.cedula + "</td>";
        tabla += "<td>" + r.nombre + "</td>";
        tabla += "<td>" + r.valorPagar.toFixed(2) + "</td>";
        tabla += "<td>" + r.aporteEmpleado.toFixed(2) + "</td>";
        tabla += "<td>" + r.aporteEmpleador.toFixed(2) + "</td>";
        tabla += "</tr>";
    }

    tabla += "</table>";
    contenedor.innerHTML = tabla;
    mostrarTotales();
}

function mostrarTotales() {
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;

    for (let i = 0; i < roles.length; i++) {
        totalEmpleado += roles[i].aporteEmpleado;
        totalEmpleador += roles[i].aporteEmpleador;
        totalAPagar += roles[i].valorPagar;
    }

    let totalNomina = totalEmpleado + totalEmpleador + totalAPagar;

    mostrarTexto("infoAporteEmpleado", totalEmpleado.toFixed(2));
    mostrarTexto("infoAporteEmpresa", totalEmpleador.toFixed(2));
    mostrarTexto("infoTotalPago", totalAPagar.toFixed(2));
    mostrarTexto("infoTotalNomina", totalNomina.toFixed(2));


}

function limpiarRol() {
    mostrarTexto("infoCedula", "");
    mostrarTexto("infoNombre", "");
    mostrarTexto("infoSueldo", "");
    mostrarTexto("infoIESS", "0.0");
    mostrarTexto("infoPago", "0.0");
    limpiarComponente("txtDescuentos");
    deshabilitarComponente("btnGuardar");
}


function mostrarMensaje(texto) {
    alert(texto);
}

function deshabilitarCamposEmpleado() {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

function limpiarComponente(id) {
    document.getElementById(id).value = "";
}

function recuperarTextoDiv(id) {
    return document.getElementById(id).textContent.trim();
}

function recuperarFloatDiv(id) {
    return parseFloat(document.getElementById(id).textContent.trim());
}


function mostrarOpcionResumen() {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarRoles(); // ← aquí sí puedes llamar a mostrarTotales()
}
