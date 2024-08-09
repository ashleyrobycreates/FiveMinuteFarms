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
document.addEventListener("DOMContentLoaded", function() {
    // Replace with data from API
    const weatherData = {
        dayName: "Friday",
        day: "9",
        location: "Lexington, KY",
        weatherIcon: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
        temperatureCelsius: 25, // Temperature in Celsius
        description: "Partly cloudy",
        precipitation: "10%",
        humidity: "60%",
        wind: "15 km/h",
        forecast: [
            { dayName: "Saturday", tempCelsius: 27, icon: "https://cdn.weatherapi.com/weather/64x64/day/113.png" },
            { dayName: "Sunday", tempCelsius: 28, icon: "https://cdn.weatherapi.com/weather/64x64/day/116.png" }
        ]
    };

    updateDayName(weatherData.dayName);
    updateDay(weatherData.day);
    updateLocation(weatherData.location);
    updateWeatherIcon(weatherData.weatherIcon);
    updateTemperature(weatherData.temperatureCelsius);
    updateDescription(weatherData.description);
    updatePrecipitation(weatherData.precipitation);
    updateHumidity(weatherData.humidity);
    updateWind(weatherData.wind);
    updateForecast(weatherData.forecast);
});

function updateDayName(dayName) {
    if (dayName) {
        document.querySelector(".date-dayname").textContent = dayName;
    }
}

function updateDay(day) {
    if (day) {
        document.querySelector(".date-day").textContent = day;
    }
}

function updateLocation(location) {
    if (location) {
        document.querySelector(".location").textContent = location;
    }
}

function updateWeatherIcon(weatherIcon) {
    if (weatherIcon) {
        document.querySelector(".weather-icon").src = weatherIcon;
    }
}

function updateTemperature(temperatureCelsius) {
    if (temperatureCelsius !== undefined) {
        const temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);
        document.querySelector(".weather-temp").textContent = `${temperatureFahrenheit.toFixed(1)}°F`;
    }
}

function updateDescription(description) {
    if (description) {
        document.querySelector(".weather-desc").textContent = description;
    }
}

function updatePrecipitation(precipitation) {
    if (precipitation) {
        document.querySelector(".precipitation .value").textContent = precipitation;
    }
}

function updateHumidity(humidity) {
    if (humidity) {
        document.querySelector(".humidity .value").textContent = humidity;
    }
}

function updateWind(wind) {
    if (wind) {
        document.querySelector(".wind .value").textContent = wind;
    }
}

function updateForecast(forecast) {
    if (forecast && forecast.length > 0) {
        const weekList = document.querySelector(".week-list");
        weekList.innerHTML = ""; // Clear existing items

        forecast.forEach(day => {
            const dayTempFahrenheit = celsiusToFahrenheit(day.tempCelsius);
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <img class="day-icon" src="${day.icon}" alt="">
                <span class="day-name">${day.dayName}</span>
                <span class="day-temp">${dayTempFahrenheit.toFixed(1)}°F</span>
            `;
            weekList.appendChild(listItem);
        });
    }
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


