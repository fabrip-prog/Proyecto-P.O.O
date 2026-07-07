import Libros from "../APIS/librosApi.js";
import { Usuario, Libro, Reserva } from '../modelo/modelo.js';
import { guardarReservasEnStorage as guardarEnStorage, recuperarReservasdeStorage as recuperarDeStorage, limpiarReservas as limpiarStorage } from './guardarStorage.js';

const controladorReservas = {
    reservas: [],

    async cargarLibros() {
        try {
            const libros = await Libros();
            return Array.isArray(libros) ? libros : [];
        } catch (error) {
            console.error('Error al cargar libros:', error);
            return [];
        }
    },

    async cargarLibrosDisponibles() {
        return this.cargarLibros();
    },

    agregarReserva(usuario, libro) {
        const nuevaReserva = new Reserva(usuario, libro);
        this.reservas.push(nuevaReserva);
        this.guardarReservasEnStorage();
        this.actualizarVista();
        return nuevaReserva;
    },

    crearReservaDesdeDatos(datos) {
        const nombre = datos?.nombre?.trim() || '';
        const email = datos?.email?.trim() || '';
        const edad = Number(datos?.edad) || 18;
        const titulo = datos?.titulo?.trim() || '';
        const autor = datos?.autor?.trim() || '';

        if (!nombre || !email || !titulo || !autor) {
            return { ok: false, message: 'Completa los campos obligatorios.' };
        }

        const usuario = new Usuario(nombre, email, 'temporal', edad);
        const libro = new Libro(titulo, autor);
        const reserva = this.agregarReserva(usuario, libro);

        return {
            ok: true,
            reserva,
            message: `Reserva creada para "${libro.titulo}".`
        };
    },

    completar(id) {
        const reserva = this.reservas.find(r => r.id === id);
        if (reserva) reserva.completada = !reserva.completada;
        this.guardarReservasEnStorage();
        this.actualizarVista();
        return reserva;
    },

    eliminar(id) {
        this.reservas = this.reservas.filter(r => r.id !== id);
        this.guardarReservasEnStorage();
        this.actualizarVista();
        return this.reservas;
    },

    guardarReservasEnStorage() {
        guardarEnStorage(this.reservas);
    },

    recuperarReservasdeStorage() {
        try {
            const reservasGuardadas = recuperarDeStorage();
            if (Array.isArray(reservasGuardadas)) {
                this.reservas = reservasGuardadas;
                this.actualizarVista();
            }
            return this.reservas;
        } catch (error) {
            console.error('Error al recuperar reservas:', error);
            return [];
        }
    },

    verReservasGuardadas() {
        const reservas = recuperarDeStorage();
        this.reservas = Array.isArray(reservas) ? reservas : [];
        this.actualizarVista();
        return this.reservas;
    },

    limpiarReservas() {
        limpiarStorage();
        this.reservas = [];
        this.actualizarVista();
        return true;
    },

    actualizarVista() {
        if (typeof window !== 'undefined' && typeof window.vistaMostrarReservas !== 'undefined') {
            window.vistaMostrarReservas.renderizar(this.reservas);
        }
    }
};

controladorReservas.recuperarReservasdeStorage();

export default controladorReservas;