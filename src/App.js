import React, {useState, useEffect} from 'react';
import Home from './Components/pages/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import './App.css';



function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      {/* {// <SocialMedia />
      <Calendar />
      <MainContainer />
      <Footer /> */ }
    </div>
  );
}

export default App;
