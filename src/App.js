import React from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/Line';

const App = () => {
  return (
    <div>
      <h1>Charts</h1>
      <LineChart/>
      <BarChart/>
    </div>
  );
}

export default App;
