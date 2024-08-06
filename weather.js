require('dotenv').config();

const apiKey = process.env.WEATHER_API_KEY;
const dateObj = new Date();

const getDayName = (dayType, dateVal = dateObj) => dateVal. 
toLocaleDateString('en-US', {weekday: dayType });

function fetchWeatherData(location) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&days=5`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}

navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const location = '$(latitude), $(longitude)';
    fetchWeatherData(location);
}, error => {
    console.log('Error-getting-location', error);
})