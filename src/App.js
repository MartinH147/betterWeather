// check out https://youtu.be/UjeXpct3p7M 

import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import axios from 'axios';

function Weather(props) {
  return <>
    <div className='weather'>
      <div className='temperature'>
        <h3>{props.temp}°C</h3>
        <h4><span>Feels like: </span>{props.feels_like}°C</h4>
      </div>
      <h2>{props.city}</h2>
      <div className='weatherDetails'>
        <h4>{props.description}</h4>
         <h4><span>Humidity: </span>{props.humidity}%</h4>
        <h4><span>Wind speed: </span>{props.wind} km/h</h4>
      </div>
    </div>
  </> 
}

function Option(props) {
  return <>
    <option>{props.value}</option>
  </>
}

function App() {
  const cities = ['Melbourne', 
    'Sydney', 
    'Brisbane', 
    'Perth', 
    'Adelaide', 
    'Gold Coast', 
    'Cranbourne', 
    'Canberra', 
    'Central Coast', 
    'Wollongong', 
    'Ipswich', 
    'Hobart', 
    'Geelong', 
    'Townsville', 
    'Newcastle', 
    'Cairns', 
    'Darwin', 
    'Ballarat', 
    'Toowoomba', 
    'Bendigo', 
    'Mandurah', 
    'Launceston', 
    'Mackay', 
    'Hervey Bay', 
    'Buderim', 
    'Wagga Wagga', 
    'Pakenham', 
    'Port Macquarie', 
    'Caloundra', 
    'Frankston', 
    'Sunbury', 
    'Gladstone', 
    'Bathurst', 
    'Palmerston', 
    'Southport', 
    'Dandenong', 
    'Warrnambool', 
    'Quakers Hill', 
    'Mount Gambier', 
    'Traralgon', 
    'Whyalla', 
    'Armidale', 
    'Burnie', 
    'Griffith', 
    'Mount Eliza', 
    'Maroochydore', 
    'Taree', 
    'Banora Point', 
    'Lara', 
    'Cessnock', 
    'Horsham', 
    'Murray Bridge', 
    'Wallan', 
    'Australind', 
    'Ormeau', 
    'Barwon Heads', 
    'Mount Barker', 
    'Morwell', 
    'Forster', 
    'Penrith', 
    'Goonellabah', 
    'Leopold', 
    'Campbelltown', 
    'Rutherford', 
    'Nambour', 
    'Corinda', 
    'Muswellbrook', 
    'Kingston', 
    'Grafton', 
    'Bowral', 
    'Kingaroy', 
    'Casino', 
    'Swan Hill', 
    'Parkes', 
    'Mudgee', 
    'Mount Evelyn', 
    'Inverell', 
    'Andergrove', 
    'Nowra', 
    'Flemington', 
    'Colac', 
    'Bargara', 
    'Ballina', 
    'Mareeba', 
    'Moss Vale', 
    'Springwood', 
    'Rye', 
    'Cowra', 
    'Beenleigh', 
    'Tweed Heads', 
    'Emu Plains', 
    'Charters Towers', 
    'Katoomba', 
    'Mooroopna', 
    'Maryborough', 
    'Young', 
    'Narre Warren North', 
    'Clifton Springs', 
    'Castlemaine', 
    'Kingscliff', 
    'Fremantle', 
    'Leeton', 
    'Blaxland', 
    'Kyabram', 
    'Sanctuary Point', 
    'Moama', 
    'Merrimac', 
    'Moree', 
    'Murwillumbah', 
    'Urraween', 
    'Bongaree', 
    'Bomaderry', 
    'Ulverstone', 
    'Dromana', 
    'Helensburgh', 
    'Seymour', 
    'Port Augusta', 
    'Burpengary', 
    'Waterford', 
    'Deniliquin', 
    'Strathalbyn', 
    'Lennox Head', 
    'Nambucca Heads', 
    'Wauchope', 
    'Tumut', 
    'Nuriootpa', 
    'Tuncurry', 
    'Yamba', 
    'Lakes Entrance', 
    'Kurri Kurri', 
    'North Mackay', 
    'Yass', 
    'Mittagong', 
    'Cootamundra', 
    'Cannonvale', 
    'Point Vernon', 
    'Palmwoods', 
    'Leongatha', 
    'Stawell', 
    'Narrabri', 
    'Whittlesea', 
    'Corowa', 
    'Inverloch', 
    'New Norfolk', 
    'Richmond', 
    'Wynyard', 
    'Woolgoolga', 
    'Glen Innes', 
    'Alstonville', 
    'Worragee', 
    'Glenbrook', 
    'Nairne', 
    'Tahmoor', 
    'Scone', 
    'Kiama Downs', 
    'Hazelbrook', 
    'Lithgow', 
    'Encounter Bay', 
    'Boulder', 
    'Salamander Bay', 
    'Albury', 
    'Bucasia', 
    'Millicent', 
    'Churchill', 
    'Renmark', 
    'Wingham', 
    'Maffra', 
    'Glenella', 
    'Rasmussen', 
    'Tanunda', 
    'Old Bar', 
    'George Town', 
    'Wyong', 
    'Broadford', 
    'Drysdale', 
    'Tatura', 
    'Cockatoo', 
    'Deeragun', 
    'Victor Harbor', 
    'Latrobe', 
    'Berri', 
    'Wellington', 
    'Thirlmere', 
    'Legana', 
    'Temora', 
    'The Entrance', 
    'Mansfield', 
    'Gerringong', 
    'Loxton', 
    'Somerset', 
    'Korumburra', 
    'Picton', 
    'Trafalgar', 
    'Pearcedale', 
    'Numurkah', 
    'Peregian Beach', 
    'Narrandera', 
    'Suffolk Park', 
    'Buninyong', 
    'Longford', 
    'Kerang', 
    'Weston', 
    'Sawtell', 
    'Silverdale', 
    'Roxby Downs', 
    'Bay View', 
    'Lismore', 
    'Merimbula', 
    'Scarness', 
    'Lake Cathie', 
    'Paynesville', 
    'Perth', 
    'Maddingley', 
    'Proserpine', 
    'Cobar', 
    'Aldgate', 
    'Port Fairy', 
    'Koo-Wee-Rup', 
    'Penguin', 
    'Beachmere', 
    'Smithton', 
    'McLaren Vale', 
    'Euroa', 
    'Bellingen', 
    'Mullumbimby', 
    'Tura Beach', 
    'Eden', 
    'Red Cliffs', 
    'Bogangar', 
    'Shoalhaven Heads', 
    'Blayney', 
    'Stirling', 
    'Wilton', 
    'Kapunda', 
    'Terranora', 
    'Woori Yallock', 
    'Saint Georges Basin', 
    'Camperdown', 
    'Culburra', 
    'Deloraine', 
    'Tea Gardens', 
    'Bonny Hills', 
    'McCrae', 
    'North Wonthaggi', 
    'Thursday Island', 
    'Urunga', 
    'Vincentia', 
    'West Wyalong', 
    'Howlong', 
    'Lawson', 
    'Narooma', 
    'Quirindi', 
    'Condobolin', 
    'Margate', 
    'Aberdare', 
    'Dodges Ferry', 
    'Gilgandra', 
    'Launching Place', 
    'Goolwa', 
    'Rutherglen', 
    'Hahndorf', 
    'Willunga', 
    'Sandy Beach', 
    'Hadspen', 
    'Beaconsfield Upper', 
    'Hill Top', 
    'Williamstown', 
    'Jindabyne', 
    'Freeling', 
    'Lobethal', 
    'The Oaks', 
    'Baxter', 
    'Saint Arnaud', 
    'Esperance', 
    'Heddon Greta', 
    'Freshwater', 
    'Grenfell', 
    'Bangalow', 
    'Kawana Waters', 
    'Orbost', 
    'Manilla', 
    'Camden Haven', 
    'Wallerawang', 
    'Wattleglen', 
    'Mulwala', 
    'Barmera', 
    'Windsor', 
    'Woodside', 
    'Lyndoch', 
    'Batehaven', 
    'Queenstown', 
    'Yarram', 
    'Brunswick Heads', 
    'Waikerie', 
    'Westbury', 
    'Yaroomba', 
    'Curlewis', 
    'Denman', 
    'Bourke', 
    'Nathalia', 
    'Tathra', 
    'Cobden', 
    'Drummond Cove', 
    'Canowindra', 
    'Yarragon', 
    'Walgett', 
    'Surfside', 
    'Seven Mile Beach', 
    'San Remo', 
    'Greenwell Point', 
    'Valley Heights', 
    'Oakdale', 
    'Yallourn North', 
    'Innisfail', 
    'Mollymook', 
    'Evandale', 
    'Wahgunyah']

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [weather1, setWeather1] = useState({});
  const [weather2, setWeather2] = useState({});
  const [weather3, setWeather3] = useState({});
  const [weather4, setWeather4] = useState({});
  const [weather5, setWeather5] = useState({});
  const [options, setOptions] = useState([]);


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bc33f02bf9c4eb2cebae8666c641e2b2`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      console.log(location)
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      generateWeather()
    }
  }

  function generateWeather() {
    for (let i = 0; i < 5; i++ ) {
      let x = Math.floor(Math.random() * 317)
      let city = cities[x]
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bc33f02bf9c4eb2cebae8666c641e2b2`
      try {
        axios.get(url).then((response) => {
          try {
            if (response.data.main.temp < data.main.temp) {
              switch (i) {
                case 0:
                  setWeather1(response.data)
                  console.log(weather1) // The set function only updates the state variable for the next render. If you read the state variable after calling the set function, you will still get the old value that was on the screen before your call.
                  break;
                case 1:
                  setWeather2(response.data)
                  break;
                case 2:
                  setWeather3(response.data)
                  break;
                case 3:
                  setWeather4(response.data)
                  break;
                case 4:
                  setWeather5(response.data)
                  break;  
              }
            } else {
              generateWeather()
            }
          } catch(err) {
            alert(
              "Could not generate weather" + "\n" +
              "Debug: " + err
            )
          }
        })
      } catch(err) {
        alert(
          "Could not generate weather" + "\n" +
          "Debug: " + err
        )
      }
    }
  }

  function updateOptions(option) {
    if (option = 'Temperature') {
      setOptions([
        ...options,
         'Cooler' 
      ]);
    }
  }

  return (
    <div className='App'>
      <div className='header'>
        <div className='title'>
          <img src='./cloudy.png'/>
          <h1>Better Weather</h1>
        </div>
        <input 
        value={location} 
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type='text'
        />
      </div>
      <div className='userDiv'>
        <div className='weather'>
          <div className='temperature'>
            {data.main ? <h3>{Math.round(data.main.temp -273.15)}°C</h3> : null}
            {data.main ? <h4><span>Feels like: </span>{Math.round(data.main.feels_like -273.15)}°C</h4> : null}
          </div>
          <h2>{data.name}</h2>
          <div className='weatherDetails'>
            {data.weather ? <h4>{(data.weather[0].description)}</h4> : null}
            {data.main ? <h4><span>Humidity: </span>{(data.main.humidity)}%</h4> : null}
            {data.wind ? <h4><span>Wind speed: </span>{(data.wind.speed)} km/h</h4> : null}
          </div>
        </div>
      </div>
      <div className='middleText'>
        <h1>You've still got </h1> 
        <select>
          <option onChange={console.log(options)}>{options[0]}</option>
          <option>{options[1]}</option>
        </select>
        <select>
          <Option value={'Temperature'} onChange={event => updateOptions(event.target.value)}/>
          <Option value={'Humidity'} onChange={event => updateOptions(event.target.value)}/>
          <Option value={'Wind'} onChange={event => updateOptions(event.target.value)}/>
        </select>
        <h1> than:</h1>
      </div>
      <div className='generatedDiv'>
        <Weather 
        city={weather1.name ? weather1.name : null} 
        temp={weather1.main ? Math.round(weather1.main.temp -273.15) : null} 
        feels_like={weather1.main ? Math.round(weather1.main.feels_like -273.15) : null} 
        description={weather1.weather ? weather1.weather[0].description : null} 
        humidity={weather1.main ? weather1.main.humidity : null} 
        wind={weather1.wind ? weather1.wind.speed : null} 
        />
        <Weather 
        city={weather2.name ? weather2.name : null} 
        temp={weather2.main ? Math.round(weather2.main.temp -273.15) : null} 
        feels_like={weather2.main ? Math.round(weather2.main.feels_like -273.15) : null} 
        description={weather2.weather ? weather2.weather[0].description : null} 
        humidity={weather2.main ? weather2.main.humidity : null} 
        wind={weather2.wind ? weather2.wind.speed : null} 
        />
        <Weather 
        city={weather3.name ? weather3.name : null} 
        temp={weather3.main ? Math.round(weather3.main.temp -273.15) : null} 
        feels_like={weather3.main ? Math.round(weather3.main.feels_like -273.15) : null} 
        description={weather3.weather ? weather3.weather[0].description : null} 
        humidity={weather3.main ? weather3.main.humidity : null} 
        wind={weather3.wind ? weather3.wind.speed : null} 
        />
        <Weather 
        city={weather4.name ? weather4.name : null} 
        temp={weather4.main ? Math.round(weather4.main.temp -273.15) : null} 
        feels_like={weather4.main ? Math.round(weather4.main.feels_like -273.15) : null} 
        description={weather4.weather ? weather4.weather[0].description : null} 
        humidity={weather4.main ? weather4.main.humidity : null} 
        wind={weather4.wind ? weather4.wind.speed : null} 
        />
        <Weather 
        city={weather5.name ? weather5.name : null} 
        temp={weather5.main ? Math.round(weather5.main.temp -273.15) : null} 
        feels_like={weather5.main ? Math.round(weather5.main.feels_like -273.15) : null} 
        description={weather5.weather ? weather5.weather[0].description : null} 
        humidity={weather5.main ? weather5.main.humidity : null} 
        wind={weather5.wind ? weather5.wind.speed : null} 
        />
      </div>
    </div>
  );
}

export default App;
