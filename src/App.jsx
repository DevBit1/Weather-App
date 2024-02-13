import { useState } from 'react'
import './App.css'
import Search from './Components/search/Search'
import CurrentWeather from './Components/current-weather/current-weather'
import { WEATHER_API_URL, WEATHER_API_KEY } from './api'
import Forecast from './Components/forecast/forecast'

function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(" ")

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`)


    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()

        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setForecast({ city: searchData.label, ...forecastResponse })
      })
      .catch((err) => console.log(err))
  }

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange}></Search>
      {currentWeather &&
        <CurrentWeather data={currentWeather}></CurrentWeather>}

      {forecast && <Forecast data={forecast}></Forecast>}
    </div>
  )
}

export default App


