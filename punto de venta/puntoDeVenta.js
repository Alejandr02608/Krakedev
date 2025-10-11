function esProductoValido(producto) {
    if (!producto) return "*CAMPO OBLIGATORIO";
    if (producto.length > 10) return "El nombre no puede tener más de 10 caracteres.";
    return "";
}

function esCantidadValida(cantidad) {
    if (!cantidad) return "*CAMPO OBLIGATORIO";
    if (isNaN(cantidad) || !Number.isInteger(Number(cantidad))) return "Solo se permiten números enteros.";
    if (cantidad < 0 || cantidad > 100) return "La cantidad debe estar entre 0 y 100.";
    return "";
}

function esPrecioValido(precio) {
    if (!precio) return "*CAMPO OBLIGATORIO";
    if (isNaN(precio)) return "Solo se permiten números.";
    if (precio < 0 || precio > 50) return "El precio debe estar entre 0 y 50.";
    return "";
}

function calcularValorTotal() {
    // Limpiar errores previos
    mostrarTexto("lblError1", "");
    mostrarTexto("lblError2", "");
    mostrarTexto("lblError3", "");
    mostrarTexto("lblError4", "");
    mostrarTexto("lblResumen", "");

    let producto = document.getElementById("txtProducto").value.trim();
    let cantidad = document.getElementById("txtCantidad").value.trim();
    let precio = document.getElementById("txtPrecio").value.trim();
    let descuento = document.getElementById("txtPorcentajeDescuento").value.trim();

    let hayError = false;

    // Validaciones
    let errorProducto = esProductoValido(producto);
    let errorCantidad = esCantidadValida(cantidad);
    let errorPrecio = esPrecioValido(precio);

    if (errorProducto) {
        mostrarTexto("lblError1", errorProducto);
        hayError = true;
    }
    if (errorCantidad) {
        mostrarTexto("lblError2", errorCantidad);
        hayError = true;
    }
    if (errorPrecio) {
        mostrarTexto("lblError3", errorPrecio);
        hayError = true;
    }
    if (descuento == "" || isNaN(descuento)) {
        mostrarTexto("lblError4", "Solo se permiten números.");
        hayError = true;
    }

    if (hayError) {
        mostrarTexto("lblResumen", "Corrige los errores antes de continuar.");
        return;
    }

    // Conversión de valores
    cantidad = parseInt(cantidad);
    precio = parseFloat(precio);
    descuento = parseFloat(descuento);

    // Cálculos
    let subtotal = cantidad * precio;
    let valorDescuento = subtotal * (descuento / 100);
    let subtotalConDescuento = subtotal - valorDescuento;
    let iva = subtotalConDescuento * 0.15;
    let total = subtotalConDescuento + iva;

    // Mostrar resultados
    mostrarTexto("lblSubtotal", subtotal.toFixed(2));
    mostrarTexto("lblDescuento", valorDescuento.toFixed(2));
    mostrarTexto("lblValorIVA", iva.toFixed(2));
    mostrarTexto("lblTotal", total.toFixed(2));
    mostrarTexto("lblResumen", "¡Que tenga buen dia!");
}

// Utilidad para mostrar texto en un elemento por id
function mostrarTexto(id, mensaje) {
    document.getElementById(id).innerText = mensaje;
}
