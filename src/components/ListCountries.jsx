import React, {useState,useEffect} from "react";
import CardCountry from "./CardCountry";
import axios from "axios";

const ListCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));

    
  }, []);

  return (
    <div className="listCountries">

      {countries.map((country, index) => (
        <CardCountry key={index} country={country}/>
      ))}

    </div>
  );
};

export default ListCountries;
