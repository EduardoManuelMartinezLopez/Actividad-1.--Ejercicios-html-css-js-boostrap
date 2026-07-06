// =========================================================
// 1. SELECCIÓN DE NODOS DEL DOM
// =========================================================
// Se utiliza document.getElementById() para obtener y almacenar en memoria las referencias exactas de los elementos HTML con los que se interactuará.
const inputElemento = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const contenedorLista = document.getElementById('lista');

// =========================================================
// 2. FUNCIÓN PRINCIPAL DE INSERCIÓN
// =========================================================
// Se declara la función responsable de leer el texto, crear nodos y ensamblarlos visualmente en la página.
function agregarElemento() {
    
    // Se extrae el valor actual escrito en el campo de texto. 
    // Se utiliza el método .trim() para limpiar y eliminar cualquier espacio en blanco ingresado por accidente al principio o al final de la cadena.
    const textoLimpio = inputElemento.value.trim();

    // Se realiza una validación condicional para evitar procesar cadenas vacías.
    if (textoLimpio === '') {
        // Se ejecuta una alerta modal de SweetAlert2 para indicar la obligatoriedad del campo.
        Swal.fire({
            title: 'Campo vacío',
            text: 'Por favor, escriba algún texto antes de intentar agregarlo a la lista.',
            icon: 'warning',
            confirmButtonColor: '#630330', // Se mantiene la paleta de colores del diseño
            confirmButtonText: 'Entendido'
        });
        // Se utiliza la instrucción 'return' para interrumpir y abandonar la función inmediatamente.
        return; 
    }

    // =========================================================
    // 3. CREACIÓN Y ENSAMBLAJE DE NODOS HTML (DOM)
    // =========================================================
    // Se invoca el método document.createElement() para generar un nuevo elemento de lista ('li') directamente en la memoria del navegador.
    const nuevoLi = document.createElement('li');
    
    // Se le asignan las clases de diseño de Bootstrap al nuevo elemento:
    // 'list-group-item': Le da apariencia de renglón delimitado.
    // 'd-flex justify-content-between align-items-center': Aplica Flexbox para alinear el texto a la izquierda y el botón a la derecha, centrados verticalmente.
    nuevoLi.className = 'list-group-item d-flex justify-content-between align-items-center';

    // Se instancia un nodo de texto puro utilizando document.createTextNode(). Esto es más seguro que usar innerHTML, ya que previene inyección de código malicioso.
    const nodoTexto = document.createTextNode(textoLimpio);
    // Se inserta el nodo de texto dentro del elemento 'li'.
    nuevoLi.appendChild(nodoTexto);

    // Se genera en memoria un nuevo elemento de tipo botón ('button') que servirá para la acción de eliminación.
    const botonEliminar = document.createElement('button');
    // Se establece el texto visible del botón.
    botonEliminar.textContent = 'Eliminar';
    // Se le asignan clases de Bootstrap: 'btn' (diseño base), 'btn-danger' (color rojo para acciones destructivas) y 'btn-sm' (botón de tamaño reducido).
    botonEliminar.className = 'btn btn-danger btn-sm';

    // =========================================================
    // 4. ASIGNACIÓN DE EVENTO DE ELIMINACIÓN
    // =========================================================
    // Se le añade un escuchador de eventos ('addEventListener') exclusivo a este nuevo botón rojo.
    botonEliminar.addEventListener('click', function() {
        // Cuando se detecte un clic, se ejecutará el método .remove() sobre el nodo 'li' padre, eliminándolo permanentemente del árbol del documento (DOM).
        nuevoLi.remove();
    });

    // =========================================================
    // 5. INYECCIÓN FINAL EN LA PÁGINA VISIBLE
    // =========================================================
    // Se inserta el botón de eliminar dentro del elemento 'li'.
    nuevoLi.appendChild(botonEliminar);
    
    // Se inserta el elemento 'li' ya ensamblado dentro del contenedor 'ul' de la página web. En este punto, el elemento se vuelve visible para el usuario.
    contenedorLista.appendChild(nuevoLi);

    // =========================================================
    // 6. LIMPIEZA DE INTERFAZ
    // =========================================================
    // Se vacía el valor del campo de texto para prepararlo para un nuevo registro.
    inputElemento.value = '';
    
    // Se ejecuta el método .focus() para redirigir el cursor del teclado automáticamente al campo de texto, mejorando la fluidez del usuario.
    inputElemento.focus();
}

// =========================================================
// 7. ESCUCHADORES DE EVENTOS GLOBALES
// =========================================================
// Se le indica al botón "Agregar" principal que, al detectar un evento 'click', ejecute la función coordinadora descrita arriba.
botonAgregar.addEventListener('click', agregarElemento);

// Se añade un escuchador de teclado ('keydown') al campo de texto de entrada.
inputElemento.addEventListener('keydown', function(evento) {
    // Se evalúa si la propiedad 'key' de la tecla presionada corresponde a la tecla 'Enter'.
    if (evento.key === 'Enter') {
        // De ser así, se ejecuta la función de inserción automáticamente, evitando la necesidad de usar el ratón.
        agregarElemento();
    }
});