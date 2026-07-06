import { Usuario } from '../modelo/modelo.js';
import { Libro } from '../modelo/modelo.js';
import { Reserva } from '../modelo/modelo.js';
import { guardarReservasEnStorage, recuperarReservasdeStorage } from './guardarStorage.js';

const usuario1 = new Usuario('Juan', 'juan@example.com', 30, 'contraseña123');
const libro1 = new Libro('El Quijote', 'Miguel de Cervantes');

const controladorReservas = {
    reservas: [],

    agregarReserva(){
        const nuevaReserva = new Reserva(
            usuario1, libro1
        );
        this.reservas.push(nuevaReserva);
        if (typeof vistaMostrarReservas !== 'undefined') {
            vistaMostrarReservas.renderizar(this.reservas);
        }
        guardarReservasEnStorage(this.reservas);
    },

    completar(id){
        const reserva = this.reservas.find(r => r.id === id);
        if (reserva) reserva.completada = !reserva.completada;
        if (typeof vistaMostrarReservas !== 'undefined') {
            vistaMostrarReservas.renderizar(this.reservas);
        }
        guardarReservasEnStorage(this.reservas);
    },

    eliminar(id){
        this.reservas = this.reservas.filter(r => r.id !== id);
        if (typeof vistaMostrarReservas !== 'undefined') {
            vistaMostrarReservas.renderizar(this.reservas);
        }
        guardarReservasEnStorage(this.reservas);
    },

    guardarReservasEnStorage(){
        guardarReservasEnStorage(this.reservas);
    },
    
    recuperarReservasdeStorage(){
        try {
            const reservasGuardadas = recuperarReservasdeStorage();
            if (reservasGuardadas && reservasGuardadas.length > 0) {
                this.reservas = reservasGuardadas;
                if (typeof vistaMostrarReservas !== 'undefined') {
                    vistaMostrarReservas.renderizar(this.reservas);
                }
            }
        } catch (error) {
            console.error('Error al recuperar reservas:', error);
            return [];
        }  
    }

};

// Recuperar reservas al iniciar la aplicación
controladorReservas.recuperarReservasdeStorage();

export default controladorReservas;