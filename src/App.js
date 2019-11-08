import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import GlobalStyle from './style/Global';
import Card from './components/Card';
import Apod from './components/Apod';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/EPIC/api/natural/images?api_key=FeEUwV0YYYaYx8dRtDRaIpOeLf7KENqpvC8czEfO`
      )
      .then(res => setData(res.data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <Header />
        <Apod />
        <Footer />
      </div>
    </>
  );
}

export default App;
