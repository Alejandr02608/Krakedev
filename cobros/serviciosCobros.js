/**
 * SERVICIOS DE COBROS
 * Funciones auxiliares para el sistema de cobros
 */

// ============ ALMACENAMIENTO LOCAL ============

const CLAVES_ALMACENAMIENTO = {
    CLIENTES: 'cobros_clientes',
    PAGOS: 'cobros_pagos'
};

/**
 * Obtiene todos los clientes del almacenamiento local
 * @returns {Array} Array de clientes
 */
function obtenerClientes() {
    const clientes = localStorage.getItem(CLAVES_ALMACENAMIENTO.CLIENTES);
    return clientes ? JSON.parse(clientes) : [];
}

/**
 * Guarda clientes en el almacenamiento local
 * @param {Array} clientes - Array de clientes
 */
function guardarClientes(clientes) {
    localStorage.setItem(CLAVES_ALMACENAMIENTO.CLIENTES, JSON.stringify(clientes));
}

/**
 * Obtiene todos los pagos del almacenamiento local
 * @returns {Array} Array de pagos
 */
function obtenerPagos() {
    const pagos = localStorage.getItem(CLAVES_ALMACENAMIENTO.PAGOS);
    return pagos ? JSON.parse(pagos) : [];
}

/**
 * Guarda pagos en el almacenamiento local
 * @param {Array} pagos - Array de pagos
 */
function guardarPagos(pagos) {
    localStorage.setItem(CLAVES_ALMACENAMIENTO.PAGOS, JSON.stringify(pagos));
}

// ============ OPERACIONES CON CLIENTES ============

/**
 * Agrega un nuevo cliente
 * @param {String} nombre - Nombre del cliente
 * @param {Number} montoDeuda - Monto inicial adeudado
 * @returns {Object} Cliente creado
 */
function agregarCliente(nombre, montoDeuda) {
    const clientes = obtenerClientes();
    const nuevoCliente = {
        id: Date.now(),
        nombre: nombre.trim(),
        montoDeuda: parseFloat(montoDeuda),
        montoPagado: 0,
        fechaRegistro: new Date().toISOString(),
        estado: 'activo'
    };
    clientes.push(nuevoCliente);
    guardarClientes(clientes);
    return nuevoCliente;
}

/**
 * Obtiene un cliente por ID
 * @param {Number} id - ID del cliente
 * @returns {Object|null} Cliente encontrado o null
 */
function obtenerClientePorId(id) {
    const clientes = obtenerClientes();
    return clientes.find(cliente => cliente.id == id) || null;
}

/**
 * Actualiza deudas de un cliente
 * @param {Number} clienteId - ID del cliente
 * @param {Number} montoPago - Monto pagado
 */
function actualizarDeudaCliente(clienteId, montoPago) {
    const clientes = obtenerClientes();
    const cliente = clientes.find(c => c.id == clienteId);
    
    if (cliente) {
        cliente.montoPagado += parseFloat(montoPago);
        
        // Validar que no se pague más de lo adeudado
        if (cliente.montoPagado > cliente.montoDeuda) {
            cliente.montoPagado = cliente.montoDeuda;
        }
        
        // Actualizar estado
        if (cliente.montoPagado >= cliente.montoDeuda) {
            cliente.estado = 'pagado';
        } else {
            cliente.estado = 'pendiente';
        }
        
        guardarClientes(clientes);
    }
}

/**
 * Elimina un cliente
 * @param {Number} id - ID del cliente
 * @returns {Boolean} True si se eliminó, false si no existía
 */
function eliminarCliente(id) {
    const clientes = obtenerClientes();
    const indice = clientes.findIndex(c => c.id == id);
    
    if (indice !== -1) {
        clientes.splice(indice, 1);
        guardarClientes(clientes);
        return true;
    }
    return false;
}

/**
 * Calcula el monto adeudado restante de un cliente
 * @param {Object} cliente - Cliente
 * @returns {Number} Monto pendiente
 */
function calcularDeudaRestante(cliente) {
    return cliente.montoDeuda - cliente.montoPagado;
}

// ============ OPERACIONES CON PAGOS ============

/**
 * Registra un nuevo pago
 * @param {Number} clienteId - ID del cliente
 * @param {Number} monto - Monto pagado
 * @param {String} fecha - Fecha del pago
 * @param {String} metodo - Método de pago
 * @returns {Object} Pago registrado
 */
function registrarPago(clienteId, monto, fecha, metodo) {
    const pagos = obtenerPagos();
    const cliente = obtenerClientePorId(clienteId);
    
    if (!cliente) return null;
    
    const nuevoPago = {
        id: Date.now(),
        clienteId: clienteId,
        nombreCliente: cliente.nombre,
        monto: parseFloat(monto),
        fecha: fecha,
        metodo: metodo,
        fechaRegistro: new Date().toISOString()
    };
    
    pagos.push(nuevoPago);
    guardarPagos(pagos);
    
    // Actualizar deuda del cliente
    actualizarDeudaCliente(clienteId, monto);
    
    return nuevoPago;
}

/**
 * Obtiene pagos de un cliente
 * @param {Number} clienteId - ID del cliente
 * @returns {Array} Array de pagos del cliente
 */
function obtenerPagosCliente(clienteId) {
    const pagos = obtenerPagos();
    return pagos.filter(pago => pago.clienteId == clienteId);
}

/**
 * Elimina un pago y revierte su efecto
 * @param {Number} pagoId - ID del pago
 * @returns {Boolean} True si se eliminó
 */
function eliminarPago(pagoId) {
    const pagos = obtenerPagos();
    const indice = pagos.findIndex(p => p.id == pagoId);
    
    if (indice !== -1) {
        const pago = pagos[indice];
        const cliente = obtenerClientePorId(pago.clienteId);
        
        if (cliente) {
            cliente.montoPagado -= pago.monto;
            if (cliente.montoPagado < 0) cliente.montoPagado = 0;
            
            if (cliente.montoPagado < cliente.montoDeuda) {
                cliente.estado = 'pendiente';
            }
            
            const clientes = obtenerClientes();
            const indiceCliente = clientes.findIndex(c => c.id == cliente.id);
            if (indiceCliente !== -1) {
                clientes[indiceCliente] = cliente;
                guardarClientes(clientes);
            }
        }
        
        pagos.splice(indice, 1);
        guardarPagos(pagos);
        return true;
    }
    return false;
}

// ============ CÁLCULOS Y REPORTES ============

/**
 * Calcula el total adeudado por todos los clientes activos
 * @returns {Number} Total adeudado
 */
function calcularTotalAdeudado() {
    const clientes = obtenerClientes();
    return clientes.reduce((total, cliente) => {
        return total + calcularDeudaRestante(cliente);
    }, 0);
}

/**
 * Calcula el total pagado
 * @returns {Number} Total pagado
 */
function calcularTotalPagado() {
    const pagos = obtenerPagos();
    return pagos.reduce((total, pago) => total + pago.monto, 0);
}

/**
 * Obtiene resumen de un cliente
 * @param {Number} clienteId - ID del cliente
 * @returns {Object} Resumen del cliente
 */
function obtenerResumenCliente(clienteId) {
    const cliente = obtenerClientePorId(clienteId);
    if (!cliente) return null;
    
    const pagosCliente = obtenerPagosCliente(clienteId);
    const deudaRestante = calcularDeudaRestante(cliente);
    
    return {
        ...cliente,
        deudaRestante: deudaRestante,
        porcentajePagado: (cliente.montoPagado / cliente.montoDeuda * 100).toFixed(2),
        totalPagos: pagosCliente.length,
        ultimoPago: pagosCliente.length > 0 ? pagosCliente[pagosCliente.length - 1].fecha : null
    };
}

/**
 * Obtiene clientes pendientes de pago
 * @returns {Array} Array de clientes con deuda pendiente
 */
function obtenerClientesPendientes() {
    const clientes = obtenerClientes();
    return clientes.filter(cliente => cliente.estado === 'pendiente');
}

/**
 * Obtiene clientes pagados
 * @returns {Array} Array de clientes sin deuda
 */
function obtenerClientesPagados() {
    const clientes = obtenerClientes();
    return clientes.filter(cliente => cliente.estado === 'pagado');
}

/**
 * Filtra pagos por nombre de cliente
 * @param {String} nobreCliente - Nombre del cliente para filtrar
 * @returns {Array} Array de pagos filtrados
 */
function filtrarPagosPorCliente(nombreCliente) {
    const pagos = obtenerPagos();
    const nombre = nombreCliente.toLowerCase().trim();
    return pagos.filter(pago => pago.nombreCliente.toLowerCase().includes(nombre));
}

// ============ LIMPIEZA DE DATOS ============

/**
 * Limpia todos los datos (clientes y pagos)
 */
function limpiarTodosDatos() {
    localStorage.removeItem(CLAVES_ALMACENAMIENTO.CLIENTES);
    localStorage.removeItem(CLAVES_ALMACENAMIENTO.PAGOS);
}

// ============ FORMATO DE DINERO ============

/**
 * Formatea un número como moneda
 * @param {Number} valor - Valor a formatear
 * @returns {String} Valor formateado
 */
function formatearMoneda(valor) {
    return '$' + parseFloat(valor).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Formatea una fecha
 * @param {String} fecha - Fecha ISO
 * @returns {String} Fecha formateada
 */
function formatearFecha(fecha) {
    const opciones = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', opciones);
}
