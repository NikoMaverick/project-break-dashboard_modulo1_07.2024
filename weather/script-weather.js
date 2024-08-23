
const apiKey = '99a7044548b849e6a2d192059241908';

// Realizamos la función para obtener la ubicación del usuario
function getLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    resolve({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    });
                },
                error => {
                    reject(error);
                }
            );
        } else {
            reject(new Error("Geolocalización no soportada por el navegador"));
        }
    });
}

// Realizamos la función para obtener los datos de la API.
async function getWeatherData(lat, lon) {
    try {
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&aqi=no&days=1`;
        const response = await fetch(url);
        
        // Comprobamos que la respuesta es correcta, sino, lanzamos un error.
        if (!response.ok) {
            throw new Error(`Error al obtener los datos: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en la obtención:", error);
        throw error;
    }
}

// Realizamos la función para que se actualice la información de la pagina.
function updateWeatherInfo(data) {
    const location = data.location;
    const current = data.current;
    const forecast = data.forecast.forecastday[0].hour;

    // Llamamos a los ID y actualizamos los elementos del DOM.
    document.getElementById('cityCountry').textContent = `${location.name} (${location.region}) - ${location.country}`;
    document.getElementById('localTime').textContent = `${location.localtime}h.`;
    document.getElementById('textCondition').textContent = current.condition.text;
    document.getElementById('iconWeather').src = `https:${current.condition.icon}`;
    document.getElementById('temperature').textContent = `${current.temp_c}`;
    document.getElementById('precip_in').textContent = current.precip_in;
    document.getElementById('humidity').textContent = current.humidity;
    document.getElementById('wind_kph').textContent = current.wind_kph;
    document.getElementById('cloud').textContent = current.cloud;

    // Limpiamos la información previa del forecast por horas
    const forecastInfo = document.getElementById('forecast-info');
    forecastInfo.innerHTML = ''; 

    // Realizamos un forEach para obtener la previsión cada hora.
    forecast.forEach(hour => {
        const forecastHour = document.createElement('ul');
        forecastHour.className = 'forecast-hour';
        forecastHour.innerHTML = `
            <li>
            <span>${hour.time.split(' ')[1]}</span>
            <img class="iconHours" src="https:${hour.condition.icon}" alt="Icono del Tiempo">
            <span>${hour.temp_c} °C</span>
            </li>
        `;
        forecastInfo.appendChild(forecastHour);
    });
}

// Con esta función ejecutamos todo el script
async function weather() {
    try {
        // Obtenemos la ubicación del usuario
        const { lat, lon } = await getLocation();

        // Obtenemos los datos climaticos de la API
        const weatherData = await getWeatherData(lat, lon);

        // Actualizamos la página con la información obtenida de la API
        updateWeatherInfo(weatherData);
    } catch (error) {
        console.error("Error obteniendo el clima:", error);
        alert("No se pudo obtener la información.");
    }
}

// Ejecutar la función principal al cargar la página
window.onload = weather;