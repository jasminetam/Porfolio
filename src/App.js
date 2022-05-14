import React, {useState, useEffect} from 'react';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      {/* {// <SocialMedia />
      <Calendar />
      <MainContainer />
      <Footer /> */ }
    </div>
  );
}

export default App;
