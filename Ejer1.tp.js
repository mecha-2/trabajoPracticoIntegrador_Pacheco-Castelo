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
  {
    id: 1,
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    año: 1813,
    genero: "Romance",
    disponible: true
  },
  {
    id: 2,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    año: 1967,
    genero: "Realismo mágico",
    disponible: false
  },
  {
    id: 3,
    titulo: "Emma",
    autor: "Jane Austen",
    año: 1815,
    genero: "Romance",
    disponible: true
  },
  {
    id: 4,
    titulo: "El amor en los tiempos del cólera",
    autor: "Gabriel García Márquez",
    año: 1985,
    genero: "Romance",
    disponible: false
  },
  {
    id: 5,
    titulo: "Del amor y otros demonios",
    autor: "Gabriel García Márquez",
    año: 1994,
    genero: "Realismo mágico",
    disponible: false
  },
  {
    id: 6,
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    año: 1963,
    genero: "Novela experimental",
    disponible: false
  },
  {
    id: 7,
    titulo: "Mujercitas",
    autor: "Louisa May Alcott",
    año: 1868,
    genero: "Novela costumbrista",
    disponible: true
  },
  {
    id: 8,
    titulo: "Mi planta de naranja lima",
    autor: "José Mauro de Vasconcelos",
    año: 1968,
    genero: "Novela autobiográfica",
    disponible: false
  },
  {
    id: 9,
    titulo: "El sabueso de los Baskerville",
    autor: "Arthur Conan Doyle",
    año: 1901,
    genero: "Novela de misterio",
    disponible: false
  },
  {
    id: 10,
    titulo: "El extraño caso del doctor Jekyll y el señor Hyde",
    autor: "Robert Louis Stevenson",
    año: 1886,
    genero: "Novela gótica",
    disponible: false
  }
];


//Se crea un array de objetos para usuarios, donde cada usuario contiene sus datos personales (id nombre email libros que tiene en su poder
// y un array con los IDs de los libros que tiene prestados.

let usuarios = [
  {
    id: 25,
    nombre: "Carla Vega",
    email: "carla1986@gmail.com",
    librosPrestados: [1, 5]
  },
  {
    id: 30,
    nombre: "Maria Diaz",
    email: "mdiaz16@gmail.com",
    librosPrestados: [3, 9]
  },
  {
    id: 41,
    nombre: "Juana Perez",
    email: "perezja@gmail.com",
    librosPrestados: [10, 4]
  },
  {
    id: 52,
    nombre: "Carolina Veliz",
    email: "velizc@gmail.com",
    librosPrestados: [7]
  },
  {
    id: 63,
    nombre: "Estefania Loreto",
    email: "estefilor5@gmail.com",
    librosPrestados: [2, 6]
  }
];

//El ejercicio no lo pide pero para probar si nuestro codigo funciona bien agregamos

console.log(libros);
console.log(usuarios);  
// para ver los arrays creados en la consola. 

