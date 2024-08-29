// check out https://youtu.be/UjeXpct3p7M 

import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import axios from 'axios';

function Weather(props) {
  return <>
    <br></br> <p>{props.city}</p>
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

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bc33f02bf9c4eb2cebae8666c641e2b2`
  
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }

  const generateWeather = () => {
    let i = Math.floor(Math.random() * 317)
    let city = cities[i]
    console.log(city)
    setLocation(String(city))
    axios.get(url).then((response) => {
      setWeather1(response.data)
      console.log(response.data)
    })
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
        <h1>You've still got better weather than:</h1>
      </div>
      <div className='generatedDiv'>
        <input 
        onClick={generateWeather}
        value='test'
        type='submit'
        />
        <Weather city={location} />
      </div>
    </div>
  );
}

export default App;
