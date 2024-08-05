const apiKey = APIKEY;
const dateObj = new Date();

const getDayName = (dayType, dateVal = dateObj) => 
    toLocaleDateString('en-US', { weekday: dayType });

function

navigator.geolocation.getCurrentPosition(position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const location = '$(latitude),$(longitude)';
    
    fetchWeatherData(location);
}, error => {
    console.error('Error-getting-location', error);
})