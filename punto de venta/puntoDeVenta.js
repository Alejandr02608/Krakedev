calcularValorTotal = function () {
    let nombreProducto;
    let precioProducto; 
    let cantidad;       
    let porcentajeDescuento; 

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    //1. Recuperar datos
    nombreProducto = recuperarTexto("txtProducto");
    precioProducto = recuperarFloat("txtPrecio");
    cantidad = recuperarInt("txtCantidad");
    porcentajeDescuento = recuperarInt("txtPorcentajeDescuento");

    //2. Subtotal
    valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    mostrarTexto("lblSubtotal", valorSubtotal);

    //3. Descuento
    valorDescuento = calcularValorDescuento(valorSubtotal, porcentajeDescuento);
    mostrarTexto("lblDescuento", valorDescuento);

    //4. IVA
    valorIVA = calcularIVA(valorSubtotal - valorDescuento);
    mostrarTexto("lblValorIVA", valorIVA);

    //5. Total
    valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    mostrarTexto("lblTotal", valorTotal);

    //6. Resumen
    let resumen = "Valor a pagar por " + cantidad + " " + nombreProducto +
                " con " + porcentajeDescuento + "% de descuento: USD " + valorTotal.toFixed(2);
    // Si no existe lblResumen lo agregas al HTML
    let resumenComp = document.getElementById("lblResumen");
    if (!resumenComp) {
        resumenComp = document.createElement("h3");
        resumenComp.id = "lblResumen";
        document.body.appendChild(resumenComp);
    }
    mostrarTexto("lblResumen", resumen);
}


limpiar = function () {
    //Cajas de texto
    mostrarTexto("txtProducto", "");
    mostrarTexto("txtPrecio", "0.0");
    mostrarTexto("txtCantidad", "0");
    mostrarTexto("txtDescuento", "0");

    //Labels de resultados
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblResumen", "");
}