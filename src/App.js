// check out https://youtu.be/UjeXpct3p7M 

import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bc33f02bf9c4eb2cebae8666c641e2b2`
  
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }

  return (
    <div className='App'>
      <input 
      value={location} 
      onChange={event => setLocation(event.target.value)}
      onKeyPress={searchLocation}
      placeholder='Enter Location'
      type='text'
      />
      <h1>{data.name}</h1>
      {data.main ? <h2>{data.main.temp}</h2> : null}
    </div>
  );
}

export default App;
