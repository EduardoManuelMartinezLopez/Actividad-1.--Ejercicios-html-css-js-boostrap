<<<<<<< HEAD
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
=======
/**
 * DECLARACIÓN DE OPERACIONES MATEMÁTICAS INDEPENDIENTES (FUNCIONES FLECHA)
 * * Sintaxis compacta: Al ser funciones de una sola línea que ejecutan un retorno directo,
 * se omiten las llaves '{}' y la palabra reservada 'return'. El retorno es implícito.
 */
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

/**
 * Función flecha para la división.
 * Utiliza un operador ternario para evaluar una condición en una sola línea:
 * Si el divisor (b) es diferente de cero, ejecuta la división; de lo contrario, retorna null.
 */
const dividir = (a, b) => b !== 0 ? a / b : null;


/**
 * FUNCIÓN PRINCIPAL COORDINADORA (FUNCIÓN FLECHA GLOBAL)
 * Se encarga de la captura de datos, la validación estricta y la invocación de la operación.
 * * @param {string} tipoOperacion - El nombre de la operación matemática solicitada.
 */
const calcularOperacion = (tipoOperacion) => {
    
    // 1. Captura de los valores crudos en formato string desde los inputs del DOM
    let entrada1 = document.getElementById('numero1').value;
    let entrada2 = document.getElementById('numero2').value;

    // 2. Validación de campos vacíos: Comprueba si tras limpiar espacios (.trim()) el campo carece de texto
    if (entrada1.trim() === "" || entrada2.trim() === "") {
        Swal.fire({
            title: 'Campos incompletos',
            text: 'Por favor, ingrese valores numéricos en ambos campos de entrada.',
            icon: 'error',
            confirmButtonText: 'Entendido'
        });
        document.getElementById('resultado').value = ""; // Limpia el output anterior si existe
        return; // Cláusula de escape: Termina la ejecución de la función inmediatamente
    }

    // 3. Conversión explícita de tipos de datos (Casting) de String a Float (Número Decimal)
    let num1 = parseFloat(entrada1);
    let num2 = parseFloat(entrada2);

    // 4. Validación de tipo numérico: Verifica si la conversión falló produciendo un NaN (Not a Number)
    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            title: 'Datos inválidos',
            text: 'Los valores ingresados deben ser exclusivamente de carácter numérico.',
            icon: 'warning',
            confirmButtonText: 'Corregir'
        });
        document.getElementById('resultado').value = ""; // Limpia el campo de salida
        return; // Interrumpe el flujo debido a datos corruptos
    }

    // 5. Variable mutable encargada de almacenar temporalmente el resultado de la operación
    let calculoFinal = 0;

    // 6. Estructura de control Switch para derivar el flujo según el botón presionado
    switch (tipoOperacion) {
        case 'suma':
            // Invoca la función flecha 'sumar' pasando los dos números validados como parámetros
            calculoFinal = sumar(num1, num2);
            break;
            
        case 'resta':
            // Invoca la función flecha 'restar'
            calculoFinal = restar(num1, num2);
            break;
            
        case 'multiplicacion':
            // Invoca la función flecha 'multiplicar'
            calculoFinal = multiplicar(num1, num2);
            break;
            
        case 'division':
            // Invoca la función flecha 'dividir'
            let resultadoDivision = dividir(num1, num2);
            
            // Evalúa si la función retornó null (lo que significa que se intentó dividir por cero)
            if (resultadoDivision === null) {
                Swal.fire({
                    title: 'Error matemático',
                    text: 'La división por cero no está definida en los números reales.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
                document.getElementById('resultado').value = "Error aritmético";
                return; // Aborta el pintado del resultado debido a la indeterminación
            }
            
            // Si la división fue exitosa, asigna el valor devuelto a la variable de cálculo
            calculoFinal = resultadoDivision;
            break;
            
        default:
            // Caso de seguridad por si se altera el parámetro de la función de forma externa
            calculoFinal = "Operación no reconocida";
    }

    // 7. Renderizado: Imprime el resultado en el input de solo lectura
    // Se limita el número de decimales a un máximo de 4 en caso de divisiones o números continuos
    if (typeof calculoFinal === 'number') {
        // Number.isInteger comprueba si es entero para no agregar decimales innecesarios (.0000)
        document.getElementById('resultado').value = Number.isInteger(calculoFinal) ? calculoFinal : calculoFinal.toFixed(4);
    } else {
        document.getElementById('resultado').value = calculoFinal;
    }
>>>>>>> a559d1e5e7ff36c2bd2500d7aa05b6f2b99c3e23
};