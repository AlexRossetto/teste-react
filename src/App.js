import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [postalCode, setPostal] = useState('')
    const [country, setCountry] = useState('') 

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(address , city , province, postalCode, country)
    
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className="Container">
          <div className="Inner-container">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              id="address"
              maxLength="100" 
              placeholder="Street address"
              onChange={event => setAddress(event.target.value)} 
              required
            />
            <input 
              type="text" 
              id="city"
              maxLength="100" 
              placeholder="City"
              onChange={event => setCity(event.target.value)} 
              required 
            />
            <input 
              type="text"
              maxLength="100" 
              id="province" 
              placeholder="Province"
              onChange={event => setProvince(event.target.value)} 
              required
            />
            <input 
              type="number" 
              id="postal" 
              placeholder="Postal Code"
              onChange={event => setPostal(event.target.value)} 
              required
            />
            <input 
              type="text"
              maxLength="100" 
              id="country" 
              placeholder="Country"
              onChange={event => setCountry(event.target.value)} 
              required 
            />
            <button className="btn" type="submit">Go!</button>
            </form>
          </div>
      </div>  
      </header>
    </div>
  );
}

export default App;
