// check out https://youtu.be/UjeXpct3p7M 

import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const cities = ["Kabul", "Tirana", "Algiers", "Andorra la Vella", "Luanda", "Saint John's", "Buenos Aires", "Yerevan", "Canberra", "Vienna", "Baku", "Nassau", "Manama", "Dhaka","Bridgetown","Minsk", "Brussels", "Belmopan", "Porto-novo", "Thimphu", "La Paz/Sucre", "Sarajevo", "Gaborone", "Brasilia", "Bandar Seri Begawan", "Sofia", "Ouagadougou", "Gitega", "Phnom Penh", "Yaounde", "Ottawa", "Cape verde", "Bangui", "N'Djamena", "Santiago", "Beijing", "Bogotá", "Moroni", "Brazzaville", "Kinshasa", "San Jose", "Yamoussoukro", "Zagreb", "Havana", "Nicosia", "Prague", "Copenhagen", "Djibouti", "Roseau", "Santo Domingo", "Dili", "Quito", "Cairo", "San Salvador", "Malabo/Oyala", "Asmara", "Tallinn", "Mbabane/Lobamba", "Addis Ababa", "Suva", "Helsinki", "Paris", "Libreville", "Banjul", "Tblisi", "Berlin", "Accra", "Athens", "Saint George's", "Guatemala City", "Conakry", "Bissau", "Georgetown", "Port-au-Prince", "Vatican City", "Tegucigalpa", "Budapest", "Reykjavik", "New Delhi", "Jakarta", "Tehran", "Baghdad", "Dublin", "Jerusalem", "Rome", "Kingston", "Tokyo", "Amman", "Astana", "Nairobi", "Tarawa", "Kuwait City", "Bishkek", "Vientiane", "Riga", "Beirut", "Maseru", "Monrovia", "Tripoli", "Vaduz", "Vilnius", "Luxembourg", "Antananarivo", "Lilongwe", "Kuala Lumpur", "Male", "Bamako", "Valletta", "Majuro", "Nouakchott", "Port Louis", "Mexico City", "Palikir", "Chisinau", "Monaco", "Ulaanbaatar", "Podgorica", "Rabat", "Maputo", "Naypyidaw", "Windhoek", "Yaren", "Kathmandu", "Amsterdam", "Wellington", "Managua", "Niamey", "Abuja", "Pyongyang", "Skopje", "Oslo", "Muscat", "Islamabad", "Ngerulmud", "Jerusalem", "Panama City", "Port Moresby", "Asuncion", "Lima", "Manila", "Warsaw", "Lisbon", "Doha", "Bucharest", "Moscow", "Kigali", "Basseterre", "Castries", "Kingstown", "Apia", "San Marino", "Sao Tome", "Riyadh", "Dakar", "Belgrade", "Victoria", "Freetown", "Singapore", "Bratislava", "Ljubljana", "Honiara", "Mogadishu", "Pretoria/Cape Town/Bloemfontein", "Seoul", "Juba", "Madrid", "Sri Jayawardenepura Kotte", "Khartoum", "Paramaribo", "Stockholm", "Bern", "Damascus", "Dushanbe", "Dodoma", "Bangkok", "Lome", "Nuku'alofa", "Port of Spain", "Tunis", "Ankara", "Ashgabat", "Funafuti", "Kampala", "Kyiv", "Abu Dhabi", "London", "Washington", "Montevideo", "Tashkent", "Port Vila", "Caracas", "Hanoi", "Sana'a", "Lusaka", "Harare"]

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
