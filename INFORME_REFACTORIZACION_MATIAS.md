# Informe de Refactorización

Se refactorizó la función `crearReservaDesdeDatos` (en un archivo nuevo `crearReservaRefactorizada.js` para no alterar el código original).

**Cambios realizados:**
 Se movió el número 18 (edad por defecto) a una constante.
 Se separó la limpieza y validación de datos en una función nueva (`validarDatosReserva`). 
 Gracias a esto, se eliminó un `if` gigante que dificultaba la lectura, dejando la función principal mucho más corta y ordenada.

**Pruebas:**
Se agregó el archivo `test/controlador.test.js` para comprobar que los cambios no rompan nada y devuelvan exactamente lo mismo que la función original. 

Para correr las pruebas: `node --test test/controlador.test.js`
tuve que agregar el packaje para hacer los test