document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textinput');
    const urlInput = document.getElementById('urlinput');
    const btnLink = document.getElementById('btn-link');
    const urlList = document.getElementById('urlsnew');

    // Creamos la funcion para añadir el enlace favorito a la ul del html.
    function newList(name, url) {
        const listItem = document.createElement('li'); 
        // Creamos la lista en el DOM añadiendo con innerHTML el txto con la etiqueta en el html, incluyendo el boton para eliminar posteriormente el enlace
        listItem.innerHTML = `
            <a href="${url}" target="_blank">${name}</a>
            <button class="delete-btn">x</button>
        `;
        // En la lista ul del html añadimos uno a uno los enlaces favoritos segun los creamos
        urlList.appendChild(listItem);

        // Creamos el evento para eliminar el enlace favorito de la pagina. Seleccionamos el boton x y añadimos el evento al hacer click
        listItem.querySelector('.delete-btn').addEventListener('click', function() {
            urlList.removeChild(listItem); 
            deleteLink(name, url); // con removeChild eliminamos el enlace, es igual que anteriormente con appendChild pero al reves, se elimina.
        });
        
        // Con esta validación conseguimos que, una vez haceiendo click, se limpien los input.
        textInput.value = '';
        urlInput.value = '';
    }
    // Creamos la función para añadir el enlace una vez hagamos click en el boton, validando el input y el enlace favorito
    btnLink.addEventListener('click', function() {
        const textValue = textInput.value.trim(); // Con trim lo que hacemos es quitar los espacios en blanco al inicio y al final
        const urlValue = urlInput.value.trim();
        
        if (textValue && urlValue) {
            newList(textValue, urlValue);
            saveLink(textValue, urlValue);
        } // Validamos según el dato que falte, no creara una alerta. 
        else if (urlValue)
            alert('Por favor, completa el nombre de tu enlace.')
        else if (textValue)
            alert('Por favor, pega tu enlace favorito.')
        else {
            alert('Por favor, completa ambos campos.');
        }
    });


    // LOCALSTORAGE

    // Creamos la función para cargar enlaces del localStorage
    function loadLinks() {
        const links = JSON.parse(localStorage.getItem('favoriteLinks')) || [];
        links.forEach(link => {
            newList(link.name, link.url);
        });
        // Función para guardar enlaces en el localStorage
        function saveLink(name, url) {
            const links = JSON.parse(localStorage.getItem('favoriteLinks')) || [];
            links.push({ name, url });
            localStorage.setItem('favoriteLinks', JSON.stringify(links));
        }
        // Función para eliminar enlace del localStorage
        function deleteLink(name, url) {
            let links = JSON.parse(localStorage.getItem('favoriteLinks')) || [];
            links = links.filter(link => link.name !== name || link.url !== url);
            localStorage.setItem('favoriteLinks', JSON.stringify(links));
        }
        // llamamos a la funcion para que se carguen los datos guardados en el localstorage.
        loadLinks();
    }
    

    
});




/* SIN LOCALSTORAGE */
/*
// Creamos el evento con el click y añadimos el enlace creando la función
document.getElementById('btn-link').addEventListener('click', function() {
    const textInput = document.getElementById('textinput');
    const urlInput = document.getElementById('urlinput');
    const urlList = document.getElementById('urlsnew');

    // Creamos las variables para validar los input
    const textValue = textInput.value.trim();
    const urlValue = urlInput.value.trim();

    // Creamos el enlace indicando que con la variable listItem, se creara los elementos de los dos input, 
    if (textValue && urlValue) {
        const listItem = document.createElement('li');
        // Con innerHTML, creamos las etiquetas en html incluyendo el boton para eliminar la misma.
        listItem.innerHTML = `
            <a href="${urlValue}" target="_blank">${textValue}</a>
            <button class="delete-btn">x</button>
        `;
        // En la lista ul del html añadimos uno a uno los enlaces favoritos segun los creamos
        urlList.appendChild(listItem);

        // Este evento crea la función para eliminar los enlaces añadido anteriormemte.
        listItem.querySelector('.delete-btn').addEventListener('click', function() {

            // Con removeChild eliminamos el enlace, es igual que anteriormente con appendChild pero al reves, se elimina.
            urlList.removeChild(listItem);
        });

        // Con esta validación conseguimos que, una vez haceiendo click, se limpien los input.
        textInput.value = '';
        urlInput.value = '';
    } 
    // En caso de no cumplirse lo anterior, es decir, que algún input se encuentre sin rellenar, nos crea la alerta.
    else {
        alert('Por favor, completa ambos campos.');
    }
});
*/
