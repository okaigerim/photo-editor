import React, { useState, useRef } from 'react';

import { Navbar } from './Navbar';
import { Announcement } from './Announcement';

const App = () => {
  const imageRef = useRef(null);

  const [brightness, setBrightness] = useState({
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  });

  const [contrast, setContrast] = useState({
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  });

  const [saturate, setSaturate] = useState({
    name: 'Saturate',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  });

  const [grayscale, setGrayscale] = useState({
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  });

  const [sepia, setSepia] = useState({
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  });

  const [hueRotate, setHueRotate] = useState({
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  });

  const [blur, setBlur] = useState({
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  });

  const [background, setBackground] = useState('https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg');

  const handleDownload = () => {
    const img = imageRef.current;

    if (img) {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');

      ctx.filter = img.style.filter;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'edited-image.png';
        link.click();
      });
    }
  };

  return (
    <div>
      <Announcement />
      <Navbar setBackground={setBackground} />
      <div className='wrapper'>
        <div className='image-wrapper'>
          <div className='image'>
            <img 
              ref={imageRef}
              src={background} 
              crossOrigin="anonymous"
              alt="img" 
              style={{filter: `${brightness.property}(${brightness.value}${brightness.unit}) 
                                ${blur.property}(${blur.value}${blur.unit})
                                ${contrast.property}(${contrast.value}${contrast.unit})
                                ${saturate.property}(${saturate.value}${saturate.unit})
                                ${grayscale.property}(${grayscale.value}${grayscale.unit})
                                ${sepia.property}(${sepia.value}${sepia.unit})
                                ${hueRotate.property}(${hueRotate.value}${hueRotate.unit})
                                `}}
              />
          </div>
        </div>

        <div className='options'>
          <div className="mode">
            <span>Brightness</span>
            <input 
              type="range" 
              max={brightness.range.max} 
              min={brightness.range.min}
              value={brightness.value}
              onChange={(e) => {setBrightness({...brightness, value: Number(e.target.value)})}} 
            />
            <span>Blur</span>
            <input 
              type="range" 
              max={blur.range.max} 
              min={blur.range.min}
              value={blur.value}
              onChange={(e) => {setBlur({...blur, value: Number(e.target.value)})}} 
            />
          </div>
          <div className="mode">
            <span>Contrast</span>
            <input 
              type="range" 
              max={contrast.range.max} 
              min={contrast.range.min}
              value={contrast.value}
              onChange={(e) => {setContrast({...contrast, value: Number(e.target.value)})}} 
            />
            <span>Saturate</span>
            <input 
              type="range" 
              max={saturate.range.max} 
              min={saturate.range.min}
              value={saturate.value}
              onChange={(e) => {setSaturate({...saturate, value: Number(e.target.value)})}} 
            />
          </div>
          <div className="mode">
            <span>Grayscale</span>
            <input 
              type="range" 
              max={grayscale.range.max} 
              min={grayscale.range.min}
              value={grayscale.value}
              onChange={(e) => {setGrayscale({...grayscale, value: Number(e.target.value)})}} 
            />
            <span>Sepia</span>
            <input 
              type="range" 
              max={sepia.range.max} 
              min={sepia.range.min}
              value={sepia.value}
              onChange={(e) => {setSepia({...sepia, value: Number(e.target.value)})}} 
            />
          </div>
          <div className="mode hue">
            <span>Hue Rotate</span>
            <input 
              type="range" 
              max={hueRotate.range.max} 
              min={hueRotate.range.min}
              value={hueRotate.value}
              onChange={(e) => {setHueRotate({...hueRotate, value: Number(e.target.value)})}} 
            />
          </div>
        </div>
      </div>
      
      <button className="download-btn" onClick={handleDownload}>
        Download Edited Image
      </button>
    </div>
  );
}

export default App;
