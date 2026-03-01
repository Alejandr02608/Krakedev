/**
 * SISTEMA DE COBROS
 * Lógica principal de la interfaz interactiva
 */

// ============ VARIABLES GLOBALES ============

let modalActiva = null;
let pagoParaEliminar = null;

// ============ INICIALIZACIÓN ============

document.addEventListener('DOMContentLoaded', () => {
    inicializarEventos();
    cargarFecha();
    actualizarInterfaz();
});

/**
 * Inicializa todos los eventos de la aplicación
 */
function inicializarEventos() {
    // Formulario de cliente
    document.getElementById('formularioCliente').addEventListener('submit', manejarAgregarCliente);
    
    // Formulario de pago
    document.getElementById('formularioPago').addEventListener('submit', manejarRegistrarPago);
    
    // Búsqueda de pagos
    document.getElementById('buscarCliente').addEventListener('input', manejarBusquedaPagos);
    
    // Botón limpiar historial
    document.getElementById('btnLimpiarHistorial').addEventListener('click', mostrarConfirmacionLimpiar);
    
    // Modal
    document.getElementById('btnConfirmar').addEventListener('click', confirmarAccion);
    document.getElementById('btnCancelar').addEventListener('click', cancelarAccion);
    
    // Cerrar modal al hacer click fuera
    document.getElementById('modalConfirmacion').addEventListener('click', (e) => {
        if (e.target.id === 'modalConfirmacion') {
            cancelarAccion();
        }
    });
}

/**
 * Carga la fecha actual en el campo de fecha
 */
function cargarFecha() {
    const hoy = new Date().toISOString().split('T')[0];
    document.getElementById('fechaPago').value = hoy;
}

// ============ EVENTOS DE CLIENTE ============

/**
 * Maneja el evento de agregar un nuevo cliente
 */
function manejarAgregarCliente(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombreCliente').value.trim();
    const montoDeuda = parseFloat(document.getElementById('montoDeuda').value);
    
    // Validar datos
    if (!nombre || montoDeuda <= 0) {
        mostrarMensaje('Por favor completa todos los campos correctamente', 'error');
        return;
    }
    
    // Agregar cliente
    const nuevoCliente = agregarCliente(nombre, montoDeuda);
    
    if (nuevoCliente) {
        mostrarMensaje(`Cliente "${nombre}" registrado exitosamente`, 'exito');
        event.target.reset();
        actualizarInterfaz();
    } else {
        mostrarMensaje('Error al registrar el cliente', 'error');
    }
}

/**
 * Elimina un cliente después de confirmación
 */
function eliminarClienteConfirmado(clienteId) {
    if (eliminarCliente(clienteId)) {
        mostrarMensaje('Cliente eliminado correctamente', 'exito');
        actualizarInterfaz();
    } else {
        mostrarMensaje('Error al eliminar el cliente', 'error');
    }
}

// ============ EVENTOS DE PAGO ============

/**
 * Maneja el evento de registrar un nuevo pago
 */
function manejarRegistrarPago(event) {
    event.preventDefault();
    
    const clienteId = parseInt(document.getElementById('clientePago').value);
    const monto = parseFloat(document.getElementById('montoPago').value);
    const fecha = document.getElementById('fechaPago').value;
    const metodo = document.getElementById('metodoPago').value;
    
    // Validaciones
    if (!clienteId || !monto || monto <= 0 || !fecha || !metodo) {
        mostrarMensaje('Por favor completa todos los campos correctamente', 'error');
        return;
    }
    
    const cliente = obtenerClientePorId(clienteId);
    const deudaRestante = calcularDeudaRestante(cliente);
    
    // Validar que no se pague más de lo adeudado
    if (monto > deudaRestante) {
        mostrarMensaje(`El monto excede la deuda. Deuda pendiente: ${formatearMoneda(deudaRestante)}`, 'advertencia');
        return;
    }
    
    // Registrar pago
    const pago = registrarPago(clienteId, monto, fecha, metodo);
    
    if (pago) {
        mostrarMensaje(`Pago registrado: ${formatearMoneda(monto)} para ${cliente.nombre}`, 'exito');
        event.target.reset();
        cargarFecha();
        actualizarInterfaz();
    } else {
        mostrarMensaje('Error al registrar el pago', 'error');
    }
}

/**
 * Maneja la búsqueda de pagos
 */
function manejarBusquedaPagos(event) {
    const busqueda = event.target.value;
    
    if (busqueda.trim() === '') {
        actualizarHistorialPagos(obtenerPagos());
    } else {
        const pagosFiltrados = filtrarPagosPorCliente(busqueda);
        actualizarHistorialPagos(pagosFiltrados);
    }
}

/**
 * Muestra confirmación para limpiar historial
 */
function mostrarConfirmacionLimpiar() {
    mostrarModal(
        '⚠️ Limpiar Historial',
        '¿Estás seguro de que deseas eliminar todos los datos? Esta acción no se puede deshacer.',
        () => {
            limpiarTodosDatos();
            mostrarMensaje('Todos los datos han sido eliminados', 'exito');
            actualizarInterfaz();
        }
    );
}

/**
 * Muestra confirmación para eliminar cliente
 */
function mostrarConfirmacionEliminarCliente(clienteId) {
    const cliente = obtenerClientePorId(clienteId);
    mostrarModal(
        '⚠️ Eliminar Cliente',
        `¿Deseas eliminar a "${cliente.nombre}"? Los pagos registrados se mantendrán en el historial.`,
        () => eliminarClienteConfirmado(clienteId)
    );
}

/**
 * Muestra confirmación para eliminar pago
 */
function mostrarConfirmacionEliminarPago(pagoId) {
    const pagos = obtenerPagos();
    const pago = pagos.find(p => p.id == pagoId);
    mostrarModal(
        '⚠️ Eliminar Pago',
        `¿Deseas eliminar el pago de ${formatearMoneda(pago.monto)} del ${formatearFecha(pago.fecha)}? La deuda se reactivará.`,
        () => eliminarPagoConfirmado(pagoId)
    );
}

/**
 * Elimina un pago después de confirmación
 */
function eliminarPagoConfirmado(pagoId) {
    if (eliminarPago(pagoId)) {
        mostrarMensaje('Pago eliminado correctamente', 'exito');
        actualizarInterfaz();
    } else {
        mostrarMensaje('Error al eliminar el pago', 'error');
    }
}

// ============ ACTUALIZACIÓN DE INTERFAZ ============

/**
 * Actualiza toda la interfaz
 */
function actualizarInterfaz() {
    actualizarResumenTotal();
    actualizarListaClientes();
    actualizarSelectClientes();
    actualizarHistorialPagos(obtenerPagos());
}

/**
 * Actualiza el resumen total de adeudos y pagos
 */
function actualizarResumenTotal() {
    const totalAdeudado = calcularTotalAdeudado();
    const totalPagado = calcularTotalPagado();
    
    document.getElementById('totalAdeudado').textContent = formatearMoneda(totalAdeudado);
    document.getElementById('totalPagado').textContent = formatearMoneda(totalPagado);
}

/**
 * Actualiza la lista de clientes visibles
 */
function actualizarListaClientes() {
    const clientes = obtenerClientes();
    const contenedor = document.getElementById('listaClientes');
    
    if (clientes.length === 0) {
        contenedor.innerHTML = '<p class="sin-datos">No hay clientes registrados</p>';
        return;
    }
    
    contenedor.innerHTML = clientes.map(cliente => {
        const deudaRestante = calcularDeudaRestante(cliente);
        const porcentajePagado = (cliente.montoPagado / cliente.montoDeuda * 100).toFixed(0);
        const estado = cliente.estado === 'pagado' ? '✅ Pagado' : '⏳ Pendiente';
        
        return `
            <div class="tarjeta-cliente">
                <h3>${cliente.nombre}</h3>
                <div class="info-cliente">
                    <strong>Deuda Original:</strong> ${formatearMoneda(cliente.montoDeuda)}
                </div>
                <div class="info-cliente">
                    <strong>Monto Pagado:</strong> ${formatearMoneda(cliente.montoPagado)}
                </div>
                <div class="info-cliente">
                    <strong>Deuda Pendiente:</strong> ${formatearMoneda(deudaRestante)}
                </div>
                <div class="info-cliente">
                    <strong>Progreso:</strong> ${porcentajePagado}%
                </div>
                <div class="estado-deuda ${cliente.estado === 'pagado' ? 'estado-pagado' : 'estado-pendiente'}">
                    ${estado}
                </div>
                <div class="acciones-cliente">
                    <button class="btn btn-secondary btn-small" onclick="mostrarPagosCliente(${cliente.id})">
                        Ver Pagos
                    </button>
                    <button class="btn btn-danger btn-small" onclick="mostrarConfirmacionEliminarCliente(${cliente.id})">
                        Eliminar
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Actualiza el selector de clientes en el formulario de pago
 */
function actualizarSelectClientes() {
    const clientes = obtenerClientesPendientes();
    const select = document.getElementById('clientePago');
    
    // Mantener la opción por defecto
    const opcionDefecto = select.options[0];
    select.innerHTML = '';
    select.appendChild(opcionDefecto);
    
    if (clientes.length === 0) {
        const opcion = document.createElement('option');
        opcion.value = '';
        opcion.textContent = '-- No hay clientes con deuda pendiente --';
        opcion.disabled = true;
        select.appendChild(opcion);
        return;
    }
    
    clientes.forEach(cliente => {
        const deudaRestante = calcularDeudaRestante(cliente);
        const opcion = document.createElement('option');
        opcion.value = cliente.id;
        opcion.textContent = `${cliente.nombre} - Deuda: ${formatearMoneda(deudaRestante)}`;
        select.appendChild(opcion);
    });
}

/**
 * Actualiza el historial de pagos
 */
function actualizarHistorialPagos(pagos) {
    const contenedor = document.getElementById('historialPagos');
    
    if (pagos.length === 0) {
        contenedor.innerHTML = '<p class="sin-datos">No hay pagos registrados</p>';
        return;
    }
    
    // Ordenar por fecha descendente
    const pagosOrdenados = [...pagos].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    
    contenedor.innerHTML = pagosOrdenados.map(pago => `
        <div class="fila-pago">
            <div class="celda-pago">
                <label>Cliente</label>
                <span class="valor">${pago.nombreCliente}</span>
            </div>
            <div class="celda-pago">
                <label>Monto</label>
                <span class="valor monto">${formatearMoneda(pago.monto)}</span>
            </div>
            <div class="celda-pago">
                <label>Fecha</label>
                <span class="valor">${formatearFecha(pago.fecha)}</span>
            </div>
            <div class="celda-pago">
                <label>Método</label>
                <span class="valor">${pago.metodo}</span>
            </div>
            <div class="celda-pago">
                <button class="btn btn-danger btn-small" onclick="mostrarConfirmacionEliminarPago(${pago.id})">
                    🗑️ Eliminar
                </button>
            </div>
        </div>
    `).join('');
}

/**
 * Muestra los pagos de un cliente específico
 */
function mostrarPagosCliente(clienteId) {
    const cliente = obtenerClientePorId(clienteId);
    const pagos = obtenerPagosCliente(clienteId);
    
    const contenedor = document.getElementById('historialPagos');
    let html = `<h3 style="color: #007bff; margin-bottom: 20px;">Pagos de ${cliente.nombre}</h3>`;
    
    if (pagos.length === 0) {
        html += '<p class="sin-datos">Este cliente no tiene pagos registrados</p>';
    } else {
        html += pagos.map(pago => `
            <div class="fila-pago">
                <div class="celda-pago">
                    <label>Monto</label>
                    <span class="valor monto">${formatearMoneda(pago.monto)}</span>
                </div>
                <div class="celda-pago">
                    <label>Fecha</label>
                    <span class="valor">${formatearFecha(pago.fecha)}</span>
                </div>
                <div class="celda-pago">
                    <label>Método</label>
                    <span class="valor">${pago.metodo}</span>
                </div>
                <div class="celda-pago">
                    <button class="btn btn-danger btn-small" onclick="mostrarConfirmacionEliminarPago(${pago.id})">
                        🗑️ Eliminar
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    // Botón para volver
    html += `<button class="btn btn-secondary" onclick="actualizarHistorialPagos(obtenerPagos())" style="margin-top: 15px;">
        ← Volver al Historial Completo
    </button>`;
    
    contenedor.innerHTML = html;
}

// ============ MODAL ============

/**
 * Muestra el modal de confirmación
 */
function mostrarModal(titulo, mensaje, callback) {
    document.getElementById('modalTitulo').textContent = titulo;
    document.getElementById('modalMensaje').textContent = mensaje;
    document.getElementById('modalConfirmacion').classList.add('activo');
    modalActiva = callback;
}

/**
 * Confirma la acción del modal
 */
function confirmarAccion() {
    if (modalActiva) {
        modalActiva();
        modalActiva = null;
    }
    cancelarAccion();
}

/**
 * Cancela la acción del modal
 */
function cancelarAccion() {
    document.getElementById('modalConfirmacion').classList.remove('activo');
    modalActiva = null;
}

// ============ MENSAJES ============

/**
 * Muestra un mensaje temporal
 */
function mostrarMensaje(texto, tipo = 'exito') {
    // Crear elemento de mensaje
    const mensaje = document.createElement('div');
    mensaje.className = `mensaje mensaje-${tipo}`;
    mensaje.textContent = texto;
    
    // Insertarlo al inicio de main
    const main = document.querySelector('main');
    main.insertBefore(mensaje, main.firstChild);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        mensaje.remove();
    }, 4000);
}
