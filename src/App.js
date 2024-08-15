import React, { useState } from 'react';

import img from './kimono.avif';

const App = () => {
  const [brightness, setBrightness] =useState({
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  });

  const [contrast, setContrast] =useState({
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  });

  const [saturation, setSaturation] =useState({
    name: 'Saturation',
    property: 'saturation',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  });

  const [grayscale, setGrayscale] =useState({
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  });

  const [sepia, setSepia] =useState({
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  });

  const [hueRotate, setHueRotate] =useState({
    name: 'Hue Rotate',
    property: 'hue rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  });

  const [blur, setBlur] =useState({
    name: 'blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  });

  return (
    <div>
      <div className='wrapper'>
        <div className='image-wrapper'>
          <div className='image'>
            <img 
              src={img} 
              alt="img" 
              style={{filter: `${brightness.property}(${brightness.value}${brightness.unit}) ${blur.property}(${blur.value}${blur.unit})`}}
            />
          </div>
        </div>
        <div className="mode">
          <span>Brightness</span>
          <input 
            type="range" 
            max={brightness.range.max} 
            min={brightness.range.min}
            onChange={(e) => {setBrightness({...brightness, value: `${e.target.value}`})}} 
          />
          <span>Blur</span>
          <input 
            type="range" 
            max={blur.range.max} 
            min={blur.range.min}
            onChange={(e) => {setBlur({...blur, value: `${e.target.value}`})}} 
          />
        </div>
        <div className="mode">
          <span>Contrast</span>
          <input 
            type="range" 
            max={contrast.range.max} 
            min={contrast.range.min}
            onChange={(e) => {setContrast({...contrast, value: `${e.target.value}`})}} 
          />
          <span>Saturation</span>
          <input 
            type="range" 
            max={saturation.range.max} 
            min={saturation.range.min}
            onChange={(e) => {setSaturation({...saturation, value: `${e.target.value}`})}} 
          />
        </div>
        <div className="mode">
          <span>Grayscale</span>
          <input 
            type="range" 
            max={grayscale.range.max} 
            min={grayscale.range.min}
            onChange={(e) => {setGrayscale({...grayscale, value: `${e.target.value}`})}} 
          />
          <span>Sepia</span>
          <input 
            type="range" 
            max={sepia.range.max} 
            min={sepia.range.min}
            onChange={(e) => {setSepia({...sepia, value: `${e.target.value}`})}} 
          />
        </div>
        <div className="mode hue">
          <span>Hue Rotate</span>
          <input 
            type="range" 
            max={hueRotate.range.max} 
            min={hueRotate.range.min}
            onChange={(e) => {setHueRotate({...hueRotate, value: `${e.target.value}`})}} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
