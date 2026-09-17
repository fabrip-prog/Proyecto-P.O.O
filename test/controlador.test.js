import { describe, test } from 'node:test';
import assert from 'node:assert/strict';

const { 
    crearReservaDesdeDatos, 
    validarDatosReserva
} = await import('../controlador/crearReservaRefactorizada.js');

describe("Pruebas de la función validarDatosReserva con datos correctos", () => {
    test("valida bien los datos y devuelve esValido en true", () => {
        const entrada = { nombre: 'Ana', email: 'a@a.com', edad: '22', titulo: 'Libro', autor: 'Autor' };
        const resultado = validarDatosReserva(entrada);
        assert.equal(resultado.esValido, true);
    });
});

describe("Pruebas de la función validarDatosReserva sin edad", () => {
    test("pone la edad en 18 por defecto cuando no se envía", () => {
        const entrada = { nombre: 'Juan', email: 'j@j.com', titulo: 'Libro', autor: 'Autor' };
        const resultado = validarDatosReserva(entrada);
        assert.equal(resultado.datos.edad, 18);
    });
});

describe("Pruebas de la función validarDatosReserva con datos faltantes", () => {
    test("devuelve esValido en false si falta algo", () => {
        const entrada = { nombre: '', email: 'j@j.com', titulo: 'Libro', autor: 'Autor' };
        const resultado = validarDatosReserva(entrada);
        assert.equal(resultado.esValido, false);
    });
});

describe("Pruebas de la función crearReservaDesdeDatos con éxito", () => {
    test("crea la reserva correctamente y devuelve ok en true", () => {
        const datos = { nombre: 'Ana', email: 'a@a.com', edad: 25, titulo: 'Libro', autor: 'Autor' };
        const resultado = crearReservaDesdeDatos(datos);
        assert.equal(resultado.ok, true);
    });
});

describe("Pruebas de la función crearReservaDesdeDatos con error", () => {
    test("devuelve ok en false si los datos están incompletos", () => {
        const datos = { nombre: '', email: 'a@a.com', titulo: 'Libro' };
        const resultado = crearReservaDesdeDatos(datos);
        assert.equal(resultado.ok, false);
    });
});
