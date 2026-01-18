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

