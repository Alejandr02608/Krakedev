# 💰 Sistema de Cobros Interactivo

Una interfaz web moderna y completa para gestionar cobros, clientes y pagos de forma eficiente.

## 📋 Características Principales

### ✨ Funcionalidades

1. **Gestión de Clientes**
   - Registrar nuevos clientes con monto inicial adeudado
   - Visualizar lista de clientes en tarjetas interactivas
   - Ver estado de deuda (Pendiente/Pagado)
   - Calcular porcentaje de pago completado
   - Eliminar clientes (los pagos se mantienen en historial)

2. **Sistema de Pagos**
   - Registrar pagos parciales o completos
   - Seleccionar método de pago (Efectivo, Transferencia, Tarjeta, Cheque)
   - Asignar fecha de pago
   - Validación automática para evitar sobrepagos
   - Eliminar pagos si es necesario (revierte la deuda)

3. **Historial Completo**
   - Visualizar todos los pagos registrados
   - Búsqueda rápida por nombre de cliente
   - Ver pagos de un cliente específico
   - Eliminar pagos individuales con confirmación

4. **Resumen y Reportes**
   - Total adeudado por todos los clientes
   - Total de pagos realizados
   - Lista de clientes pendientes
   - Lista de clientes con deuda pagada

5. **Almacenamiento Persistente**
   - Los datos se guardan automáticamente en localStorage
   - Acceso a datos incluso después de cerrar el navegador
   - Opción de limpiar todos los datos

## 🎨 Diseño

- **Interfaz moderna** con gradientes atractivos
- **Responsive** - funciona en desktop, tablet y móvil
- **Interactiva** - animaciones suaves y transiciones
- **Intuitiva** - mensajes claros y confirmaciones
- **Modal de confirmación** para acciones importantes

## 📁 Estructura de Archivos

```
cobros/
├── cobros.html           # Estructura HTML
├── cobros.css            # Estilos CSS
├── cobros.js             # Lógica principal
└── serviciosCobros.js    # Funciones auxiliares
```

## 🚀 Cómo Usar

### 1. Abrir la Aplicación
Sencillamente abre `cobros.html` en tu navegador.

### 2. Registrar un Cliente
1. Completa el formulario "Nuevo Cliente"
2. Ingresa nombre y monto adeudado
3. Haz clic en "Registrar Cliente"

### 3. Registrar un Pago
1. Selecciona un cliente con deuda pendiente
2. Ingresa el monto a pagar
3. Selecciona la fecha y método de pago
4. Haz clic en "Registrar Pago"

### 4. Ver Historial
- El historial se actualiza automáticamente
- Usa la búsqueda para filtrar por cliente
- Haz clic en "Ver Pagos" en una tarjeta para ver pagos específicos

### 5. Limpiar Datos
- Botón "Limpiar Historial" elimina todos los datos
- Se pedirá confirmación antes de hacerlo

## 🔧 Características Técnicas

### JavaScript
- Almacenamiento con localStorage
- Gestión de eventos sin dependencias
- Funciones puras para lógica de negocio
- Validaciones en cliente

### CSS
- Variables CSS para temas
- Grid CSS responsivo
- Animaciones CSS suaves
- Media queries para mobile

### Datos Almacenados

**Clientes:**
```javascript
{
  id: 1234567890,
  nombre: "Juan Pérez",
  montoDeuda: 1000,
  montoPagado: 350,
  estado: "pendiente",
  fechaRegistro: "2026-03-01T10:30:00.000Z"
}
```

**Pagos:**
```javascript
{
  id: 1234567891,
  clienteId: 1234567890,
  nombreCliente: "Juan Pérez",
  monto: 350,
  fecha: "2026-03-01",
  metodo: "Efectivo",
  fechaRegistro: "2026-03-01T10:35:00.000Z"
}
```

## 💡 Casos de Uso

- **Negocio o Tienda:** Tener control de créditos otorgados
- **Servicios:** Gestionar pagos de servicios recurrentes
- **Rentas:** Administrar cobros de arriendos
- **Deudas Generales:** Dar seguimiento a dinero prestado

## ⚠️ Notas Importantes

- Los datos se guardan automáticamente en el navegador
- Si limpias el cache del navegador, se perderán los datos
- No hay contraseña - es una aplicación local
- Para guardar datos de forma permanente, considera exportarlos/respaldarlos

## 🎯 Mejoras Futuras

- Exportar datos a Excel/PDF
- Gráficas de cobros
- Recordatorios automáticos
- Sistema de usuarios
- Backend con base de datos

---

**Desarrollado para Krakedev** 🚀
