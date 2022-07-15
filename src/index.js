import React from 'react';
import ReactDOM from 'react-dom/client';
import Motion from './components/Motion/motion.js'
import Fr45 from './components/Rules/Rules.js';
import Fr46 from './components/Costs/Costs.js'
import Fr47 from './components/AffiliateProgram/AffiliateProgram.js';
import Fr48 from './components/BudgetAllocation/BudgetAllocation.js'
import Fr49 from './components/LevelStructure/LevelStructure.js';
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

