import React from 'react';
import axios from 'axios';
import './App.css';

import Card from './components/Card';
import Apod from './components/Apod';

function App() {
  const [apod, setApod] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=FeEUwV0YYYaYx8dRtDRaIpOeLf7KENqpvC8czEfO`
      )
      .then(res => setApod(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`
      )
      .then(res => setData(res.data.photos.slice(830, 855)));
  }, []);

  return (
    <div className='App'>
      <p>WHADDUP YO!!!🚀!</p>
      <Apod data={apod} />
    </div>
  );
}

export default App;
