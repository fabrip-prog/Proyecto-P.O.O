import { Usuario, Libro } from '../modelo/modelo.js';

const EDAD_PREDETERMINADA = 18;
const ERROR_CAMPOS_OBLIGATORIOS = 'Completa los campos obligatorios.';

// Valida y limpia los datos del formulario
export function validarDatosReserva(datos) {
    const nombre = datos?.nombre?.trim() || '';
    const email = datos?.email?.trim() || '';
    const edad = Number(datos?.edad) || EDAD_PREDETERMINADA;
    const titulo = datos?.titulo?.trim() || '';
    const autor = datos?.autor?.trim() || '';

    const camposCompletos = Boolean(nombre && email && titulo && autor);

    return {
        esValido: camposCompletos,
        datos: { nombre, email, edad, titulo, autor },
        mensajeError: camposCompletos ? null : ERROR_CAMPOS_OBLIGATORIOS
    };
}

// Crea la reserva usando los datos ya validados
export function crearReservaDesdeDatos(datos, agregarReservaFn) {
    const validacion = validarDatosReserva(datos);

    if (!validacion.esValido) {
        return {
            ok: false,
            message: validacion.mensajeError
        };
    }

    const { nombre, email, edad, titulo, autor } = validacion.datos;
    const usuario = new Usuario(nombre, email, 'temporal', edad);
    const libro = new Libro(titulo, autor);

    const agregar = agregarReservaFn || (typeof this?.agregarReserva === 'function' ? this.agregarReserva.bind(this) : null);
    const reserva = agregar ? agregar(usuario, libro) : { usuario, libro };

    return {
        ok: true,
        reserva,
        message: `Reserva creada para "${libro.titulo}".`
    };
}
