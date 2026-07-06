<<<<<<< HEAD
function verificarVoto() {
    // 1. Obtener el texto que el usuario escribió en el campo de edad
    let edadInput = document.getElementById('edad').value;

    // 2. Convertir ese texto en un número entero (ya que las edades son números enteros)
    let edad = parseInt(edadInput);

    // 3. Bloque de Validaciones obligatorias
    // .trim() elimina espacios en blanco. isNaN revisa si no es un número. edad <= 0 asegura que sea positivo.
    if (edadInput.trim() === "" || isNaN(edad) || edad <= 0) {
        Swal.fire({
            title: 'Entrada inválida',
            text: 'Por favor, introduce una edad numérica válida y mayor a cero.',
            icon: 'error',
            confirmButtonText: 'Entendido'
        });
        
        // Limpiamos el campo de resultado si llega a haber un error
        document.getElementById('resultado').value = "";
        return; // Detiene la función para que no intente calcular nada más
    }

    // 4. Lógica de condición (Estructura If / Else)
    if (edad >= 18) {
        // Si cumple la condición de ser mayor o igual a 18
        document.getElementById('resultado').value = "Puedes votar";
    } else {
        // Si no cumple la condición (es menor de 18)
        document.getElementById('resultado').value = "No puedes votar";
    }
=======
function verificarVoto() {
    // 1. Obtener el texto que el usuario escribió en el campo de edad
    let edadInput = document.getElementById('edad').value;

    // 2. Convertir ese texto en un número entero (ya que las edades son números enteros)
    let edad = parseInt(edadInput);

    // 3. Bloque de Validaciones obligatorias
    // .trim() elimina espacios en blanco. isNaN revisa si no es un número. edad <= 0 asegura que sea positivo.
    if (edadInput.trim() === "" || isNaN(edad) || edad <= 0) {
        Swal.fire({
            title: 'Entrada inválida',
            text: 'Por favor, introduce una edad numérica válida y mayor a cero.',
            icon: 'error',
            confirmButtonText: 'Entendido'
        });
        
        // Limpiamos el campo de resultado si llega a haber un error
        document.getElementById('resultado').value = "";
        return; // Detiene la función para que no intente calcular nada más
    }

    // 4. Lógica de condición (Estructura If / Else)
    if (edad >= 18) {
        // Si cumple la condición de ser mayor o igual a 18
        document.getElementById('resultado').value = "Puedes votar";
    } else {
        // Si no cumple la condición (es menor de 18)
        document.getElementById('resultado').value = "No puedes votar";
    }
>>>>>>> a559d1e5e7ff36c2bd2500d7aa05b6f2b99c3e23
}