// 1. Crear clave
// 2. Crear la clave con un simbolo de cada y aleatoria
// 3. Crear evento click
// 4. Añadir el evento click al html

// Creamos la funcion para que nos devuelva la longitud y los caracteres
function passwordNew(passnumber) {
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!@#$%^&*()-_=+";
    
    let password = "";
    
    // Nos aseguramos con el += como minimo haya un caracter minimo de cada clase o mas.
    password += getMinimum(capitalLetters);
    password += getMinimum(lowercase);
    password += getMinimum(number);
    password += getMinimum(symbol);
    
    
    // con Math.floor(Math.random creamos la clave aleatoria
    for (let i = password.length; i < passnumber; i++) {
        const union = capitalLetters + lowercase + number + symbol;
        const passtotal = Math.floor(Math.random() * union.length);
        password += union.charAt(passtotal);
    }
    return password; // Nos retorna el valor de la clave
}


// Creamos una funcion al hacer click en el boton, por lo que se crea el evento.
// Con parseInt nos comprueba el valor del input para devolvernos su longitud
function newPass() {
    const passhInput = document.getElementById('pass');
    const passnumber = parseInt(passhInput.value);

    // Creamos una alerta para que el usuario añada la clave con los caracteres indicados.
    if (passnumber < 12 || passnumber > 50) {
      alert("Introduce un valor correcto entre 12 y 50");
      return;
  }
  
    // Con la longitud del input anteriormente, nos devuelve el resultado cuando llamemnos a la funcion passwordNew
    const password = passwordNew(passnumber);
    const newResult = document.getElementById('newResult');

    
    // añadimos en el html la clave
    newResult.innerHTML = `Tu clave es: ${password}`; 
  }


  // Nos retorna el valor del indice
  function getMinimum(total) {
    const passtotal = Math.floor(Math.random() * total.length);
    return total.charAt(passtotal);
  }
  
  