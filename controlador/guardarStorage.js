function localStorageDisponible() {
    try {
        const test = '__test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (error){
        return false;
    }
}

export function guardarReservasEnStorage(reservas) {
    if (!localStorageDisponible()) {
        console.error('localStorage no está disponible');
        return;
    }
    try {
        localStorage.setItem('reservaciones', JSON.stringify(reservas));
        console.log('Reservas guardadas en localStorage');
    } catch (error) {
        console.error('Error al guardar reservas en localStorage:', error);
    }
}

export function recuperarReservasdeStorage() {
    try {
        const reservasGuardadas = localStorage.getItem('reservaciones');
        if (reservasGuardadas) {
            console.log('Reservas recuperadas de localStorage');
            return JSON.parse(reservasGuardadas);
        }
        return [];
    } catch (error) {
        console.error('Error al recuperar reservas de localStorage:', error);
        return [];
    }
}

export function verificarReservasGuardadas() {
    try {
        const reservasGuardadas = localStorage.getItem('reservaciones');
        if (reservasGuardadas) {
            const reservas = JSON.parse(reservasGuardadas);
            console.log('✅ Reservas encontradas en localStorage:');
            console.log(`Total: ${reservas.length} reserva(s)`);
            console.table(reservas);
            return reservas;
        } else {
            console.log('❌ No hay reservas guardadas en localStorage');
            return [];
        }
    } catch (error) {
        console.error('Error al verificar reservas:', error);
        return [];
    }
}

export function limpiarReservas() {
    try {
        localStorage.removeItem('reservaciones');
        console.log('🗑️ Reservas eliminadas de localStorage');
    } catch (error) {
        console.error('Error al limpiar reservas:', error);
    }
}
