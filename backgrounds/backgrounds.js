const backgrounds = [
    '../assets/img/Top Gun 1.jpeg',
    '../assets/img/Top Gun 2.jpeg',
    '../assets/img/Top Gun 3.jpeg',
    '../assets/img/Top Gun 4.jpeg',
    '../assets/img/Top Gun 5.jpeg',
    '../assets/img/Top Gun 6.jpeg',
    '../assets/img/Top Gun 7.jpeg',
    '../assets/img/Top Gun 8.jpeg',
    '../assets/img/Top Gun 9.jpeg',
    '../assets/img/Top Gun 10.jpeg',
    '../assets/img/Top Gun 11.jpeg',
    '../assets/img/Top Gun 12.jpeg',
    '../assets/img/Top Gun 13.jpeg',
    '../assets/img/Top Gun 14.jpeg',
    '../assets/img/Top Gun 15.jpeg',
    '../assets/img/Top Gun 16.jpeg',
    '../assets/img/Top Gun 17.jpeg',
    '../assets/img/Top Gun 18.jpeg',
    '../assets/img/Top Gun 19.jpeg',
    '../assets/img/Top Gun 20.jpeg',
    '../assets/img/Top Gun 21.jpeg',
    '../assets/img/Top Gun 22.jpeg',
    '../assets/img/Top Gun 23.jpeg',
    '../assets/img/Top Gun 24.jpeg',
    '../assets/img/Top Gun 25.jpeg',
]

const backgroundRandom = () => {
    const body = document.body
    const backgroundsBody = Math.floor(Math.random() * backgrounds.length)
    body.style.imgBackground = `url(${backgrounds[backgroundsBody]})`
}

setInterval(backgroundRandom,5000)
backgroundRandom()