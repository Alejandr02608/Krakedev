// Calcula el subtotal: precio * cantidad
function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

// Calcula el valor del descuento (no el % sino el valor en dinero)
function calcularValorDescuento(monto, porcentajeDescuento) {
    return (monto * porcentajeDescuento) / 100;
}

// Calcula el IVA (12%)
function calcularIVA(monto) {
    return (monto * 15) / 100;
}

// Calcula el total = subtotal - descuento + IVA
function calcularTotal(subtotal, descuento, iva) {
    return subtotal - descuento + iva;
}
