export async function Libros() {
    try {
        console.log('buscando libros');

        const headers = new Headers({
            'User-Agent': 'MiAppName/1.0 (miemail@example.com)'
        });

        const response = await fetch('https://gutendex.com/books/', { headers });

        if (!response.ok) {
            throw new Error(`Error al consultar la API: ${response.status}`);
        }

        const libros = await response.json();
        return Array.isArray(libros?.results) ? libros.results : [];
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

export default Libros;
