//Mensaje de Bienvenida
let userName = prompt("Por favor, ingrese su nombre")
let userLastName = prompt("Por favor, ingrese su apellido")

function sayHello(name, lastName) {
    alert("Hola " + name + " " + lastName + "! Bienvenido a mi página web :)")
}

sayHello(userName, userLastName)
