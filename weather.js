// Load environment variables from .env file
require('dotenv').config();

// Access the API key from environment variables
const apiKey = process.env.APIKEY;
const dateObj = new Date();

const getDayName = (dayType, dateVal = dateObj) => dateVal. 
toLocaleDateString('en-US', {weekday: dayType });

function fetchWeatherData(location){
    const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&5days';
    
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