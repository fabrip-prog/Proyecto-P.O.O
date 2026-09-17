import assert from 'node:assert';
import test from 'node:test';
import { Reserva, Reservas } from '../modelo/claseReservaRefactorizada.js';


test('Reserva - Creación y método coincideCon', () => {
    const reserva = new Reserva('usuario1', 'libro1');
    assert.strictEqual(reserva.usuario, 'usuario1');
    assert.strictEqual(reserva.libro, 'libro1');
    assert.strictEqual(reserva.completada, false);
    assert.ok(reserva.id.length > 0);
    assert.ok(reserva.fechaReserva instanceof Date);

    assert.strictEqual(reserva.coincideCon('usuario1', 'libro1'), true);
    assert.strictEqual(reserva.coincideCon('usuario2', 'libro1'), false);
});

test('Reservas - Método reservar y devolver', () => {
    const gestionReservas = new Reservas();
    
    gestionReservas.reservar('usuario1', 'libro1');
    assert.strictEqual(gestionReservas.reservados.length, 1);
    assert.strictEqual(gestionReservas.reservados[0].usuario, 'usuario1');

    gestionReservas.reservar('usuario2', 'libro2');
    assert.strictEqual(gestionReservas.reservados.length, 2);

    gestionReservas.devolver('usuario1', 'libro1');
    assert.strictEqual(gestionReservas.reservados.length, 1);
    assert.strictEqual(gestionReservas.reservados[0].usuario, 'usuario2');
});
