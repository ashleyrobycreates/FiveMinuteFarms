const apiKey = APIKEY;
const dateObj = new Date();

const getDayName = (dayType, dateVal = dateObj) => 
    toLocaleDateString('en-US', { weekday: dayType });

function fetchWeatherData(location){
    const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&days=5';

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

        console.log(data)
    })
}

navigator.geolocation.getCurrentPosition(position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const location = '$(latitude),$(longitude)';
    
    fetchWeatherData(location);
}, error => {
    console.error('Error-getting-location', error);
})