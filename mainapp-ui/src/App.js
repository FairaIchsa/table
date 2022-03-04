import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Table from './components/Table';

function App() {

  return (
    <div className="App">
      <h1>SPA Table</h1>
      <Table />
    </div>
  );
}

export default App;
