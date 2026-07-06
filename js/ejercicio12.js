<<<<<<< HEAD
function convertirDivisa() {
    // 1. Capturar el valor del input de pesos
    let pesosInput = document.getElementById('pesos').value;

    // 2. Convertir el texto a un número para poder evaluarlo
    let MXN = parseFloat(pesosInput);

    // 3. Validaciones: Que no esté vacío, que sea número, y que sea POSITIVO (> 0)
    if (pesosInput.trim() === "" || isNaN(MXN) || MXN <= 0) {
        // Alerta elegante con SweetAlert2 indicando el error exacto
        Swal.fire({
            title: '¡Valor incorrecto!',
            text: 'Por favor, ingresa una cantidad numérica mayor a cero.',
            icon: 'warning',
            confirmButtonText: 'Corregir'
        });
        
        // Limpiamos la caja de resultado por si había datos viejos
        document.getElementById('dolares').value = "";
        return; // Detiene la ejecución
    }

    // 4. Definir la tasa de cambio dada en el problema
    const TASA_DE_CAMBIO = 0.055;

    // 5. Aplicar la fórmula: USD = MXN * tasa_de_cambio
    let USD = MXN * TASA_DE_CAMBIO;

    // 6. Mostrar el resultado en el campo readonly con 2 decimales (formato de moneda)
    document.getElementById('dolares').value = USD.toFixed(2);
=======
function convertirDivisa() {
    // 1. Capturar el valor del input de pesos
    let pesosInput = document.getElementById('pesos').value;

    // 2. Convertir el texto a un número para poder evaluarlo
    let MXN = parseFloat(pesosInput);

    // 3. Validaciones: Que no esté vacío, que sea número, y que sea POSITIVO (> 0)
    if (pesosInput.trim() === "" || isNaN(MXN) || MXN <= 0) {
        // Alerta elegante con SweetAlert2 indicando el error exacto
        Swal.fire({
            title: '¡Valor incorrecto!',
            text: 'Por favor, ingresa una cantidad numérica mayor a cero.',
            icon: 'warning',
            confirmButtonText: 'Corregir'
        });
        
        // Limpiamos la caja de resultado por si había datos viejos
        document.getElementById('dolares').value = "";
        return; // Detiene la ejecución
    }

    // 4. Definir la tasa de cambio dada en el problema
    const TASA_DE_CAMBIO = 0.055;

    // 5. Aplicar la fórmula: USD = MXN * tasa_de_cambio
    let USD = MXN * TASA_DE_CAMBIO;

    // 6. Mostrar el resultado en el campo readonly con 2 decimales (formato de moneda)
    document.getElementById('dolares').value = USD.toFixed(2);
>>>>>>> a559d1e5e7ff36c2bd2500d7aa05b6f2b99c3e23
}