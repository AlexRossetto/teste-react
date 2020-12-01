import './App.css';
import React, { useState } from 'react';
import Routes from './services/routes';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import axios from 'axios';



function App() {
  return (
    <Routes />
  );
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDDF_h5Ey-IhCHURBLT97qjEthtD8pvXE4'
})(App)
