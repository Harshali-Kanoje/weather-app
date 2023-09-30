
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import weatherImg from './weather.png'
import WeatherData from './component/WeatherData/WeatherData';
import wind from './wind.png'
import visibility from './visibility.png'
import humidity from './humidity.png'

function App() {

  const [weatherData, setWeatherData] = useState({})
  const [searchweather, setSearchweather] = useState('Pune');

  async function loadWeatherData() {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchweather}&appid=f652964084c552e8c0492237a3fabd9c`)

      setWeatherData(response.data);
      console.log(response.data);
    }
    // const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=${searchweather}&appid=f652964084c552e8c0492237a3fabd9c')

    // setWeatherData(response.data);
    // console.log(response.data);
    catch (error) {
      console.log(error)
    }


  }

  useEffect(() => {
    loadWeatherData();
  }, [])

  useEffect(() => {
    loadWeatherData();
    // setWeatherData(response.data);
  }, [searchweather])

  // const weatherArr = [
  // {
  //    speed : weatherData?.main?.temp

  // }]
  // console.log(weatherArr.speed)
  return (
    <div className="App">
      <div className='head'>
      <h1 className='weater-heading'>WeatherWizard</h1>
      <input type='text' placeholder='Enter City Name' value={searchweather} className='search-bar' onChange={(e) => {
        setSearchweather(e.target.value)
      }} />
      </div>
      

      <div className='container'>
        <div>
          <h1>City : {searchweather}</h1>
          <div>
            <img src={weatherImg} className='cloud-img' />
            <span className='temp'>{(weatherData?.main?.temp - 273).toFixed(2)}°C</span>
          </div>
        </div>

        {/* <p> Description : {weatherData?.weather[0]?.main}</p>   */}
        <div>
          <WeatherData Value={`${weatherData?.visibility} meters`} text='visibility' img={visibility}/>
          <WeatherData Value={`${weatherData?.main?.humidity} °F`} text='Humadity' img={humidity}/>
          <WeatherData Value={`${weatherData?.wind?.speed} Km/Hr`} text='Wind ' img={wind}/>
        </div>
      </div>


    </div>
  );
}

export default App;
