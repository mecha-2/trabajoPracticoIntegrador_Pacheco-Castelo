//8. Manejo de Cadenas
//a) Crear una función normalizarDatos() que utilice métodos de strings para:
//✔ Convertir todos los títulos a mayúsculas.
//✔ Eliminar espacios en blanco al inicio y final de los nombres de autores.
//✔ Formatear los emails de los usuarios a minúsculas.


// Declaramos la función normalizarDatos
function normalizarDatos() {
    // Normalizar libros
    libros.forEach(function (libro) {
        // Usamos forEach para recorrer el array libros
        libro.titulo = libro.titulo.toUpperCase();  // toUpperCase convierte título en mayúsculas
        libro.autor = libro.autor.trim();           // trim quita los espacios al inicio/final
    });

    // Normalizar usuarios
    usuarios.forEach(function (usuario) {
        // Usamos forEach para recorrer el array usuarios
        usuario.email = usuario.email.toLowerCase(); // toLowerCase pasa el email a minúsculas
    });

    console.log(libros);    // Mostramos los libros  normalizados
    console.log(usuarios);  // Mostramos los usuarios normalizados
}


// Llamamos a la función para probarla
normalizarDatos();
