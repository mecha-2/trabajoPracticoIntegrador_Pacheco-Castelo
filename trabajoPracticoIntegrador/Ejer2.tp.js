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

//Vamos con algunos ejemplos paraa probar luego nuestro codigo

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
