import React from 'react';
import '../App.css';

function Photo(props) {
  console.log(props);
  return (
    <>
      <p>Photo of the day:</p>
      <img
        className='image'
        src={props.photo.hdurl}
        alt={props.photo.explanation}
      />
      <p>{props.photo.explanation}</p>
    </>
  );
}

export default Photo;
