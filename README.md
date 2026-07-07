# Sistema de Biblioteca - Gestión de reservas de libros

## Descripción general

Este proyecto es una aplicación web simple desarrollada en JavaScript vanilla para gestionar reservas de libros de una biblioteca. Permite registrar usuarios, asociar libros a reservas, mostrar las reservas actuales y mantener los datos guardados en el navegador mediante localStorage.

El sistema está pensado como una demostración de Programación Orientada a Objetos (POO), donde se modelan entidades como usuarios, libros y reservas, y se organizan mediante una estructura basada en modelo-vista-controlador (MVC) básica.

## ¿Qué hace el sistema?

La aplicación permite:

- Crear reservas de libros ingresando datos del usuario y del libro.
- Mostrar una lista de reservas registradas.
- Marcar una reserva como completada o pendiente.
- Eliminar reservas existentes.
- Cargar libros desde una API externa para sugerir títulos.
- Guardar y recuperar las reservas en el almacenamiento local del navegador.

## Objetivo del proyecto

El objetivo principal es mostrar cómo se puede implementar un sistema de reservas con enfoque orientado a objetos, separando responsabilidades entre:

- Modelo: clases y estructuras que representan entidades del negocio.
- Vista: interfaz gráfica que muestra información al usuario.
- Controlador: lógica que conecta la interfaz con el modelo y el almacenamiento.

## Tecnologías utilizadas

- HTML5 para la estructura de la interfaz.
- CSS3 para el diseño y la presentación visual.
- JavaScript ES Modules para organizar el código.
- Fetch API para consumir datos desde la API de Gutendex.
- localStorage para persistir las reservas en el navegador.

## Estructura del proyecto

- index.html: archivo principal que contiene la interfaz de usuario.
- main.js: punto de inicio de la aplicación.
- modelo/: define las clases de Usuario, Libro, Reserva y otras estructuras relacionadas.
- controlador/: contiene la lógica de negocio y la gestión del almacenamiento.
- APIS/: integra la consulta a la API de libros.
- vista/: se encarga de la presentación de los datos en la interfaz.
- docs/: documentos y recursos adicionales del proyecto.
- UML/: diagramas de clases, casos de uso y secuencia.

## Cómo funciona

1. El usuario completa el formulario con sus datos y la información del libro.
2. El controlador recibe esos datos y crea un objeto Usuario y un objeto Libro.
3. Se genera una Reserva que une ambos objetos.
4. La reserva se guarda en el sistema y se muestra en la interfaz.
5. Si el usuario desea, puede marcarla como completada, eliminarla o consultarla luego, incluso tras recargar la página.

## Flujo de la aplicación

El flujo principal es el siguiente:

- La vista captura los datos del formulario.
- El controlador los valida y crea las instancias correspondientes.
- El modelo representa las entidades del dominio.
- El controlador guarda las reservas en localStorage.
- La vista vuelve a renderizar la lista de reservas actualizada.

## Funcionalidades principales

### Registro de reservas
El usuario puede ingresar:

- Nombre
- Correo electrónico
- Edad
- Título del libro
- Autor

### Carga de libros desde API
La aplicación consulta una API externa para ofrecer sugerencias de libros, lo que permite completar datos de manera más rápida.

### Persistencia de datos
Las reservas no se pierden al refrescar la página gracias al uso de localStorage.

## Integrantes

- Pérez Fabrizio
- Eckerdt Leonardo

## Diagramas UML y relación con el código

El proyecto incluye una carpeta llamada UML con distintos diagramas que representan visualmente la estructura del sistema y su comportamiento. Estos diagramas ayudan a comprender cómo se organiza la lógica del programa y cómo se relacionan las clases entre sí.

### 1. Diagrama de clases

Este diagrama muestra las entidades principales del sistema y sus relaciones. En el código, esto se refleja en los archivos del modelo:

- Usuario: representa a la persona que realiza la reserva.
- Libro: representa el libro que se reserva.
- Reserva: une a un usuario con un libro y guarda información adicional como la fecha y el estado.

En el código, estas entidades están definidas en [modelo/modelo.js](modelo/modelo.js).

### 2. Diagrama de casos de uso

Este diagrama representa las acciones que puede realizar un usuario dentro del sistema. En la práctica, esas acciones corresponden a las funciones de la interfaz y del controlador:

- Crear una reserva.
- Ver reservas existentes.
- Marcar una reserva como completada o pendiente.
- Eliminar una reserva.
- Cargar libros desde una API externa.

Estas acciones están conectadas con la lógica implementada en [controlador/controlador.js](controlador/controlador.js) y con la interfaz de [index.html](index.html).

### 3. Diagrama de secuencia

Este diagrama describe el orden de ejecución de una acción, por ejemplo, cuando un usuario registra una reserva. En el sistema real, el flujo sería:

1. El usuario completa el formulario en la interfaz.
2. La vista envía los datos al controlador.
3. El controlador crea las instancias de Usuario y Libro.
4. Se genera la reserva y se guarda en localStorage.
5. La vista muestra la lista actualizada de reservas.

Este comportamiento se relaciona directamente con la interacción entre [index.html](index.html), [controlador/controlador.js](controlador/controlador.js) y [controlador/guardarStorage.js](controlador/guardarStorage.js).

### Relación entre los diagramas y el código

Los diagramas sirven como una guía visual del diseño del sistema, mientras que el código implementa esa estructura. Por ejemplo:

- El diagrama de clases se refleja en las clases del archivo [modelo/modelo.js](modelo/modelo.js).
- El diagrama de casos de uso se refleja en las acciones disponibles en la interfaz de [index.html](index.html).
- El diagrama de secuencia se refleja en el flujo que sigue la aplicación cuando se crean, modifican o eliminan reservas.

## Cómo ejecutar el proyecto

1. Clonar o descargar este repositorio.
2. Abrir el archivo index.html en un navegador.
3. O, si se prefiere, utilizar una extensión de servidor local como Live Server para una mejor experiencia.

## Notas adicionales

Este proyecto fue desarrollado con fines educativos y para practicar conceptos de programación orientada a objetos, modularización de código y conexión con APIs externas.

## Posibles mejoras futuras

- Agregar autenticación de usuarios.
- Implementar una base de datos real.
- Mejorar la interfaz con estilos más completos.
- Añadir filtros y búsqueda de reservas.
- Permitir editar reservas ya existentes.
