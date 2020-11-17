import React, { useState } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  // const [r,g,b] = bcg;
  // const hex = rgbToHex(...bcg);
  const hexValue = `#${hexColor}`
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className='percent-value'>{weight}%</p>
      {/*  <p className='color-value'>{rgbToHex(r,g,b)}</p>  */}
      {/* <p className='color-value'>{hex}</p> */}
      <p className='color-value'>{hexValue}</p>
      
    </article>
  );
};

export default SingleColor;
