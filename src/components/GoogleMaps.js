import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import StyledMap from './GoogleMapsStyle.json';

const GoogleMaps = withScriptjs(withGoogleMap(props => (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 60.189157, lng: 24.939011 }}
      defaultOptions={{ styles: StyledMap }}
    >
    {props.isMarkerShown && <Marker position={{ lat: 60.189157, lng: 24.939011 }} />}
    </GoogleMap>
)));

export default GoogleMaps;

