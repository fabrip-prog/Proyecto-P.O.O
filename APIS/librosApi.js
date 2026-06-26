export async function Libros() {    

const url = "https://openlibrary.org/search.json?q=test";
const headers = new Headers({
    "User-Agent": "MiAppName/1.0 (miemail@example.com)"
});
const options = {
    method: 'GET',
    headers: headers
};
return fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

console.log("Hola mundo");
export async function Libros() {


    const response = await fetch(
        "https://openlibrary.org/search.json?q=test"
    );
    console.log(response);
    const libros = await response.json();

    console.log(libros.docs);

    return libros.docs
}
Libros();






