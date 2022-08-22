import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";




function App() {
  // function uniqueCountry() {
  //   let { country } = useParams();
  //   return <div>Now showing post {slug}</div>;
  // }
  return (

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:country" element={<Country />} />
    <Route path="*" element={<Home />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
