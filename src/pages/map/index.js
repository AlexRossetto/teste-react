import React, { useState , useEfect } from 'react';
import { useEffect } from 'react/cjs/react.production.min';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './index.css';

export default function Mapa({ history }) {

  
    const lat = localStorage.getItem('lat')
    const lng = localStorage.getItem('lng')
    const timeZone = JSON.parse(localStorage.getItem('timeZone'))

    console.log(lat, "latitude NA PAGINA MAPA")
    console.log(lng, "longitude NA PAGINA MAPA")
    console.log(timeZone, "TIMEZONE NA PAGINA MAPA")


  async function teste() {

    history.push('/')
  }

    return (
    <>
    {/* <Map google={this.props.google} zoom={14}>
      <Marker onClick={this.onMarkerClick}
        name={'Current location'} />
      <InfoWindow onClose={this.onInfoWindowClose}>
        <div>
          <h1>{this.state.selectedPlace.name}</h1>
        </div>
      </InfoWindow>
    </Map> */}
  </>
  )
}

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDDF_h5Ey-IhCHURBLT97qjEthtD8pvXE4'
// })(Mapa)