// =========================================================
// 1. EJECUCIÓN INICIAL AL CARGAR LA PÁGINA
// =========================================================
// Se utiliza el evento 'onload' del objeto window para detectar el momento exacto en que la estructura HTML ha sido cargada por completo en el navegador.
window.onload = () => {
    // Se invoca la función de renderizado inicial para pintar en pantalla cualquier tarea que haya sido guardada en sesiones anteriores.
    renderizarTareas();
};

// =========================================================
// 2. IMPLEMENTACIÓN DE CLOSURE Y SCOPE PRIVADO
// =========================================================
// Se declara una variable constante llamada 'manejarTareas'. Esta variable se iguala a una función anónima que se autoejecuta inmediatamente `(() => { ... })();`.
// Este patrón de diseño (Closure) genera un entorno (scope) privado. Las funciones internas quedan protegidas y el Local Storage no puede ser modificado libremente desde la consola del navegador.
const manejarTareas = (() => {

    // Se define una función de uso interno (privada) encargada de la lectura del almacenamiento.
    const obtenerTareas = () => {
        // Se utiliza localStorage.getItem() para buscar la cadena de texto guardada bajo la llave "listaTareas".
        const tareasJSON = localStorage.getItem("listaTareas");
        
        // Se aplica un operador ternario: Si existen datos (tareasJSON contiene algo), se utiliza JSON.parse() para traducir la cadena de texto a un arreglo real de JavaScript.
        // Si no existen datos (es null), se retorna un arreglo vacío [].
        return tareasJSON ? JSON.parse(tareasJSON) : [];
    };

    // Se define otra función privada encargada exclusivamente de la escritura de datos.
    const guardarTareas = (tareas) => {
        // Se utiliza localStorage.setItem() para guardar la información. 
        // Como el Local Storage solo admite texto, se utiliza JSON.stringify() para convertir el arreglo de tareas a una cadena de texto antes de almacenarlo.
        localStorage.setItem("listaTareas", JSON.stringify(tareas));
    };

    // La función principal retorna un objeto con las únicas funciones que estarán expuestas (públicas) para ser utilizadas fuera de este bloque.
    return {
        // Función pública para registrar una nueva tarea en el sistema
        agregarTarea: (textoTarea) => {
            // Se invoca la función privada para recuperar el estado actual de la lista
            let tareas = obtenerTareas(); 
            
            // Se construye un nuevo objeto JavaScript para la tarea. 
            // Se asigna como 'id' el método Date.now() (milisegundos actuales) para garantizar que cada registro tenga un identificador único e irrepetible.
            const nuevaTarea = {
                id: Date.now(),
                texto: textoTarea
            };
            
            // Se inserta el nuevo objeto al final del arreglo utilizando el método .push()
            tareas.push(nuevaTarea); 
            // Se invoca la función privada para sobreescribir el Local Storage con la lista actualizada
            guardarTareas(tareas);   
        },

        // Función pública encargada de la eliminación de un registro específico
        eliminarTarea: (idTarea) => {
            // Se obtiene la lista actual de tareas
            let tareas = obtenerTareas();
            
            // Se utiliza el método .filter() de los arreglos. Este método re-crea la lista conservando únicamente las tareas cuyo 'id' no coincida (!==) con el 'id' recibido.
            // En términos prácticos, esto desecha (elimina) la tarea especificada.
            tareas = tareas.filter(tarea => tarea.id !== idTarea);
            
            // Se envía la lista filtrada al Local Storage para guardar los cambios
            guardarTareas(tareas); 
        },

        // Función pública de lectura. Retorna la lista de tareas actual.
        obtenerLista: () => obtenerTareas()
    };
})(); 


// =========================================================
// 3. RENDERIZADO DEL DOM (MANIPULACIÓN VISUAL)
// =========================================================
// Se define la función encargada de generar dinámicamente el código HTML para mostrar la lista en pantalla.
const renderizarTareas = () => {
    // Se captura el elemento de lista desordenada (ul) del HTML.
    const contenedorLista = document.getElementById('listaTareas');
    
    // Se vacía completamente el contenido de la lista (`innerHTML = ''`) de forma preventiva. 
    // Esto evita que las tareas se dupliquen visualmente al volver a pintar la lista.
    contenedorLista.innerHTML = '';
    
    // Se llama a la función pública del Closure para obtener la lista de tareas.
    const tareasGuardadas = manejarTareas.obtenerLista();

    // Se itera sobre el arreglo de tareas utilizando un bucle .forEach().
    tareasGuardadas.forEach(tarea => {
        
        // Por cada registro, se crea en memoria un nuevo nodo de lista (li).
        const elementoLi = document.createElement('li');
        // Se le asigna la clase CSS correspondiente para aplicarle diseño.
        elementoLi.className = 'item-tarea'; 

        // Se crea en memoria una etiqueta (span) encargada de alojar la descripción de la tarea.
        const spanTexto = document.createElement('span');
        // Se inyecta la propiedad 'texto' del objeto actual dentro de la etiqueta span.
        spanTexto.textContent = tarea.texto;

        // Se crea dinámicamente un nodo de tipo botón (<button>) para la acción de eliminación.
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'btn-eliminar';
        
        // Se asigna un evento de escucha (onclick) específico al botón recién instanciado.
        botonEliminar.onclick = () => {
            // Se invoca una alerta modal utilizando la librería externa SweetAlert2 para requerir confirmación antes de borrar datos.
            Swal.fire({
                title: '¿Confirmar eliminación?',
                text: `Se eliminará la tarea: "${tarea.texto}".`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#ef4444',
                confirmButtonText: 'Sí, borrar'
            }).then((result) => {
                // Si el usuario confirma la acción en la alerta...
                if (result.isConfirmed) {
                    // Se utiliza la función pública del Closure, enviándole el 'id' exacto de la tarea a eliminar.
                    manejarTareas.eliminarTarea(tarea.id);
                    // Se ejecuta de nuevo el ciclo de renderizado para borrar visualmente el elemento del HTML.
                    renderizarTareas(); 
                }
            });
        };

        // Se ensambla la estructura: Se insertan el texto y el botón dentro del nodo 'li'.
        elementoLi.appendChild(spanTexto);
        elementoLi.appendChild(botonEliminar);
        
        // Se inyecta el renglón 'li' ya ensamblado dentro de la lista 'ul' visible en la página.
        contenedorLista.appendChild(elementoLi);
    });
};

// =========================================================
// 4. CAPTURA DE DATOS DESDE LA INTERFAZ
// =========================================================
// Se define la función que es llamada directamente desde el botón "Agregar" del documento HTML.
const ejecutarInsercion = () => {
    // Se captura la referencia a la caja de texto.
    const inputNuevaTarea = document.getElementById('nuevaTarea');
    
    // Se extrae el valor ingresado, aplicándole .trim() para remover espacios vacíos generados accidentalmente.
    const texto = inputNuevaTarea.value.trim();

    // Validación de integridad de datos: Se comprueba que no se intente insertar un valor nulo.
    if (texto === '') {
        // Se genera una alerta indicando el error.
        Swal.fire('Atención', 'Es obligatorio proporcionar una descripción para la tarea.', 'warning');
        return; // Se aborta la función.
    }

    // Se delega el proceso de registro a la función pública del Closure.
    manejarTareas.agregarTarea(texto);
    
    // Se inicializa el campo de texto vaciándolo para agilizar un nuevo ingreso de datos.
    inputNuevaTarea.value = '';
    
    // Se dispara el flujo de renderizado para que la nueva tarea sea visible de inmediato en la pantalla.
    renderizarTareas();
};