import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Card from './components/Card';
import Apod from './components/Apod';

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
    <div className='App'>
      <p>WHADDUP YO!!!🚀!</p>
      <Apod />
    </div>
  );
}

export default App;
