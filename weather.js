const dateObj = new Date();

const getDayName = (dayType, dateVal = dateObj) => dateVal.toLocaleDateString('en-US', {weekday: dayType})

function fetchWeatherData(location) {
    const apiUrl = `http://localhost:3000/weather?location=${location}`;

    const currentDay = getDayName('long');
    const fullDateStr = dateObj.toLocaleDateString('en-US',{day: "numeric", month: "short", year: "numeric"});
    document.querySelector(".date-day").textContent = fullDateStr;
    document.querySelector(".date-dayname").textContent = currentDay;
    
    fetch (apiUrl)
    .then(response => response.json())
    
    .then(data => {
        //Log JSON data
        //console.log(data);
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
    .catch(error => {
        console.log('Error fetching weather data', error);
    });
}

//Update forecast data
function updateForcastData(forecastData){
    const weekContainer = document.querySelector(".week-list");
    weekContainer.innerHTML = "";
    forecastData.forecastday.forEach(dayObj => {
       const currentDate = new Date(dayObj.date); 
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

