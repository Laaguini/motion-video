import React from 'react';
import ReactDOM from 'react-dom/client';
import Motion from './motion.js'
import Fr45 from './fr45.js';
import Fr46 from './fr46.js'
import Fr47 from './fr47.js';
import Fr48 from './fr48.js'
import Fr49 from './fr49.js';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Motion>
      <Fr45 />
      <Fr46 />
      <Fr47 />
      <Fr48 />
      <Fr49 />
    </Motion>
  </React.StrictMode>
);

