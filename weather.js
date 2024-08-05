function getWeather() {
    
    const apiKey = 'b595194f3f37ce111269ec99d5026638';
    const city = document.getElementById('city').value; 

    if (!city) {
        alert('Please enter a city');
        return;
    }


const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

}

function getWeather() {
    
    fetch(currentWeatherUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching current weather data:', error);
        alert('Error fetching current weather data. Please try again.');
    });

}

function getWeather() {
    
    fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        displayHourlyForecast(data.displayHourlyForecast);
    })
    .catch(error => {
        console.error('Error fetching hourly forecast data:', error);
        alert('Error fetching hourly forecast data. Please try again.');
    });
    
}
//displayWeather function
function displayWeather(data) {
    
    const tempDivInfo = document.getElementById('temp-info');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    //Clear previous content
    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';
}

function displayWeather(data) {
    
    if (data.cod === '404') {
       weatherInfoDiv.innerHTML = <p>${data.message}</p>;
    } else {
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@4x.png`;
    
        const temperatureHTML = '
            <p>${temperature}°C</p>
        ';
        const weatherHtml = '
            <p>${cityName}</p> 
            <p>${description}</p>
        ';

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();
    }
}
        
function displayHourlyForecast(hourlyData) {

        const hourlyForecastDiv = document.getElementById('hourly-forecast');
        const next24Hours = hourlyData.list.slice(0, 8);

        next24Hours.forEach(item => {

            const dateTime = new Date(item.dt * 1000);
            const hour = dateTime.getHours();
            const temperature = Math.round(item.main.temp - 273.15);
            const iconCode = item.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

            const hourlyItemHtml = '
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly Weather Icon">
                <span>${temperature}°C</span>
            </div>
        ';
        hourlyForecastDiv.innerHTML += hourlyItemHtml;

    });
}

function showImage() {
    
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block';
}





   