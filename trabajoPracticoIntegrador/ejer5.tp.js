//5)5. Reportes
//a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays
//(.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
//✔ Cantidad total de libros.
//✔ Cantidad de libros prestados.
//✔ Cantidad de libros por género.
//✔ Libro más antiguo y más nuevo

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
