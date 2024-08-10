const dateObj = new Date();

const getDayName = (dayType, dateVal = dateObj) => dateVal.
toLocaleDateString("en-US", { weekday: dayType });

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
        document.querySelector(".date-dayname").textContent = getDayName("long", new Date(data.current.last_updated));
        document.querySelector('.location').textContent = `${data.location.name}, ${data.location.country}`;
        document.querySelector('.weather-temp').textContent = `${data.current.temp_c}°C`;
        document.querySelector('.weather-desc').textContent = `${data.current.condition.text}`;
        document.querySelector('.weather-icon').src = `https:${data.current.condition.icon}`;
        document.querySelector('.precepitation.value').textContent = `${data.current.precip_in}`;
        document.querySelector('.humidity.value').textContent = `${data.current.humidity} %`;
        document.querySelector('.wind.value').textContent = `${data.current.wind_mph} mph`; 
        if(data.current.is_day){
            document.querySelector(".weather-side").classList.replace("night", "day");
        }else{
            document.querySelector(".weather-side").classList.replace("day", "night");
        }
        updateForcastData(data.forecast);
        
    })
}

function updateForcastData(forecastVal){
    const weekContainer = document.querySelector(".week-list");
    weekContainer.innerHTML = "";
    forecastVal.forecastday.forEach(eachForecast => {
       const dayVal = eachForecast.day;
       const currentDate = new Date(eachForecast.date); 
        if(currentDate.toDateString() !== dateObj.toDateString())
        {
            const liEl = document.createElement('li');
            liEl.innerHTML = `
                <img class="day-icon" src="${dayVal.condition.icon}"alt=${eachForecast.date} temperature>
                <span class="day-name">${getDayName("short", currentDate)}</span>
                <span class="day-temp">${dayVal.maxtemp_c}°C</span>
                `
            weekContainer.appendChild(liEl);
        }
    })
    weekContainer.insertAdjacentHTML("beforeend", `div class="clear"></div>`);                                          
}


try {
    // Code that may throw an error
} catch (error) {
    // Handle the error
    console.error('There has been a problem with your fetch operation:', error);
}

fetchWeatherData();

navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const location = `${latitude}, ${longitude})`;
    fetchWeatherData(location);
});


document.addEventListener("DOMContentLoaded", function() {
    // Replace with data from API
    const weatherData = {
        dayName: "",
        day: "",
        location: "",
        weatherIcon: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
        temperatureCelsius: 0, // Temperature in Celsius
        description: "",
        precipitation: "",
        humidity: "",
        wind: "",
        forecast: [
            { dayName: "", tempCelsius: 0, icon: "https://cdn.weatherapi.com/weather/64x64/day/113.png" },
            { dayName: "", tempCelsius: 0, icon: "https://cdn.weatherapi.com/weather/64x64/day/116.png" }
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

