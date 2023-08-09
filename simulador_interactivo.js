
        // Función flecha
        const calcularCuadrado = num => num * num;

        // Función anónima
        const mostrarResultado = function(resultado) {
            alert(`El resultado es: ${resultado}`);
        };

        // Variable global
        let nombre = "";

        // Prompt para ingresar el nombre
        nombre = prompt("Ingresa tu nombre:");
        alert(`¡Hola, ${nombre}! Bienvenido al simulador interactivo.`);

        // Ciclo con mensajes
        for (let i = 1; i <= 3; i++) {
            const numero = parseFloat(prompt("Ingresa un número:"));
            const cuadrado = calcularCuadrado(numero);
            alert(`El cuadrado de ${numero} es ${cuadrado}.`);
        }

        // Función para sumar dos números
        const sumar = (a, b) => {
            // Variable local
            const suma = a + b;
            return suma;
        };

        // Pedir dos números al usuario
        const num1 = parseFloat(prompt("Ingresa el primer número para sumar:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número para sumar:"));

        // Llamar a la función y mostrar el resultado
        const resultadoSuma = sumar(num1, num2);
        mostrarResultado(resultadoSuma);
    