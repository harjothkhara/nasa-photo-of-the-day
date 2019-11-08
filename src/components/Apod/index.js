import React, { Fragment, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import DateSelector from '../Date';

export default function Apod() {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

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
      <DateSelector date={date} setDate={setDate} />
      <h2>{image.title}</h2>
      <img src={image.hdurl} alt={image.title} />
      <h3>{image.explanation}</h3>
    </div>
  );
}
