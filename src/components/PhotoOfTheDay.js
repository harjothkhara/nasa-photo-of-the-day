import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photo from './Photo';

import '../App.css';

function PhotoOfTheDay() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    // console.log('yo');
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=FeEUwV0YYYaYx8dRtDRaIpOeLf7KENqpvC8czEfO`
      )
      .then(res => {
        console.log(res);
        setPhoto(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Photo photo={photo} />
    </div>
  );
}

export default PhotoOfTheDay;
