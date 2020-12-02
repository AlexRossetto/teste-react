import React, { useEffect, useState } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import './index.css';

function Mapa({ history }) {
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [timezone, setTimezone] = useState(null)

  useEffect(() => {
    setLat(localStorage.getItem('lat'))
    setLng(localStorage.getItem('lng'))
    setTimezone(JSON.parse(localStorage.getItem('timeZone')))
  }, [])

  if (!lat || !lng || !timezone) {
    return null;
  }

  function Voltar() {
    localStorage.clear();
    history.push('/')
  }

  function calcTime(timezone) {
    let d = new Date().toLocaleString("en-US", { timeZone: timezone })
    let timezoneDate = new Date(d)

    return `${timezoneDate.getHours()}:${timezoneDate.getMinutes()} ${timezoneDate.getHours() >= 12 ? 'PM' : ''}`
  }

  return (
    <>
      <div className="Container">
        <div className="Wrapper">
          <div className="Text">
            <h2>{timezone.address}</h2>
            <h3> {calcTime(timezone.timeZoneId)} {timezone.timeZoneName}</h3>
          </div>
          <div className="Map">
            <Map
              google={window.google}
              zoom={15}

              initialCenter={{ lat, lng }}
            >
              <Marker position={{ lat, lng }} />
            </Map>
          </div>
          <button onClick={() => Voltar()} className="btn button">{'< Back'}</button>
        </div>
      </div>
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(Mapa)
