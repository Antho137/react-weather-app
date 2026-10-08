function WeatherInfos({ weatherData }) {
    /*
    const weatherImage = () => {
        const time = new Date().getHours();

        if (weatherData.weather[0].description === 'clear' || weatherData.weather[0].description === 'clear sky') {
            if (time >= 6 && time < 18) {
                return <img src='./images1/sunny.jpg' />;
            } else {
                return <img src='./images1/moony.jpg' />;
            }            
        } else if (weatherData.weather[0].description === 'few clouds') {
            if (time >= 6 && time < 18) {
                return <img src='./images1/day-few-clouds.jpg' />;
            } else {
                return <img src='./images1/night-few-clouds.jpg' />;
            }
        } else if (weatherData.weather[0].description === 'part cloudy') {
            return <img src='./images1/part-cloudy.jpg' />;
        } else if (weatherData.weather[0].description === 'broken clouds') {
            return <img src='./images1/broken-clouds.jpg' />;
        } else if (weatherData.weather[0].description === 'cloudy' || weatherData.weather[0].description === 'overcast clouds') {
            return <img src='./images1/overcast-clouds.jpg' />;
        } else if (weatherData.weather[0].description === 'scattered clouds') {
            return <img src='./images1/scattered-clouds.jpg' />;
        } else if (weatherData.weather[0].description === 'rain') {
            return <img src='./images1/rain.jpg' />;
        } else if (weatherData.weather[0].description === 'light rain') {
            return <img src='./images/light-rain.jpg' />;
        } else if (weatherData.weather[0].description === 'moderate rain') {
            return <img src='./images1/moderate-rain.jpg' />;
        }
        return;
    };

    const imageDescription = weatherImage();
    */
    return (
        <div className="weather">
            <h2 className="location">{weatherData.name}</h2>
            <div className="weather-infos">
                <div>
                    <p className="temperature">Temperature: <span>{Math.round(weatherData.main.temp)} ºC</span></p>
                    <p className="humidity">Humidity: <span>{weatherData.main.humidity}%</span></p>
                    <p className="description"><span>{weatherData.weather[0].description}</span></p>
                </div>
                <p className="descriptImg"><img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} /></p>
            </div>
        </div>
    );
}

export default WeatherInfos;