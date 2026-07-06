// =========================================================
// 1. DEFINICIÓN DE FUNCIONES FLECHA PARA LAS OPERACIONES
// =========================================================
// Se utilizan funciones flecha por su sintaxis concisa. 
// Al tener una sola instrucción, el valor se retorna automáticamente sin usar la palabra "return".

// Se define la función para sumar dos valores
const sumar = (a, b) => a + b;

// Se define la función para restar el segundo valor al primero
const restar = (a, b) => a - b;

// Se define la función para multiplicar ambos valores
const multiplicar = (a, b) => a * b;

// Se define la función para dividir mediante un operador ternario.
// Se verifica que el divisor no sea cero para evitar errores matemáticos. Si es cero, se retorna 'null'.
const dividir = (a, b) => b !== 0 ? a / b : null;


// =========================================================
// 2. FUNCIÓN PRINCIPAL DE CONTROL
// =========================================================
// Esta función se ejecuta mediante el evento onclick de los botones del HTML.
// Recibe como parámetro el tipo de operación seleccionada.
const calcularOperacion = (tipoOperacion) => {
    
    // Se capturan los valores ingresados en los campos de texto del HTML
    let textoCaja1 = document.getElementById('numero1').value;
    let textoCaja2 = document.getElementById('numero2').value;

    // Se validan los datos eliminando los espacios en blanco de los extremos mediante .trim().
    // Si alguno de los campos se encuentra vacío, se notifica y se detiene la ejecución.
    if (textoCaja1.trim() === '' || textoCaja2.trim() === '') {
        // Se invoca una alerta para informar al usuario de los datos faltantes
        Swal.fire({
            title: '¡Faltan datos!',
            text: 'Se requiere ingresar valores en ambos campos.',
            icon: 'warning',
        });
        return; 
    }

    // Se convierten las cadenas de texto capturadas a valores numéricos reales (flotantes)
    let num1 = parseFloat(textoCaja1);
    let num2 = parseFloat(textoCaja2);

    // Se valida que la conversión haya sido exitosa. 
    // Si alguno de los valores no es un número (isNaN), se notifica el error y se detiene el proceso.
    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            title: 'Caracteres inválidos',
            text: 'Por favor, ingrese únicamente valores numéricos.',
            icon: 'error',
        });
        // Se limpia el campo de resultado para no mostrar datos residuales
        document.getElementById('resultado').value = "";
        return; 
    }

    // Se inicializa una variable para almacenar el cálculo final
    let respuestaFinal;

    // Se utiliza una estructura condicional Switch para ejecutar la operación solicitada
    switch (tipoOperacion) {
        case 'suma':
            respuestaFinal = sumar(num1, num2);
            break;
            
        case 'resta':
            respuestaFinal = restar(num1, num2);
            break;
            
        case 'multiplicacion':
            respuestaFinal = multiplicar(num1, num2);
            break;
            
        case 'division':
            // Se ejecuta la división y se almacena temporalmente el resultado
            let resultadoDiv = dividir(num1, num2);
            
            // Se evalúa si el resultado es null (indicando una división entre cero)
            if (resultadoDiv === null) {
                Swal.fire({
                    title: '¡Error!',
                    text: 'Matemáticamente no es posible dividir entre cero.',
                    icon: 'error',
                });
                document.getElementById('resultado').value = "Error aritmético";
                return; 
            }
            // Si el cálculo es válido, se asigna a la variable principal
            respuestaFinal = resultadoDiv;
            break;
    }

    // Se comprueba si la respuesta final es un dato de tipo numérico
    if (typeof respuestaFinal === 'number') {
        // Se evalúa si el número es entero. Si posee decimales, se redondea a un máximo de 4 posiciones.
        document.getElementById('resultado').value = Number.isInteger(respuestaFinal) ? respuestaFinal : respuestaFinal.toFixed(4);
    } else {
        // En caso de que la respuesta sea una cadena de texto, se imprime tal cual
        document.getElementById('resultado').value = respuestaFinal;
    }
};