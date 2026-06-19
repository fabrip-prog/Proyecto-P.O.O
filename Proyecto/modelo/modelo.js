class Usuario{
    #contraseña;
    constructor(nombre, email, contraseña, edad){
        this.id = Math.random().toString(36).substr(2, 9);
        this.nombre = nombre;
        this.email = email;
        this.#contraseña = contraseña;
        this.edad = edad;  

    }

}

class Libro{
    constructor(titulo, autor){
        this.id = Math.random().toString(36).substr(2, 9);
        this.titulo = titulo;
        this.autor = autor;
    }

    MostrarInfo(){
        return `El libro "${this.titulo}" fue escrito por ${this.autor}.`;
    }
}   

class Reserva{
    constructor(usuario, libro){
        this.usuario = usuario;
        this.libro = libro;
        this.fechaReserva = new Date();
    }
}

class Reservas{
    constructor(){
        this.reservados = [];
    }

    Reservar(usuario, libro){

        const nuevaReserva = new Reserva(usuario, libro);
        this.reservados.push(nuevaReserva);
    }

    Devolver(usuario, libro){
        this.reservados = this.reservados.filter(r => !(r.usuario === usuario && r.libro === libro));
    }
}

