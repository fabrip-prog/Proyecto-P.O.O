console.log("Hola mundo");
// export async function Libros() {    
// console.log("buscando libros");
// const url = "https://openlibrary.org/search.json?q=test";
// // const headers = new Headers({
// //     "User-Agent": "MiAppName/1.0 (miemail@example.com)"
// // });
// // const options = {
// //     method: 'GET',
// //     headers: headers
// // };
//  fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));
// }

// console.log("Hola mundo");
export async function Libros() {

    try {
         console.log("buscando libros");

          const headers = new Headers({
     "User-Agent": "MiAppName/1.0 (miemail@example.com)"
 });

        const response = await fetch('https://gutendex.com/books/', { headers });

        console.log(response);

        const libros = await response.json();

        console.log(libros.results);

         return libros.results;

        // libros.results.forEach(libro => {
        //     console.log(`Título: ${libro.title}, Autor: ${libro.authors.map(a => a.name).join(', ')}`);
        // });


    } catch (error) {
        console.error('Error:', error);
    }
}



Libros();






