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