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




