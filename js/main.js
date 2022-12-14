// ========= MENSAJE DE BIENVENIDA Y VALIDACIÓN DE DATOS PERSONALES ========= //

//Pedimos al usuario que ingrese sus datos
let userName = ""
let userLastName = ""
let datosCorrectos = true

//Declaramos la funcion para ejecutar el saludo
const pedirDatos = () => {

    do {
        userName = prompt("Por favor, ingrese su nombre:")
        userLastName = prompt("Por favor, ingrese su apellido:")

        if (userName !== "" && userLastName !== "" && typeof userName !== "number" && typeof userLastName !== "number") {
            alert("¡Hola " + userName + " " + userLastName + "! \nBienvenido/a a mi tienda online de productos Apple, donde vas a encontrar los mejores precios del mercado con hasta 12 meses de garantía. Y para tu tranquilidad, contamos con dispositivos 100% ORIGINALES, exportados directamente desde USA hasta la puerta de tu casa :)")
            datosCorrectos = false

        } else {
            alert("Error: revisa tus datos y completa los campos solicitados correctamente")
        }
    } while (datosCorrectos);
}

//Llamamos a la función de pedir datos
pedirDatos(userName, userLastName)




// utilizamos SORT para ordenar el precio de los productos//
const preciosOrdenados = () => {
    products.sort((a, b) => a.price - b.price) // De menor a mayor
    listaPrecios();
};
const listaPrecios = (preciosOrdenados) => {
    const listaOrdenada = products.map((product) => {
        return "- " + product.name + " $" + product.price
    })
    alert("Acá vas a encontrar los productos que estás buscando, te los mostramos a continuación:" + "\n\n"+listaOrdenada.join("\n"));

    //Luego de ordenar los precios, invocamos a la función que contiene el simulador de compra
    simuladorCompra(listaOrdenada)
};


// Si el usuario decide no ordenar los precios, se mostrará la lista en el orden en que se encuentren en el array de objetos "stock"
const preciosNoOrdenados = (preciosSinOrdenar) => {
    listaPrecios();
};



// ========= MINI-SIMULADOR DE COMPRAS ========= //

//Declaramos la funcion que ejecutará el simulador
const simuladorCompra = (listaCompra) => {

    //Inicializamos las variables
    let nombreProducto = "";
    let cantidadProducto = 0;
    let precioTotal = 0;
    let cantidadTotal = 0;

    let seguirComprando;

    do {
        nombreProducto = prompt("¿Qué productos desea comprar?" + "\n\n"+listaCompra.join('\n'));
        cantidadProducto = parseInt(prompt("¿Cuántos desea adquirir?"));

        const product = products.find(product => product.name.toLowerCase() === nombreProducto.toLowerCase())


         //Calculamos precio total de la compra
        precioTotal += cantidadProducto * product.price

        //Calculamos cantidad de productos comprados
        cantidadTotal += cantidadProducto

        //Éste confirm determinará si el ciclo volverá a iniciarse o se dará por terminado dependiendo la elección del usuario 
        seguirComprando = confirm("¿Desea seguir comprando?")

    } while (seguirComprando)



        //Aplicamos descuento si se cumple la condición
        const precioDescuento = agregarDescuento(precioTotal)


        //Saludo final, agradecimiento y cierre del ciclo
        if (precioTotal >= 4000) {
            alert("¡Muchas gracias por elegirnos!\nCon tu compra cumplís con los requisitos para que se te aplique un descuento del ¡15% OFF!\nCompraste un total de " + cantidadTotal + " productos a un precio de $" + precioTotal + ".\nAunque gracias al descuento que obtuviste, te queda un total a pagar de $" + precioDescuento + "\nEsperamos que lo disfrutes y vuelvas pronto :)")
        } else {
            alert("¡Muchas gracias por elegirnos!\nCompraste un total de " + cantidadTotal + " producto/s a un precio de $" + precioTotal + ".\nEsperamos que lo disfrutes y vuelvas pronto :)")

        }

    }

    //Declaramos la función para aplicar el descuento en caso de que se cumplan las condiciones
    const agregarDescuento = (precioTotal) => {
        let precioDescuento = 0

        if (precioTotal >= 4000) {
            precioDescuento = precioTotal * 0.85
            return precioDescuento
        } else {
            return precioTotal
        }
}


    const iniciarCompra = () => {
        const ordenarLista = confirm("Antes de iniciar con su compra... ¿Quiere ordenar los productos desde el menor al mayor precio?\nÉsto te va a facilitar ver los productos que desees adquirir con sus precios en orden creciente.")

        if (ordenarLista) {
            preciosOrdenados()
        } else {
            preciosNoOrdenados()
        }
    };


    iniciarCompra();