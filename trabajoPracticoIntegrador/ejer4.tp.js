//4) Sistema de Préstamos
//a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no
//disponible y lo agregue a la lista de libros prestados del usuario.
//b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como
//disponible y lo elimine de la lista de libros prestados del usuario
// Ingresamos la librería:
const prompt = require("prompt-sync")();

// a. Debemos marcar el libro como no disponible y agregarlo a la lista de librosPrestados del usuario.
// Usamos "find" para buscar el libro y el usuario, ambos por su ID. Hacemos las validaciones: si no existe el libro o usuario o si el libro no está disponible nos va a dar error (undefined).
// l.id === idLibro: explicando esta parte del código, quiere decir que da true si lo encontró y false si aún lo sigue buscando.
function prestarLibro(idLibro, idUsuario) {
    const libro = libros.find(l => l.id === idLibro);
    const usuario = usuarios.find(u => u.id === idUsuario);

    if (!libro || !usuario) {
        console.log("Libro o usuario no encontrado.");
        return; //Usamos return para detener la función.
    }
    // !libro significa que si el libro es undefined, !undefined es true. Es decir, si no existe el libro o no existe el usuario.
    if (!libro.disponible) {
        console.log("El libro no está disponible.")
        return;
    }
    // "libro.disponible" puede ser true (disponible) o false (prestado).
    // Luego se marca como prestado y se guarda el ID del libro en el usuario. 
    libro.disponible = false;
    usuario.librosPrestados.push(idLibro);

    console.log("Libro prestado correctamente.")
}

// b. Debemos marcar el libro como disponible y eliminarlo de "librosPrestados".
// Usamos "include" para verificar si el usuario tiene el libro y se cambia el estado del libro (true).
// Con filter se elimina el ID del libro y se conservan todos menos el libro devuelto. 
function devolverLibro(idLibro, idUsuario) {
    const libro = libros.find(l => l.id === idLibro);
    const usuario = usuarios.find(u => u.id === idUsuario);

    if (!libro || !usuario) {
        console.log("Libro o usuario no encontrado.");
        return;
    }

    if (!usuario.librosPrestados.includes(idLibro)) {
        console.log("El usuario no tiene ese libro prestado.");

        return;
    }

    libro.disponible = true;

    usuario.librosPrestados = usuario.librosPrestados.filter(
        id => id !== idLibro
    );

    console.log("Libro devuelto correctamente.")
}

//Un ejemplo de cómo funcionaría esto y para comprobarlo, es colocar:
devolverLibro(1, 2); //Aqui pusimos idLibro 1 (El principito) y idUsuario 2 (Juan). 
//Esto debería devolver que el usuario no tiene ese libro prestado y que el libro fue devuelto correctamente. 
//El otro ejemplo con la otra función es:
prestarLibro(3, 2); //Esto debería devolver que el libro fue prestado correctamente, porque ambos id coinciden con un libro y un usuario existentes. 
//Si pusieramos: 
prestarLibro(3, 5); //Devolvería que el libro o el usuario no han sido encontrados, porque efectivamente no existe un usuario con id 5.