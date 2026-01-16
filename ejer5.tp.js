// 5- REPORTES DE LIBROS
//Generamos una estructura de datos con libros mundialmente conocidos: 
let libros = [
    { id: 1, titulo: "Cien años de soledad", genero: "Realismo mágico", anio: 1967, disponible: true },
    { id: 2, titulo: "El Principito", genero: "Ficción", anio: 1943, disponible: true },
    { id: 2, titulo: "Don Quijote de la Mancha", genero: "Novela clásica", anio: 1605, disponible: false },
    { id: 3, titulo: "Harry Potter y la piedra filosofal", genero: "Fantasía", anio: 1997, disponible: true },
];

// a. Para generar el reporteLibros, la función debe devolver: cantidad total de libros, cantidad de libros prestados, por género, el más antiguo y el más nuevo.
function generarReporteLibros() {
    const totalLibros = libros.length;//"lenght" devuelve cuántos elementos hay en el array.
    const librosPrestados = libros.filter(libro => !libro.disponible).length;// Usamos "filter" para devolver solo los libros no disponbles y luego contamos cuántos hay.
    const librosPorGenero = libros.reduce((acumulador, libro) => { //Usamos "reduce" para recorrer el array y acumular un resultado final.
        if (!acumulador[libro.genero]) {
            acumulador[libro.genero] = 1; //Aquí se crea una clave por género
        } else {
            acumulador[libro.genero]++; // e incrementa el contador.
        }
        return acumulador; // Retorna el valor numérico, la cantidad de libros de ese género. 
    }, {});
    const anios = libros.map(libro => libro.anio); //Usamos "map" para obtener los años de publicación.
    const anioMasAntiguo = Math.min(...anios); //Obtiene el año más pequeño o mínimo.
    const libroMasAntiguo = libros.find(libro => libro.anio === anioMasAntiguo); // y luego el libro correspondiente.
    const libroMasNuevo = libros.reduce((nuevo, libro) => //Esta es otra forma de resolverlo, aquí compara años, selecciona el mayor y muestra el libro correspondiente. 
        libro.anio > nuevo.anio ? libro : nuevo
    );

    return {
        totalLibros,
        librosPrestados,
        librosPorGenero,
        libroMasAntiguo,
        libroMasNuevo

    }; // Usamos "return" para mostrar los resultados requeridos en el reporte. 
}
