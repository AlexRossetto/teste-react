import React, { useState } from 'react';
import Routes from '../../services/routes';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import axios from 'axios';
import './index.css';


function Home({history}) {

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [postalCode, setPostal] = useState('')
    const [country, setCountry] = useState('') 

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(address , city , province, postalCode, country)


   let latLong = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address},${city},${province}&key=AIzaSyDDF_h5Ey-IhCHURBLT97qjEthtD8pvXE4`)
     
   console.log(latLong, "Latitude e Longitude")

   let timeStamp = Math.floor(Date.now() / 1000)
  
   console.log(timeStamp, "whats in here?") 

   let timeZone = await axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${latLong.data.results[0].geometry.location.lat},${latLong.data.results[0].geometry.location.lng}&timestamp=${timeStamp}&key=AIzaSyDDF_h5Ey-IhCHURBLT97qjEthtD8pvXE4`)
    
   
   console.log(timeZone, "timezone")

   localStorage.setItem('lat', latLong.data.results[0].geometry.location.lat);
   localStorage.setItem('lng', latLong.data.results[0].geometry.location.lng);
   localStorage.setItem('timeZone', JSON.stringify(timeZone.data));

   history.push({
    pathname: '/map'
   })
    
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


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDDF_h5Ey-IhCHURBLT97qjEthtD8pvXE4'
})(Home)
