//6. Identificación Avanzada de libros
//a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre
//todos los libros cuyo título contiene más de una palabra (no títulos que contengan
//números ni otros caracteres).
//b) La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola



//Solo para probar luego nuestro codigo declaramos una variable llamada libros con algunos libros de ejemplo

let libros = [
  { titulo: "It" },
  { titulo: "Emma" },
  { titulo: "Cien años de soledad" },
  { titulo: "Orgullo y prejuicio" }
];




function librosConPalabrasEnTitulo() {
  // 1. Creamos un array vacío para guardar los títulos que cumplan la condición
  let resultado = [];

  // 2. Recorremos uno por uno los libros con for 
  for (let i = 0; i < libros.length; i++) {

    // 3. Guardamos el título del libro actual en una variable
    let titulo = libros[i].titulo;

    // 4. Verificamos si el título tiene más de una palabra
    // split(" ") separa el texto por espacios
    // length cuenta cantidad de palabras
    if (titulo.split(" ").length > 1) {

      // 5. Si cumple la condición, agregamos el título al array resultado
      resultado.push(titulo);
    }
  }

  // 6. Mostramos el resultado en consola para comprobar que funciona
  console.log(resultado);

  // 7. Devolvemos el array con los títulos encontrados
  return resultado;
}

librosConPalabrasEnTitulo();
    //solo para probar nuestro código 