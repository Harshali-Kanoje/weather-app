import React from 'react'
import './WeatherData.css'


const WeatherData = ({text , Value , img}) => {
  return (
    <div className='weatherDataContainer'>
      <div>
        <img src={img}/><span>{text}</span>
      </div>
      <div>
        <span>{Value}</span>
      </div>
    </div>
  )
}

export default WeatherData
