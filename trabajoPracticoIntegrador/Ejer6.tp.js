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
