/* Identificación y Documentación de Code Smells

1. Code Smell: Números Mágicos
Ubicación: Constructor de Reserva
Problema: La expresión `Math.random().toString(36).substr(2, 9)` utiliza los números 36, 2 y 9, lo cual oscurece su propósito (generar un ID).

2. Code Smell: Correccion en los nombres de métodos
Ubicación: Clase Reservas, métodos `Reservar` y `Devolver`
Problema: Las mayúsculas iniciales se reservan para clases y constructores (deberían ser `reservar` y `devolver`).

3. Code Smell: Correccion de Atributos
Ubicación: Clase Reservas, método `Devolver`
Problema: Se accede directamente a las propiedades `usuario` y `libro` del objeto Reserva en `r.usuario === usuario && r.libro === libro`. Debería delegarse a la clase Reserva.
*/

// Refactorización

// Extraemos la lógica de ID para darle semántica
const generarIdUnico = () => Math.random().toString(36).substring(2, 11);

export class Reserva {
    constructor(usuario, libro) {
        this.id = generarIdUnico();
        this.usuario = usuario;
        this.libro = libro;
        this.fechaReserva = new Date();
        this.completada = false;
    }

    coincideCon(usuario, libro) {
        return this.usuario === usuario && this.libro === libro;
    }
}

export class Reservas {
    constructor() {
        this.reservados = [];
    }

    reservar(usuario, libro) {
        const nuevaReserva = new Reserva(usuario, libro);
        this.reservados.push(nuevaReserva);
        return nuevaReserva;
    }

    devolver(usuario, libro) {
        this.reservados = this.reservados.filter(r => !r.coincideCon(usuario, libro));
    }
}
