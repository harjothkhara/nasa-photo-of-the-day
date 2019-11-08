import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import DateSelector from '../Date';

import getDays from '../../util/getDays';

export default function Apod() {
  const days = getDays(5);
  const [date, setDate] = useState(days[0]);
  const [image, setImage] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date={date}&api_key=FeEUwV0YYYaYx8dRtDRaIpOeLf7KENqpvC8czEfO`
      )
      .then(res => setImage(res.data));
  }, [date]);

  return (
    <div>
      <DateSelector days={days} date={date} setDate={setDate} />
      <h2>{image.title}</h2>
      <img src={image.hdurl} alt={image.title} />
      <h3>{image.explanation}</h3>
    </div>
  );
}
