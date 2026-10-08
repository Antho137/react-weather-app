import { useState } from 'react';
import WeatherInfos from './WeatherInfos';

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

function CitySearch() {
    const [cityName, setCityName] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setCityName(event.target.value);
    }

    const handleSearch = async () => {
        const url = `${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
        if (!cityName) {
            setError('The input field cannot be empty');
            setWeatherData(null);
            return;
        }

        try {
            const response = await fetch(url);

            if (!response.ok) {
                setError("Weather Information is not Found");
                setWeatherData(null);
            }

            const data = await response.json();
            setWeatherData(data);
            setError('');
            setCityName('');
        } catch (error) {
            setError(error.message);
            setWeatherData(null);
        }
    };

    return (
        <div className='weather-form'>
            <form autoComplete='off'>
                <input 
                    type="text" 
                    name="cityName"
                    placeholder="Enter a city name"
                    value={cityName}
                    onChange={handleChange}
                />
                <button type='button' onClick={handleSearch}>
                    Search
                </button>
            </form>
            <div>
                {error && <h3>{error}</h3>}
                {weatherData && (
                    <WeatherInfos weatherData={weatherData} />
                )}
            </div>
        </div>
    );
}

export default CitySearch;