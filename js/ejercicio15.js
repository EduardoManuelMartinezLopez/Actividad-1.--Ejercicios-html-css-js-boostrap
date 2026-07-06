<<<<<<< HEAD
// 1. Declaración del arreglo global que almacenará los objetos de los estudiantes
let listaEstudiantes = [];

function agregarEstudiante() {
    // Captura de valores de los inputs correspondientes
    let txtNombre = document.getElementById('nombreEstudiante').value;
    let txtCalificacion = document.getElementById('calificacionEstudiante').value;

    // Conversión de la calificación a un valor numérico de punto flotante
    let numCalificacion = parseFloat(txtCalificacion);

    // 2. Bloque de Validaciones básicas de entrada
    if (txtNombre.trim() === "" || txtCalificacion.trim() === "") {
        Swal.fire({
            title: 'Campos incompletos',
            text: 'Por favor, rellene tanto el nombre como la calificación del estudiante.',
            icon: 'error',
            confirmButtonText: 'Entendido'
        });
        return;
    }

    if (isNaN(numCalificacion) || numCalificacion < 0 || numCalificacion > 100) {
        Swal.fire({
            title: 'Calificación inválida',
            text: 'Ingrese un valor numérico real comprendido en el rango de 0 a 100.',
            icon: 'warning',
            confirmButtonText: 'Corregir'
        });
        return;
    }

    // 3. Estructuración del Objeto y almacenamiento en el Arreglo
    // Creamos una entidad con dos propiedades: clave y valor
    let nuevoEstudiante = {
        nombre: txtNombre.trim(),
        calificacion: numCalificacion
    };

    // Agregamos el objeto al final del arreglo global utilizando .push()
    listaEstudiantes.push(nuevoEstudiante);

    // Actualizamos el contador visual en la interfaz de usuario
    document.getElementById('contador').textContent = listaEstudiantes.length;

    // Confirmación de éxito al usuario
    Swal.fire({
        title: 'Registro exitoso',
        text: 'El estudiante ha sido añadido correctamente a la base de datos temporal.',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
    });

    // Limpieza de campos de captura para agilizar el siguiente registro
    document.getElementById('nombreEstudiante').value = "";
    document.getElementById('calificacionEstudiante').value = "";
}

function calcularEstadisticas() {
    // 4. Validación: Impedir cálculos si no existen datos suficientes en el arreglo
    if (listaEstudiantes.length === 0) {
        Swal.fire({
            title: 'Sin datos',
            text: 'No es posible realizar cálculos estadísticos debido a que la lista está vacía.',
            icon: 'info',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    // 5. Procesamiento del Promedio General mediante .reduce()
    let sumaCalificaciones = listaEstudiantes.reduce(function(acumulador, estudianteActual) {
        return acumulador + estudianteActual.calificacion;
    }, 0);
    
    let promedioGral = sumaCalificaciones / listaEstudiantes.length;

    // 6. Obtención de límites numéricos (Máximos y Mínimos)
    // Extraemos únicamente las calificaciones a un arreglo plano temporal usando .map()
    let arregloCalificaciones = listaEstudiantes.map(function(e) {
        return e.calificacion;
    });

    let maxCalificacion = Math.max(...arregloCalificaciones);
    let minCalificacion = Math.min(...arregloCalificaciones);

    // 7. Localización de los objetos correspondientes a las notas extremas
    // El método .find() devuelve el primer objeto que cumpla exactamente con la condición lógica
    let alumnoMaximo = listaEstudiantes.find(function(e) {
        return e.calificacion === maxCalificacion;
    });

    let alumnoMinimo = listaEstudiantes.find(function(e) {
        return e.calificacion === minCalificacion;
    });

    // 8. Despliegue formal de datos calculados en los inputs con propiedad readonly
    document.getElementById('promedioGrupo').value = promedioGral.toFixed(2);
    document.getElementById('mejorEstudiante').value = alumnoMaximo.nombre + " (" + maxCalificacion + ")";
    document.getElementById('peorEstudiante').value = alumnoMinimo.nombre + " (" + minCalificacion + ")";
=======
// 1. Declaración del arreglo global que almacenará los objetos de los estudiantes
let listaEstudiantes = [];

function agregarEstudiante() {
    // Captura de valores de los inputs correspondientes
    let txtNombre = document.getElementById('nombreEstudiante').value;
    let txtCalificacion = document.getElementById('calificacionEstudiante').value;

    // Conversión de la calificación a un valor numérico de punto flotante
    let numCalificacion = parseFloat(txtCalificacion);

    // 2. Bloque de Validaciones básicas de entrada
    if (txtNombre.trim() === "" || txtCalificacion.trim() === "") {
        Swal.fire({
            title: 'Campos incompletos',
            text: 'Por favor, rellene tanto el nombre como la calificación del estudiante.',
            icon: 'error',
            confirmButtonText: 'Entendido'
        });
        return;
    }

    if (isNaN(numCalificacion) || numCalificacion < 0 || numCalificacion > 100) {
        Swal.fire({
            title: 'Calificación inválida',
            text: 'Ingrese un valor numérico real comprendido en el rango de 0 a 100.',
            icon: 'warning',
            confirmButtonText: 'Corregir'
        });
        return;
    }

    // 3. Estructuración del Objeto y almacenamiento en el Arreglo
    // Creamos una entidad con dos propiedades: clave y valor
    let nuevoEstudiante = {
        nombre: txtNombre.trim(),
        calificacion: numCalificacion
    };

    // Agregamos el objeto al final del arreglo global utilizando .push()
    listaEstudiantes.push(nuevoEstudiante);

    // Actualizamos el contador visual en la interfaz de usuario
    document.getElementById('contador').textContent = listaEstudiantes.length;

    // Confirmación de éxito al usuario
    Swal.fire({
        title: 'Registro exitoso',
        text: 'El estudiante ha sido añadido correctamente a la base de datos temporal.',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
    });

    // Limpieza de campos de captura para agilizar el siguiente registro
    document.getElementById('nombreEstudiante').value = "";
    document.getElementById('calificacionEstudiante').value = "";
}

function calcularEstadisticas() {
    // 4. Validación: Impedir cálculos si no existen datos suficientes en el arreglo
    if (listaEstudiantes.length === 0) {
        Swal.fire({
            title: 'Sin datos',
            text: 'No es posible realizar cálculos estadísticos debido a que la lista está vacía.',
            icon: 'info',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    // 5. Procesamiento del Promedio General mediante .reduce()
    let sumaCalificaciones = listaEstudiantes.reduce(function(acumulador, estudianteActual) {
        return acumulador + estudianteActual.calificacion;
    }, 0);
    
    let promedioGral = sumaCalificaciones / listaEstudiantes.length;

    // 6. Obtención de límites numéricos (Máximos y Mínimos)
    // Extraemos únicamente las calificaciones a un arreglo plano temporal usando .map()
    let arregloCalificaciones = listaEstudiantes.map(function(e) {
        return e.calificacion;
    });

    let maxCalificacion = Math.max(...arregloCalificaciones);
    let minCalificacion = Math.min(...arregloCalificaciones);

    // 7. Localización de los objetos correspondientes a las notas extremas
    // El método .find() devuelve el primer objeto que cumpla exactamente con la condición lógica
    let alumnoMaximo = listaEstudiantes.find(function(e) {
        return e.calificacion === maxCalificacion;
    });

    let alumnoMinimo = listaEstudiantes.find(function(e) {
        return e.calificacion === minCalificacion;
    });

    // 8. Despliegue formal de datos calculados en los inputs con propiedad readonly
    document.getElementById('promedioGrupo').value = promedioGral.toFixed(2);
    document.getElementById('mejorEstudiante').value = alumnoMaximo.nombre + " (" + maxCalificacion + ")";
    document.getElementById('peorEstudiante').value = alumnoMinimo.nombre + " (" + minCalificacion + ")";
>>>>>>> a559d1e5e7ff36c2bd2500d7aa05b6f2b99c3e23
}