const container = document.querySelector('.container');

async function getWeather() {
    let input = prompt(`Enter City: `);
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e5c796bf6dad4abf835194705240107&q=${input}&days=3&aqi=no&alerts=no`, {mode: 'cors'});

    if (response.ok) {
        const data = await response.json();
        const forecasts = data.forecast.forecastday;
        const dayOne = forecasts[0];
        const dayTwo = forecasts[1];
        const dayThree = forecasts[2];

        container.textContent = `The weather in ${data.location.name}, ${data.location.country} is ${data.current.condition.text}. The current temperature is ${data.current.temp_f} degrees. Three Day Forecast:\n [1]Date ${dayOne.date}:  Condition: ${dayOne.day.condition.text} High: ${dayOne.day.maxtemp_f} Low: ${dayOne.day.mintemp_f}\n [2]Date ${dayTwo.date}:  Condition: ${dayTwo.day.condition.text} High: ${dayTwo.day.maxtemp_f} Low: ${dayTwo.day.mintemp_f}\n [3]Date ${dayThree.date}:  Condition: ${dayThree.day.condition.text} High: ${dayThree.day.maxtemp_f} Low: ${dayThree.day.mintemp_f}`;
    }
}

getWeather()