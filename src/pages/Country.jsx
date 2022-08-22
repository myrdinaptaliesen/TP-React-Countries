import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from 'react-router-dom';
import Menu from "../components/Menu";

const Country = () => {

    const {country} = useParams();
    console.log(country);
    const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/name/'+country)
      .then((res) => setCountries(res.data));

    
  }, []);
    return (
        <div>
          <Menu />
            {countries.map((country, index) => (
        <p key={index}>{country.name.common}</p>
      ))}
            
        </div>
    );
};

export default Country;