import React, { useEffect, useState } from 'react';
import "./flag.css";

function Flag() {

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {

    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => setCountries(data))
    .catch((error) => console.error("Error fetchin data: ", error))
  }, []);

const handleSearch = (e) => {
             setSearch(e.target.value);
}

const filteredCountries = countries.filter(item => item.name.common.toLowerCase().includes(search.toLowerCase()));


 return (
    <div className = "containerStyle">
        <input 
        type="text" 
        placeholder='Search for countries'
        value={search} 
        onChange={handleSearch}
        className='search'
        />
      <div className="flagContainer">
        {filteredCountries.map((item) => (
          <div key={item.cca3} className="countryCard">
            <img
              src={item.flags.png}
              alt={`FLAG of ${item.name.common}`}
              className="flagStyle"
            />
            <h2>{item.name.common}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Flag;