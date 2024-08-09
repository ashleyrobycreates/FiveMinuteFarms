const dateObj = new Date();

function fetchWeatherData(location) {
    const apiUrl = `https://localhost:5500/weather?location=${location}`;

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

document.addEventListener("DOMContentLoaded", function() {
    //replace with data from API
    const weatherData = {
        dayName: "Tuesday",
        day: "August 8, 2024",
        location: "New York, NY",
        weatherIcon: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
        temperatureCelsius: 25, // Temperature in Celsius
        description: "Partly Cloudy",
        precipitation: "10%",
        humidity: "60%",
        wind: "15 km/h",
        forecast: [
            { dayName: "Wed", icon: "https://cdn.weatherapi.com/weather/64x64/day/119.png", tempCelsius: 22 },
            { dayName: "Thu", icon: "https://cdn.weatherapi.com/weather/64x64/day/176.png", tempCelsius: 24 },
            { dayName: "Fri", icon: "https://cdn.weatherapi.com/weather/64x64/day/248.png", tempCelsius: 23 },
        ]
    };

    // Function to convert Celsius to Fahrenheit
    function celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    // Convert main temperature to Fahrenheit
    const temperatureFahrenheit = celsiusToFahrenheit(weatherData.temperatureCelsius);

    // Update date and location
    document.querySelector(".date-dayname").textContent = weatherData.dayName;
    document.querySelector(".date-day").textContent = weatherData.day;
    document.querySelector(".location").textContent = weatherData.location;

    // Update weather information
    document.querySelector(".weather-icon").src = weatherData.weatherIcon;
    document.querySelector(".weather-temp").textContent = `${temperatureFahrenheit.toFixed(1)}°F`;
    document.querySelector(".weather-desc").textContent = weatherData.description;

    // Update today's info
    document.querySelector(".precipitation .title").textContent = "Precipitation:";
    document.querySelector(".precipitation .value").textContent = weatherData.precipitation;
    document.querySelector(".humidity .title").textContent = "Humidity:";
    document.querySelector(".humidity .value").textContent = weatherData.humidity;
    document.querySelector(".wind .title").textContent = "Wind:";
    document.querySelector(".wind .value").textContent = weatherData.wind;

    // Update weekly forecast
    const weekList = document.querySelector(".week-list");
    weekList.innerHTML = ""; // Clear existing items

    weatherData.forecast.forEach(day => {
        const dayTempFahrenheit = celsiusToFahrenheit(day.tempCelsius);
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <img class="day-icon" src="${day.icon}" alt="">
            <span class="day-name">${day.dayName}</span>
            <span class="day-temp">${dayTempFahrenheit.toFixed(1)}°F</span>
        `;
        weekList.appendChild(listItem);
    });
});

