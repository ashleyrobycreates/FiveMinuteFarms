function getWeather() {
    
    const apiKey = 'YOUR-API-KEY';
    const city = document.getElementById('city').value; 

    if (!city) {
        alert('Please enter a city');
        return;
    }


const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

}

function getWeather() {
    
    fetch(currentWeatherUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching current weather data:', error);
        alert('Error fetching current weather data. Please try again.');
    });

}

function getWeather() {
    
    fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        displayHourlyForecast(data.displayHourlyForecast);
    })
    .catch(error => {
        console.error('Error fetching hourly forecast data:', error);
        alert('Error fetching hourly forecast data. Please try again.');
    });
    
}
