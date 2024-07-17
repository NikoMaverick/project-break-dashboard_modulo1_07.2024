// Opcion 1 - VALIDA

// Creamos la funcion actualiarReloj.
function actualiarReloj() { 
    
    // RELOJ ACTUALIZADO
    const reloj = document.getElementById("reloj"); // Llamamos a id="reloj" en id="reloj"
    const horaActual = new Date(); // Obtenemos la hora actual con new Date
    
    const horas = horaActual.getHours().toString().padStart(2, '0') // Formateamos las horas
    const minutos = horaActual.getMinutes().toString().padStart(2, '0') // Formateamos los minutos
    const segundos = horaActual.getSeconds().toString().padStart(2, '0') // Formateamos los segundos
    reloj.textContent = `${horas}:${minutos}:${segundos}`; // Asignamos el reseteo de las horas, minutos y segundos en variables.


    // FECHA ACTUALIZADA
    const date = document.getElementById("date");
    const fechaActual = new Date ();
    const weeklyDays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    const weekdays = weeklyDays[fechaActual.getDay()];
    const day = fechaActual.getDay().toString().padStart(2, '0');
    const día = fechaActual.getDate().toString().padStart(2, '0');
    const mes = (fechaActual.getMonth()+1).toString().padStart(2, '0');
    const año = fechaActual.getFullYear().toString().padStart(2, '0');
    
    date.textContent =`${weekdays}, ${día}/${mes}/${año}`

    // FRASES SEGUN HORARIO
    const phrases = document.getElementById("phrases");
    let newPhrases = "";
    if(horaActual.getHours()<7){
        newPhrases = "Es hora de descansar. Apaga y sigue mañana"
    } else if(horaActual.getHours()<12){
        newPhrases = "Buenos días, desayuna fuerte y a darle al código"
    } else if(horaActual.getHours()<14){
        newPhrases = "Echa un rato más pero no olvides comer"
    } else if(horaActual.getHours()<16){
        newPhrases = "Espero que hayas comido"
    } else if(horaActual.getHours()<18){
        newPhrases = "Buenas tardes, el último empujón"
    } else if(horaActual.getHours()<22){
        newPhrases = "Esto ya son horas extras, ... piensa en parar pronto"
    } else {
        newPhrases = "Buenas noches, es hora de pensar en parar y descansar"
    }
    phrases.textContent = newPhrases
};

actualiarReloj(); // Llamamos a la funcion actualizando el contenido de div reloj con la hora actualizada.
setInterval(actualiarReloj, 1000); // Para que el reloj sea en tiempo real, usamos la función setInterval, actualizar reloj cada 1000 milisegundos (1 segundo)



/*
Aparecerán unas frases dependiendo un intervalo de horas. Doy una de ejemplo aunque puedes cambiarlas a tu gusto:
  - Desde las 00:01 hasta las 07:00 Es hora de descansar. Apaga y sigue mañana
  - Desde las 07:01 hasta las 12:00 Buenos días, desayuna fuerte y a darle al código
  - Desde las 12:01 hasta las 14:00 Echa un rato más pero no olvides comer
  - Desde las 14:01 hasta las 16:00 Espero que hayas comido
  - Desde las 16:01 hasta las 18:00 Buenas tardes, el último empujón
  - Desde las 18:01 hasta las 22:00 Esto ya son horas extras, ... piensa en parar pronto
  - Desde las 22:01 hasta las 00:00 Buenas noches, es hora de pensar en parar y descansar  


*/