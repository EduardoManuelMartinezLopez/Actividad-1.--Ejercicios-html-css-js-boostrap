function procesarNumeros() {
    // 1. Capturar el valor del cuadro de texto como una cadena completa
    let cadenaEntrada = document.getElementById('entradaNumeros').value;

    // 2. Validación inicial: Comprobar que el campo no esté completamente vacío
    if (cadenaEntrada.trim() === "") {
        Swal.fire({
            title: 'Campo vacío',
            text: 'Por favor, introduce una serie de números separados por comas.',
            icon: 'error',
            confirmButtonText: 'Entendido'
        });
        limpiarCamposResultado();
        return;
    }

    // 3. Convertir el texto en un arreglo de subcadenas usando la coma como separador
    let arregloCadenas = cadenaEntrada.split(",");

    // 4. Convertir cada elemento de texto del arreglo a un número real y limpiar espacios libres
    let arregloNumeros = arregloCadenas.map(function(elemento) {
        return Number(elemento.trim());
    });

    // 5. Validación rigurosa: Verificar si alguno de los datos procesados no es un número válido (NaN)
    // El método .some() devuelve true si al menos un elemento cumple con la condición dada
    let contieneErrores = arregloNumeros.some(isNaN);

    if (contieneErrores || arregloNumeros.length === 0) {
        Swal.fire({
            title: 'Formato incorrecto',
            text: 'Asegúrate de ingresar únicamente números válidos separados por comas.',
            icon: 'warning',
            confirmButtonText: 'Verificar'
        });
        limpiarCamposResultado();
        return;
    }

    // 6. Determinar el Número Mayor y Menor usando Math junto con el Operador Spread (...)
    let mayor = Math.max(...arregloNumeros);
    let menor = Math.min(...arregloNumeros);

    // 7. Calcular la suma total acumulada mediante el método reduce()
    let sumaTotal = arregloNumeros.reduce(function(acumulador, valorActual) {
        return acumulador + valorActual;
    }, 0);

    // 8. Obtener el promedio dividiendo el total acumulado entre la longitud del arreglo
    let promedioFinal = sumaTotal / arregloNumeros.length;

    // 9. Imprimir los resultados en las cajas de texto de sólo lectura
    document.getElementById('numMayor').value = mayor;
    document.getElementById('numMenor').value = menor;
    
    // Mostramos el promedio redondeado a un máximo de 2 decimales si es necesario
    document.getElementById('promedio').value = promedioFinal.toFixed(2);
}

// Función auxiliar para limpiar los outputs en caso de errores de validación
function limpiarCamposResultado() {
    document.getElementById('numMayor').value = "";
    document.getElementById('numMenor').value = "";
    document.getElementById('promedio').value = "";
}