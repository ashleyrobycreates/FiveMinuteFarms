const dateObj = new Date();

function fetchWeatherData(location) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=6fecc3120ad242a68d363538240608&q=${location}&days=5`;

    fetch (apiUrl)
    .then(response => {
        //Make sure the response is OK
        if (!response.ok) {
            throw new Error('Network response error' + response.statusText);
        }
        //Convert response to JSON
        return response.json();
        
    })
    .then(data => {
        //Log JSON data
        console.log(data);
        ;
    })
    .catch(error => {
        //handle the error
        console.error('There has been a problem with your fetch operation:', error);
    });
}

fetchWeatherData();

navigator.geolocation.getCurrentPosition(position => {
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const location = `${latitude}, ${longitude}`;
   fetchWeatherData(location);

},error => {
    console.log(`Error getting location`, error);
});
    