const backgrounds = [
    './assets/img/TopGun1.webp',
    './assets/img/TopGun2.webp',
    './assets/img/TopGun3.webp',
    './assets/img/TopGun4.webp.',
    './assets/img/TopGun6.webp',
    './assets/img/TopGun7.webp',
    './assets/img/TopGun8.webp',
    './assets/img/TopGun9.webp',
    './assets/img/TopGun10.webp',
    './assets/img/TopGun11.webp',
    './assets/img/TopGun12.webp',
    './assets/img/TopGun13.webp',
    './assets/img/TopGun14.webp',
    './assets/img/TopGun15.webp',
    './assets/img/TopGun16.webp',
    './assets/img/TopGun17.webp',
    './assets/img/TopGun18.webpg',
    './assets/img/TopGun19.webp',
    './assets/img/TopGun20.webp',
    './assets/img/TopGun21.webp',
    './assets/img/TopGun23.webp',
    './assets/img/TopGun25.webp',
];

const changeBackground = () => {
    const body = document.body;
    // Seleccionamos índice aleatorio del array con las imagenes y establecemos la misma de fondo en la pagina
    const randomPhoto = Math.floor(Math.random() * backgrounds.length);
    body.style.backgroundImage = `url("${backgrounds[randomPhoto]}")`;
};

// Llamamos a la funcion para que recargar la pagina se cambia el fondo y llamamos a la funcion para que cambie el fondo cada tiempo que estimemos
changeBackground();
setInterval(changeBackground, 20000);