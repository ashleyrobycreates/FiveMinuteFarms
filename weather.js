const dateObj = new Date();

function fetchWeatherData(location) {
    const apiUrl = `http://localhost:3000/weather?location=${location}`;

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

//if then...  
