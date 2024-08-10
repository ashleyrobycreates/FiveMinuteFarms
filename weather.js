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
//Update forecast data
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
                <img class="day-icon" src="https:${dayObj.day.condition.icon}" alt=${dayObj.day.condition.text}">
                <span class="day-name">${getDayName('short', currentDate)}</span>
                <span class="day-temp">${dayObj.maxtemp_c}°C</span>
                `
            weekContainer.appendChild(liEl);
        }
    })
    weekContainer.insertAdjacentHTML("beforeend", `div class="clear"></div>`);                                          
}

document.querySelector(`.location-form`).addEventListener('submit', function (event) {
    event.preventDefault();
    const searchLocation = document.getElementById('search-input').value;
    if(searchLocation){
        fetchWeatherData(searchLocation);
    }
});

//Get location
navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const location = `${latitude}, ${longitude})`;
    fetchWeatherData(location);
}, error => {
    console.log('Error getting location', error);
});

