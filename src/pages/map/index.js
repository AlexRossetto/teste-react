import React, { useEffect, useState, useMemo } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './index.css';
import { Link } from 'react-router-dom';

 function Mapa({ history }) {
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [timezone, setTimezone] = useState(null)
  const mapStyles = {
    width: '100%',
    height: '70%',
  };

useEffect(() => {
// seta o estado do componenent
  setLat(localStorage.getItem('lat'))
  setLng(localStorage.getItem('lng'))
  setTimezone(JSON.parse(localStorage.getItem('timeZone')))
},[])

  if (!lat || !lng || !timezone) {
    debugger
    console.log("caiu aqui")
    return null;
  }

  console.log(lat, "latitude NA PAGINA MAPA")
  console.log(lng, "longitude NA PAGINA MAPA")
  console.log(timezone, "TIMEZONE NA PAGINA MAPA")

    return (
      <>
      <div>
        <div>
          <Map
              google={window.google}
              zoom={15}
              style={mapStyles}
              initialCenter={{ lat: lat, lng: lng}}
            >
            <Marker position={{ lat: lat, lng: lng}} />
          </Map>
        </div>
        <div>
        </div> 
      </div>  
      </>
    );
  }


export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(Mapa)
