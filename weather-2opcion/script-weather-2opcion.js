

    const apiKey = "99a7044548b849e6a2d192059241908"

    // Con esta función obtenemos la ubicacion del usuario
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
            } 
            else {
                reject(new Error("Tu navegador no soporta la geolocalización"));
            }
        });
    };

    // Creamos la función para recoger los datos meteorologicos de la API
    async function getWeatherData(lat, lon) {
        const urlApi = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&aqi=no&days=1`;
        
        try{
            const response = await fetch(urlApi);
            const weather = await response.json();
            weatherCurrent (weather)
            weatherForecast (weather)
        }
        catch(error){
            throw error
        }
    }

    function locationCurrent({location, current}) {
        const weatherContainer = document.getElementById('weatherContainer');
        const {lat, lon} = location;
        const {temp_c, condition:{text, icon}, wind_kph, precip_in, humidity, cloud } = current;
        const weatherTemplate = `
        <h2>${location.name} - ${location.region}</h2>
        <h3>${location.country}<h3>
        <p>${text}<P>
         <div class="data-day">
            <div class="temp">
                <img class="iconText" src="htpps:${icon}" alt="${text}">
                <div>${temp_c} <img class="iconTemp" src="../assets/icons/Therm.png" alt= "Temperatura"</div>
            </div>
            <ul class="dataWeather>
                <li>Precipitaciones: ${precip_in}%</li>
                <li>Humedad: ${humidity}%</li>
                <li>Nubes: ${cloud}%</li>
                <li>Viento: ${wind_kph}Km/h.</li>
            </ul>
          </div>`
        
        weatherContainer.innerHTML = weatherTemplate;        
    }
    
    

    getWeatherData(lat, lon);