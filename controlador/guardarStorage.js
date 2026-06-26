
export const localStorage = () => {
    reservas = [];

    guardarReservas();
        localStorage.setItem('reservaciones', JSON.stringify(reservas));
    

    cargarReservas();
        localStorage.getItem('reservaciones') ? reservas = JSON.parse(localStorage.getItem('reservaciones')) : reservas = [];


    recuperarReservas();
        try {
            reservas = JSON.parse(localStorage.getItem('reservaciones'));
        } catch (error) {
            console.error('Error al recuperar reservas:', error);
        }
}

