import Menu from "../components/Menu";
import React from "react";
import ListCountries from "../components/ListCountries";

const Home = () => {
  return (
    <div className="App">
      <Menu />
      <h1>Welcome to the Earth</h1>
      <ListCountries />
    </div>
  );
};

export default Home;
