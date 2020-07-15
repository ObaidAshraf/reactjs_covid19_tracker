import React, { useState, useEffect } from 'react';
// import './App.css';
import Header from './components/Header'
import Info from './components/Info'

import { fetchCountry } from './Api'


function App() {

  let [countries, setCountries] = useState([])

  useEffect( () => {
    fetchCountry().then(data => { setCountries(data) })
  }, [])

  return (
    <div style={{backgroundColor: '#eee'}}>
      <Header />
      <Info countries={countries} />
    </div>
  );
}

export default App;
