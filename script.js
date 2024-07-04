async function getWeather() {
    const container = document.querySelector('.container');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = `Weather Checker`;
    container.appendChild(title);

    const inputDiv = document.createElement('div');
    inputDiv.classList.add('input-div');
    container.appendChild(inputDiv);

    const inputBar = document.createElement('input');
    inputBar.classList.add('input-bar');
    inputDiv.appendChild(inputBar);

    const inputBtn = document.createElement('button');
    inputBtn.classList.add('input-btn');
    inputBtn.textContent = `Search`;
    inputDiv.appendChild(inputBtn);

    const todaysForecast = document.createElement('div');
    todaysForecast.classList.add('todays-forecast');
    container.appendChild(todaysForecast);

    const threeDayDiv = document.createElement('div');
    threeDayDiv.classList.add('three-day-div');
    container.appendChild(threeDayDiv);

    const dayOneForecast = document.createElement('div');
    dayOneForecast.classList.add('forecast-div');
    threeDayDiv.appendChild(dayOneForecast);

    const dayOneTxt = document.createElement('span');
    dayOneForecast.appendChild(dayOneTxt);

    const dayTwoForecast = document.createElement('div');
    dayTwoForecast.classList.add('forecast-div');
    threeDayDiv.appendChild(dayTwoForecast);

    const dayTwoTxt = document.createElement('span');
    dayTwoForecast.appendChild(dayTwoTxt);

    const dayThreeForecast = document.createElement('div');
    dayThreeForecast.classList.add('forecast-div');
    threeDayDiv.appendChild(dayThreeForecast);

    const dayThreeTxt = document.createElement('span');
    dayThreeForecast.appendChild(dayThreeTxt);


    inputBtn.addEventListener('click', async () => {
        let input = inputBar.value;
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e5c796bf6dad4abf835194705240107&q=${input}&days=3&aqi=no&alerts=no`, {mode: 'cors'});

        if (response.ok) {
            const data = await response.json();
            let forecasts = data.forecast.forecastday;
            let dayOne = forecasts[0];
            let dayTwo = forecasts[1];
            let dayThree = forecasts[2];

            todaysForecast.textContent = `${data.location.name}, ${data.location.country}\n Currently ${data.current.condition.text} with a temperature of ${data.current.temp_f} degrees Fahrenheit.`;

            dayOneTxt.textContent = `Date: ${dayOne.date}\n Condition: ${dayOne.day.condition.text}\n High: ${dayOne.day.maxtemp_f} Fahrenheit\n Low: ${dayOne.day.mintemp_f} Fahrenheit`;

            dayTwoTxt.textContent = `Date: ${dayTwo.date}\n Condition: ${dayTwo.day.condition.text}\n High: ${dayTwo.day.maxtemp_f} Fahrenheit\n Low: ${dayTwo.day.mintemp_f} Fahrenheit`;

            dayThreeTxt.textContent = `Date: ${dayThree.date}\n Condition: ${dayThree.day.condition.text}\n High: ${dayThree.day.maxtemp_f} Fahrenheit\n Low: ${dayThree.day.mintemp_f} Fahrenheit`;
            inputBar.textContent = ``;
        } else {
            throw new Error(`${input.status}`);
        }
        
    });
}

getWeather()