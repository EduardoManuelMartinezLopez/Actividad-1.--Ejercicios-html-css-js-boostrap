function convertirDistancia() {
    // 1. Capturar el valor del input de kilómetros
    let kmInput = document.getElementById('kilometros').value;

    // 2. Validaciones: Que no esté vacío (trim) y que sea un número (isNaN)
    if (kmInput.trim() === "" || isNaN(kmInput)) {
        // Alerta moderna con SweetAlert2
        Swal.fire({
            title: '¡Dato inválido!',
            text: 'Por favor, ingresa un valor numérico y asegúrate de no dejar el campo vacío.',
            icon: 'error',
            confirmButtonText: 'Entendido'
        });
        
        // Limpiar el campo de resultado por seguridad
        document.getElementById('millas').value = "";
        return; // Detiene la ejecución de la función
    }

    // 3. Convertir el texto a un número decimal
    let K = parseFloat(kmInput);

    // 4. Aplicar la fórmula: M = K * 0.621371
    let M = K * 0.621371;

    // 5. Mostrar el resultado en el campo readonly. 
    // Usamos .toFixed(5) para mostrar 5 decimales, como en el ejemplo (10 -> 6.21371)
    document.getElementById('millas').value = M.toFixed(5);
}