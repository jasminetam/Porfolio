import React, {useState, useEffect} from 'react';
import SinglePost from './Components/pages/SinglePost/SinglePost';
import Navigation from './Components/Navigation/Navigation';
import './App.css';



function App() {
  return (
    <div className="App">
      <Navigation />
      <SinglePost />
      {/* {// <SocialMedia />
      <Calendar />
      <MainContainer />
      <Footer /> */ }
    </div>
  );
}

export default App;
