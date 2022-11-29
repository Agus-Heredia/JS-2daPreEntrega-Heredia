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

        if (userName != "" && userLastName != "") {
            alert("¡Hola " + userName + " " + userLastName + "! \nBienvenido/a a mi tienda online de productos Apple, donde vas a encontrar los mejores precios del mercado con hasta 12 meses de garantía. Y para tu tranquilidad, contamos con dispositivos 100% ORIGINALES, exportados directamente desde USA hasta la puerta de tu casa :)")
            datosCorrectos = false

        } else {
            alert("Error: revisa tus datos y completa los campos solicitados correctamente")
        }

    } while (datosCorrectos);
}

//Llamamos a la función
pedirDatos(userName, userLastName)






// ========= MINI-SIMULADOR DE COMPRAS ========= //


//Declaramos la funcion que ejecutará el simulador
const simuladorCompra = () => {

    //Inicializamos las variables
    let producto = " "
    let precio = 0
    let cantidad = 0
    let precioTotal = 0
    let cantidadTotal = 0

    let continuarComprando = false

    do {
        producto = prompt("¿Qué producto desea comprar? Porfavor, seleccionalo con su letra correspondiente: \n a) iPhone: $1000\n b) iPad: $1500 \n c) Airpods: $800 \n d) Mac: $2000 \n\n(Recordá que si tu compra supera los $3000, tenés un ¡15%! de descuento en el total de tu compra)").toLowerCase()

        cantidad = parseInt(prompt("¿Cuántos desea adquirir?"))

        switch (producto) {
            case "a":
                precio = 1000
                break;

            case "b":
                precio = 150
                break;

            case "c":
                precio = 800
                break;

            case "d":
                precio = 2000
                break;

            default:
                alert("¡Lo sentimos! no disponemos de ese producto.")
                precio = 0
                cantidad = 0
                break;


        }

        //Calculamos precio total de la compra
        precioTotal += cantidad * precio

        //Calculamos cantidad de productos comprados
        cantidadTotal += cantidad


        //Éste confirm determinará si el ciclo volverá a iniciarse o se dará por terminado dependiendo la elección del usuario 
        continuarComprando = confirm("¿Desea seguir comprando?")

    } while (continuarComprando)



    //Aplicamos descuento si se cumple la condición
    const precioDescuento = agregarDescuento(precioTotal)


    //Saludo final, agradecimiento y cierre del ciclo
    if (precioTotal >= 3000) {
        alert("¡Muchas gracias por elegirnos!\nCon tu compra cumplís con los requisitos para que se te aplique un descuento del ¡15% OFF!\nCompraste un total de " + cantidadTotal + " productos a un precio de $" + precioTotal + ".\nAunque gracias al descuento que obtuviste, te queda un total a pagar de $" + precioDescuento + "\nEsperamos que lo disfrutes y vuelvas pronto :)")
    } else {
        alert("¡Muchas gracias por elegirnos!\nCompraste un total de " + cantidadTotal + " producto/s a un precio de $" + precioTotal + ".\nEsperamos que lo disfrutes y vuelvas pronto :)")

    }




}

//Declaramos la función para aplicar el descuento en caso de que se cumplan las condiciones
const agregarDescuento = (precioTotal) => {
    let precioDescuento = 0

    if (precioTotal >= 3000) {
        precioDescuento = precioTotal * 0.85
        return precioDescuento
    } else {
        return precioTotal
    }

}

//Llamamos a la función
simuladorCompra()