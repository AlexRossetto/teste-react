import './App.css';
import React from 'react';
import Routes from './routes';
import { GoogleApiWrapper } from 'google-maps-react'

function App() {
  return (
    <Routes />
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(App)
