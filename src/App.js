// Values.js
// https://github.com/noeldelgado/values.js

import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

function App() {
  const defaultColor = '#5cf50a';
  const [color, setColor] = useState('');
  const [err, setErr] = useState(false);
  const [list, setList] = useState(new Values(defaultColor).all(10));

  const handleSUbmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setErr(false);
    } catch (error) {
      setErr(true);
      console.log('ERROR !!!');
    }
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSUbmit}>
          <input
            type='text'
            placeholder={defaultColor}
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${err ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>

      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
