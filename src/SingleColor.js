import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  // const [r,g,b] = bcg;
  // const hex = rgbToHex(...bcg);
  const hexValue = `#${hexColor}`;

  const handleClipboard = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  useEffect(() => {
   const timeoutID = setTimeout( () => setAlert(false), 3000)
   return () => clearTimeout(timeoutID)
  }, [alert]);
  

  return (
    <article
      onClick={handleClipboard}
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className='percent-value'>{weight}%</p>
      {/*  <p className='color-value'>{rgbToHex(r,g,b)}</p>  */}
      {/* <p className='color-value'>{hex}</p> */}
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
