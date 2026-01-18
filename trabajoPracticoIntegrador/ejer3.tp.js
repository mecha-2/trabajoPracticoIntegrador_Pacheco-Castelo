//3. Gestión de Usuarios
//a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo
//usuario al array usuarios.
//b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array
//completo de usuarios
//c) Crear una función buscarUsuario(email) que devuelva la información de un usuario
//dado su email.
//d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario
//seleccionado
// Ingresamos la librería:
const prompt = require("prompt-sync")();

// a. Se crea una "function" para poder registrar el usuario:
function registrarUsuario(nombre, email) {
    usuarios.push({ nombre, email });
    console.log("Usuario registrado correctamente.");
}

// b. Mostramos los usuarios:
function mostrarTodosLosUsuarios() {
    return usuarios;
}

// c. Buscar usuario por email usando "find" que recorre elemento por elemento, devolviendo el primer elemento que cumpla la condicion.
// La condición es una función flecha que toma el usuario del array comparandolo con el email buscado, devolviendo true (coincide) o false (no coincide).
function buscarUsuario(email) {
    return usuarios.find(usuario => usuario.email === email);
}

// d. Borrar usuario por nombre y email, usando "filter" que recorre el array y devuelve solo los elementos que cumplan la condición.
// La condición es comparar el nombre del usuario y ver si es igual al que queremos borrar, además de comparar si el email también coincide. 
// Ambas condiciones deben ser verdaderas (&&) y el operador (!) niega el valor booleano.
// En síntesis, le decimos que NO queremos el usuario que coincida.
function borrarUsuario(nombre, email) {
    const usuariosFiltrados = usuarios.filter(
        usuario => !(usuario.nombre === nombre && usuario.email === email)
    );

    if (usuariosFiltrados.length === usuarios.length) {
        console.log("Usuario no encontrado.");
    } else {
        usuarios = usuariosFiltrados;
        console.log("Usuario eliminado correctamente.");
    }
}