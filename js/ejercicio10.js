function convertir() {
    // 1. Capturar el valor ingresado por el usuario en el input de Celsius
    var celsiusInput = document.getElementById("celsius").value;

    // 2. VALIDACIONES: Asegurar que no esté vacío (eliminando espacios) y que sea numérico
    if (celsiusInput.trim() === "" || isNaN(celsiusInput)) {
        Swal.fire({
    title: '¡Atención!',
    text: 'Por favor, ingrese un número válido en grados Celsius.',
    icon: 'warning',
    confirmButtonText: 'Entendido'
});
        
        // Limpiamos el campo de resultado por si había un cálculo anterior
        document.getElementById("fahrenheit").value = "";
        return; // El 'return' detiene la función aquí para que no intente hacer el cálculo
    }

    // 3. Convertir el texto capturado a un número real (decimal/flotante)
    var C = parseFloat(celsiusInput);

    // 4. Aplicar la fórmula matemática proporcionada: F = (C * 9/5) + 32
    var F = (C * 9 / 5) + 32;

    // 5. Mostrar el resultado en la caja de texto readonly usando '.value'
    // .toFixed(1) sirve para que si da decimales largos, solo muestre 1 decimal.
    document.getElementById("fahrenheit").value = F.toFixed(1) + "°F";
}