const backgrounds = [
    './assets/img/Top\ Gun\ 1.jpeg',
    './assets/img/Top\ Gun\ 2.jpeg',
    './assets/img/Top\ Gun\ 3.jpeg',
    './assets/img/Top\ Gun\ 4.jpg.',
    './assets/img/Top\ Gun\ 5.jpeg',
    './assets/img/Top\ Gun\ 6.jpeg',
    './assets/img/Top\ Gun\ 7.png',
    './assets/img/Top\ Gun\ 8.png',
    './assets/img/Top\ Gun\ 9.png',
    './assets/img/Top\ Gun\ 11.jpeg',
    './assets/img/Top\ Gun\ 12.jpeg',
    './assets/img/Top\ Gun\ 13.jpeg',
    './assets/img/Top\ Gun\ 14.jpeg',
    './assets/img/Top\ Gun\ 15.jpeg',
    './assets/img/Top\ Gun\ 16.jpeg',
    './assets/img/Top\ Gun\ 17.jpeg',
    './assets/img/Top\ Gun\ 18.jpeg',
    './assets/img/Top\ Gun\ 19.jpeg',
    './assets/img/Top\ Gun\ 20.jpg',
    './assets/img/Top\ Gun\ 21.jpg',
    './assets/img/Top\ Gun\ 22.jpg',
    './assets/img/Top\ Gun\ 23.jpg',
    './assets/img/Top\ Gun\ 24.jpg',
    './assets/img/Top\ Gun\ 25.jpg',
];

const changeBackground = () => {
    const body = document.body;
    // Seleccionamos índice aleatorio del array con las imagenes y establecemos la misma de fondo en la pagina
    const randomPhoto = Math.floor(Math.random() * backgrounds.length);
    body.style.backgroundImage = `url(${backgrounds[randomPhoto]})`;
};

// Llamamos a la funcion para que recargar la pagina se cambia el fondo y llamamos a la funcion para que cambie el fondo cada tiempo que estimemos
changeBackground();
setInterval(changeBackground, 15000);