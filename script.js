console.log("Conexión con js establecida...");

/* Ejer: 1. Edad para votar
Solicita la edad del usuario mediante prompt().
Muestra con alerta() si puede votar
(18 años o más) o no. */

function edadVotar() {
    let edad = parseInt(prompt("Ingrese su Edad: ")); // Input  conversion string a número

    // condición if - else if - else
    if (edad >= 18) {
        alert("Su edad " + edad + " aprobada para votar.");
    } else if (edad >= 0 && edad < 18) { // && compuerta AND
        alert("Su edad " + edad + " no esta aprobada para votar.");
    } else {
        alert("Ingrese un valor valido");
    }
};

/* Ejer: 2. Pide una contraseña con prompt().
Si es igual a "1234", muestra un mensaje de acceso permitido. 
En caso contrario, muestra acceso denegado. */

function validarPassword() {
    let clave = "1234";
    let pass = prompt("Ingresar su contraseña");
    // Condición estructura if - else
    if (pass == clave) {
        alert("Acceso Permitido...");
    } else {
        alert("Acceso Denegado");
    }
}

/* Ejer: 3. Pide un número por prompt(). 
Evalúa si el número es par o impar y 
muestra el resultado con alert(). */

function evaluarNum() {
    let num = parseInt(prompt("Colocar un numero"));
    if (num % 2 == 0) {
        alert("Es par");
    } else {
        alert("No es par");
    }
}

/* Ejer: 4. Solicita la temperatura actual. Si es mayor o igual 
a 30, muestra “Hace calor”, de lo contrario muestra 
“Clima agradable”. */

function temperaturaAmbiental() {
    let temperatura = parseInt(prompt("Ingresar Temperatura"));
    if (temperatura >= 30 && temperatura <= 50) {
        alert("Hace calor");
    } else if (temperatura >= 15 && temperatura < 30) {
        alert("Agradable");
    } else if (temperatura >= -5 && temperatura <= 15) {
        alert("Hace frio");
    } else {
        alert("Ingrese un valor válido");
    }
};

/* Ejer: 5. Solicita dos números al usuario. 
Compara ambos y muestra cuál es mayor o si son iguales. */

function compararNumeros() {
    let num1 = parseInt(prompt("Ingresar primer numero"));
    let num2 = parseInt(prompt("Ingresar segundo numero"));
    if (num1 < num2) {
        alert("el número " + num1 + " es menor que " + num2);
    } else if (num1 == num2) {
        alert("el número " + num1 + " es menor que " + num2);
    } else {
        alert("el número " + num1 + " es mayor que " + num2);
    }
};

/* Ejer: 6. Pide una nota entre 1 y 7. 
Si es 4 o más, muestra “Aprobado”, si es menor, 
muestra “Reprobado”. */

function note() {
    let ingresa = parseInt(prompt("Ingresa tu nota"))
    if (ingresa < 4) {
        alert("desaprobado");
    } else if (ingresa >= 4 && ingresar <= 7) {
        alert("aprobado");
    } else {
        alert("por favor, ingresar valor valido");
    }
}

/* Ejer: 7. Pide un nombre de usuario.
Si el valor ingresado es "admin", muestra “Bienvenido, administrador”. 
Si no, muestra “Usuario no reconocido”. */

function usuarioAdmin() {
    let name = "Admin";
    let usuario = prompt("Ingrese usuario");
    if (usuario == "admin") {
        alert("Bienvenido, administrador");
    } else {
        alert("Usuario no reconocido");
    }
}



/* Ejer: 8. Pide una palabra al usuario.
 Verifica si empieza con la letra “A” 
 mayúscula y muestra un mensaje acorde. */

function palabraMayuscula() {
    let letra = prompt("Ingresar palabra");
    if (letra[0] == letraA) {
        alert("la palabra comienza con la mayuscula");
    } else {
        alert("la palabra no comienza con la mayuscula");
    }
}

/* Ejer: 9. Precio con descuento
 Solicita el precio de un producto. 
 Si el precio es mayor a 10000, muestra que aplica descuento. 
 Si no, indica precio normal. */

function precio() { // Creación de la función
    // Añadir un porcentaje de descuento e IVA y mostrar.
    let iva = 0.19;
    let descuento = parseFloat(prompt("Ingrese el valor de descuento: Ejemplo 20"));
    descuento /= 100; // Operación para llevar a decimal
    let precio = parseFloat(promt("Ingresar el precio del producto"));
    if (precio > 10000) {
        alert(`el valor ingresado fue: ${precio}\n
            IVA: ${precio * iva}\n
            precio Total:${precio * 1.19}\n
            `);
    } else {
        alert("precio normal");
    }
}

/* Ejer: 10. Verificar si una persona puede conducir
 Solicita la edad del usuario y si tiene licencia (por ejemplo, respondiendo "sí" o "no"). 
 Si tiene 18 o más y respondió que tiene licencia, muestra “Puede conducir”. 
 Si no, muestra “No puede conducir”. */

function licenciaEdad() {
    let edad = parseInt(prompt("Ingrese su Edad: "));
    if (edad >= 18 && edad < 100) {

        let licencia = prompt("Indica si tienes licencia si/no");
        if (licencia == "si") {
            alert("Usted puede conducir");
        } else if (licencia == "no") {
            alert("No puede conducir");
        }
    } else {
        alert("Ingrese valores validos");
    }
}