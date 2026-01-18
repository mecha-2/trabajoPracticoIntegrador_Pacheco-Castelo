//1. Estructura de Datos
//a) Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro
//debe tener las siguientes propiedades:
//✔ id (número)
//✔ título (string),
//✔ autor (string),
//✔ año (número),
//✔ género (string),
//✔ disponible (booleano).
//b) Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario
//debe tener:
//✔ id (número)
//✔ nombre (string)
//✔ email (string)
//✔ librosPrestados (array de ids de libros).



//1: Estructura de datos se crea un array de objetos para los libros, 
// donde cada libro contiene sus datos básicos y su disponibilidad.


let libros = [
    { id: 1, titulo: "Orgullo y prejuicio", autor: "Jane Austen", anio: 1813, genero: "Romance", disponible: true },
    { id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: 1967, genero: "Realismo mágico", disponible: false },
    { id: 3, titulo: "Emma", autor: "Jane Austen", anio: 1815, genero: "Romance", disponible: true },
    { id: 4, titulo: "Rayuela", autor: "Julio Cortázar", anio: 1963, genero: "Drama", disponible: true },
    { id: 5, titulo: "It", autor: "Stephen King", anio: 1986, genero: "Terror", disponible: true },
    { id: 6, titulo: "Drácula", autor: "Bram Stoker", anio: 1897, genero: "Terror", disponible: true },
    { id: 7, titulo: "El hobbit", autor: "J.R.R. Tolkien", anio: 1937, genero: "Fantasía", disponible: true },
    { id: 8, titulo: "Mujercitas", autor: "Louisa May Alcott", anio: 1868, genero: "Drama", disponible: true },
    { id: 9, titulo: "Fahrenheit 451", autor: "Ray Bradbury", anio: 1953, genero: "Ciencia ficción", disponible: true },
    { id: 10, titulo: "1984", autor: "George Orwell", anio: 1949, genero: "Distopía", disponible: true }
];

//2)Se crea un array de objetos para usuarios, donde cada usuario contiene sus datos personales (id nombre email libros que tiene en su poder
// y un array con los IDs de los libros que tiene prestados.

let usuarios = [
    { id: 1, nombre: "Sol", email: "sol@gmail.com", librosPrestados: [2] },
    { id: 2, nombre: "Lautaro", email: "lautaro@gmail.com", librosPrestados: [] },
    { id: 3, nombre: "Carla", email: "carla@gmail.com", librosPrestados: [] },
    { id: 4, nombre: "Ana", email: "ana@gmail.com", librosPrestados: [] },
    { id: 5, nombre: "Juan", email: "juan@gmail.com", librosPrestados: [] }
];



//El ejercicio no lo pide pero para probar si nuestro codigo funciona bien agregamos
console.log(libros);
console.log(usuarios);
// para ver los arrays creados en la consola. 



//2. Funciones de Gestión de Libros
//a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un
//nuevo libro al array libros.
//b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título,
//autor o género utilizando el algoritmo de búsqueda lineal.
//c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año
//utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los
//libros ordenados en la consola.
//d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por
//parámetro.//a)Creamos la funcion agregarLibro function agregarLibro(id, titulo, autor, año, genero) { let nuevoLibro = { id: id, titulo: titulo, autor: autor, año: año, genero: genero, disponible: true }; libros.push(nuevoLibro); } //b) Creamos la funcion buscarLibro para buscar libros por título, autor o género. function buscarLibro(criterio, valor) { for (let i = 0; i < libros.length; i++) { if (libros[i][criterio] === valor) { console.log(libros[i]); } } } //c) Creamos la funcion ordenarLibros para ordenar los libros por título o año. function ordenarLibros(criterio) { for (let i = 0; i < libros.length - 1; i++) { // Hacemos una pasada completa por los libros // comparando vecinos; usamos length para saber cuántos libros hay y -1 porque el último no necesita compararse for (let j = 0; j < libros.length - 1 - i; j++) { // comparaciones de cada pasada, se recorren los elementos vecinos y se van comparando para intercambiar; los últimos ya no se tocan porque ya están en su lugar if (criterio === "titulo") { if (libros[j].titulo > libros[j + 1].titulo) { let temp = libros[j]; libros[j] = libros[j + 1]; libros[j + 1] = temp; } } if (criterio === "anio") { if (libros[j].año > libros[j + 1].año) { let temp = libros[j]; libros[j] = libros[j + 1]; libros[j + 1] = temp; } } } } console.log(libros); // mostrar el array ya ordenado } //d) Creamos la funcion borrarLibro para eliminar un libro por su id. function borrarLibro(id) { for (let i = 0; i < libros.length; i++) { if (libros[i].id === id) { libros.splice(i, 1); // elimina el libro console.log(Libro con id ${id} eliminado.); // mensaje opcional break; // salimos del for porque ya lo borramos } } console.log(libros); // array actualizado }


// a) Agregar un libro. Creamos un objeto con los datos del libro 
// y lo agregamos al array libros usando push, así el array siempre tiene todos los libros actualizados.

function agregarLibro(id, titulo, autor, anio, genero) {
    let nuevoLibro = {
        id: id,
        titulo: titulo,
        autor: autor,
        anio: anio,
        genero: genero,
        disponible: true
    };
    libros.push(nuevoLibro);
}

// b) Buscar libros por título, autor o género
function buscarLibro(criterio, valor) {
    for (let i = 0; i < libros.length; i++) {
        if (libros[i][criterio] === valor) {
            console.log(libros[i]); // solo para probar
        }
    }
}

// c) Ordenar libros por título o año usando Bubble Sort

//// Recorremos el array libros y mostramos los libros 
// cuyo campo indicado (criterio) coincide con el valor buscado

function ordenarLibros(criterio) {
    for (let i = 0; i < libros.length - 1; i++) {
        for (let j = 0; j < libros.length - 1 - i; j++) {
            if (criterio === "titulo") {
                if (libros[j].titulo > libros[j + 1].titulo) {
                    let temp = libros[j];
                    libros[j] = libros[j + 1];
                    libros[j + 1] = temp;
                }
            }
            if (criterio === "anio") {
                if (libros[j].anio > libros[j + 1].anio) {
                    let temp = libros[j];
                    libros[j] = libros[j + 1];
                    libros[j + 1] = temp;
                }
            }
        }
    }
    console.log(libros);
}

// d) Borrar un libro por id
function borrarLibro(id) {
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].id === id) {
            libros.splice(i, 1);
            console.log(`Libro con id ${id} eliminado.`);
            break;
        }
    }
    console.log(libros); // solo para probar
}

//vamos a probar las funciones

agregarLibro(4, "Orgullo y prejuicio", "Jane Austen", 1813, "Romance");

buscarLibro("autor", "Jane Austen");

ordenarLibros("anio");

borrarLibro(2);

//3. Gestión de Usuarios
//a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo
//usuario al array usuarios.
//b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array
//completo de usuarios
//c) Crear una función buscarUsuario(email) que devuelva la información de un usuario
//dado su email.
//d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario
//seleccionado


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

//4. Sistema de Préstamos
//a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no
//disponible y lo agregue a la lista de libros prestados del usuario.
//b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como
//disponible y lo elimine de la lista de libros prestados del usuario

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

//5. Reportes
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

//6. Identificación Avanzada de libros
//a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre
//todos los libros cuyo título contiene más de una palabra (no títulos que contengan
//números ni otros caracteres).
//b) La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola

function librosConPalabrasEnTitulo() {
    // 1. Creamos un array vacío para guardar los títulos válidos
    let resultado = [];

    // 2. Uso un for para recorrer el array de libros.
    // La variable i empieza en 0 y va aumentando de uno en uno.
    // libros.length nos indica cuántos libros hay, y se usa para que el ciclo se repita solo esa cantidad de veces.
    for (let i = 0; i < libros.length; i++) {

        // 3. Guardamos el título del libro actual, usamos trim() para eliminar espacios al inicio y al final que puedan existir y que no afecte la verificación
        let titulo = libros[i].titulo.trim();

        // 4. Verificamos si tiene más de una palabra verificando espacios con split
        let palabras = titulo.split(" ");
        let masDeUnaPalabra = palabras.length > 1;

        // 5. Verificamos si tiene números o caracteres especiales
        let tieneCaracterInvalido = false;

        // Letras válidas (incluimos mayúsculas, minúsculas, acentos y ñ + espacio pero excluimos caracteres especiales y números)
        let caracteresValidos = "abcdefghijklmnñopqrstuvwxyzáéíóúABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚ ";

        for (let j = 0; j < titulo.length; j++) {
            if (!caracteresValidos.includes(titulo[j])) {
                tieneCaracterInvalido = true;
            }
        }

        // 6. Solo agregamos si cumple ambas condiciones
        if (masDeUnaPalabra && !tieneCaracterInvalido) {
            resultado.push(titulo);
        }
    }

    //// 7. Mostramos y devolvemos el resultado
    console.log(resultado);
    return resultado;
}

// Llamamos a la función para ver los resultados y asi ver si nuestro código funciona correctamente 

librosConPalabrasEnTitulo();

//7. Cálculos Estadísticos
//a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular
//y mostrar:
//✔ Promedio de años de publicación de los libros.
//✔ Año de publicación más frecuente.
//✔ Diferencia en años entre el libro más antiguo y el más nuevo.

// Ingresamos la librería:
const prompt = require("prompt-sync")();

//Creamos la función principal que realiza los cálculos:
function calcularEstadisticas() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de libros: ")); //Usamos parseInt para convertir el valor el un número entero. El resultado se guarda en variable "cantidad".
    let anios = []; //Se crea un array vacio, donde se guardarán los años de publicación.

    for (let i = 0; i < cantidad; i++) { //Usamos el bucle "for", repitiéndose tantas veces como libros haya.
        let anio = parseInt(prompt("Ingrese el año del libro: "));
        anios.push(anio); //Agregamos el año ingresado al array "anios" creado anteriormente.
    }

    //CÁLCULO DEL PROMEDIO, usando math
    let suma = 0;
    for (let i = 0; i < anios.length; i++) {
        suma += anios[i]; //Lo usamos para acumular valores del array.
    }
    let promedio = Math.round(suma / anios.length);//Dividimos la suma por la cantidad de libros. Usamos "Math.round" para redondear el promedio.

    //AÑO MÁS FRECUENTE
    let anioFrecuente = anios[0];
    let maxFrecuencia = 0; //Guarda la mayor cantidad de repeticiones

    for (let i = 0; i < anios.length; i++) { //Recorre cada año.

        let contador = 0; //Cuenta cuántas veces aparece ese año.

        for (let j = 0; j < anios.length; j++) {
            if (anios[i] === anios[j]) {
                contador++; //Si los años son iguales, aumenta el contador.
            }
        }

        // Math.max para comparar frecuencias
        let nuevaMax = Math.max(contador, maxFrecuencia);

        if (nuevaMax !== maxFrecuencia) { //Si se encontró una frecuencia mayor, se actualiza maxFrecuencia y se guarda como año más frecuente.
            maxFrecuencia = nuevaMax;
            anioFrecuente = anios[i];
        }
    }

    //DIFERENCIA ENTRE EL MÁS ANTIGUO Y EL MÁS NUEVO
    let anioMasAntiguo = Math.min(...anios); //Obtenemos el año más antiguo...
    let anioMasNuevo = Math.max(...anios); //... el más nuevo.

    let diferencia = Math.abs(anioMasNuevo - anioMasAntiguo); //Resta ambos y Math.abs asegura que el resultado sea positivo.

    //Mostramos los resultados
    console.log("RESULTADOS ESTADÍSTICOS: ");
    console.log("Promedio de años de publicación de los libros:", promedio);
    console.log("Anio de publicación más frecuente:", anioFrecuente);
    console.log("Diferencia entre el libro más antiguo y el más nuevo:", diferencia);

}

calcularEstadisticas(); //Ejecutamos el programa.

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

//9. Interfaz de Usuario por Consola
//a) Implementar una función menuPrincipal() que muestre un menú de opciones al
//usuario y permita interactuar con el sistema utilizando prompt().
//b) El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar
//estructuras de control (if, switch, ciclos) para manejar la lógica

//Comenzamos la función "menuPrincipal":
function menuPrincipal() {

    let opcion = ""; //Guardamos la opción elegida por el usuario.

    while (opcion !== "5") { //Repetimos el menú hasta que el usuario elija salir.
        console.log("---MENÚ PRINCIPAL---"); //Mostramos las opciones disponibles.
        console.log("1. Mostrar mensaje.");
        console.log("2. Mostrar cuántas opciones disponibles hay."); //Aquí seria del 1 al 5.
        console.log("3. Contacto.");
        console.log("4. Hablar con un  representante.");
        console.log("5. Salir. ")

        opcion = prompt("Ingrese una opción: "); //Pedimos al usuario que elija una de las opciones.

        if (opcion === "") { //Si el usuario no escribe nada...
            console.log("Debe ingresar una opción."); //...Le decimos que ingrese alguna opción. 
        } else {
            switch (opcion) { //Usamos "switch" para evaluar la opción ingresada
                case "1":
                    console.log("¡Hola!, este es un menú por consola. Elige una opción para poder ayudarte."); //Mostramos un mensaje simple para la opción 1.
                    break;
                case "2":
                    for (let i = 1; i <= 5; i++) { //Aquí usamos un ciclo "for" para mostrar los números.
                        console.log(i);
                    }
                    break;
                case "3":
                    console.log("Bien, aquí tienes el número de la compañía: 123456789. Estamos disponibles de 8am a 5pm, de lunes a viernes.");
                    break;
                case "4":
                    console.log("Para hablar con un representante, debemos ponerle en espera unos minutos y alguien le atenderá a la brevedad para resolver cualquier consulta.");
                    break;
                case "5":
                    console.log("Saliendo del programa...") //Mostramos el mensaje de salida y el "while" termina.
                    break;
                default:
                    console.log("Opción incorrecta."); //Esta opción solo se ejecuta si la opción elegida no es válida.
            }
        }
    }
} //En síntesis, el menú se implementa con un ciclo "While", se valida lo ingresado con el "if" y se controlan las opciones con el "Switch".

menuPrincipal();