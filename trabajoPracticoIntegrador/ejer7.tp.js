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