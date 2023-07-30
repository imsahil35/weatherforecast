// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = 'db074d1e292bf1957a1d1eec1ae98e9d';

function updateWeatherInfo(data) {
    document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').innerText = `${data.main.temp}°C`;
    document.getElementById('weather-description').innerText = data.weather[0].description;
    document.getElementById('humidity').innerText = `${data.main.humidity}%`;
    document.getElementById('wind-speed').innerText = `${data.wind.speed} km/h`;
}

async function fetchWeatherData() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        if (data.cod === '404') {
            alert(`Weather data not available for ${city}.`);
            return;
        }

        updateWeatherInfo(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
