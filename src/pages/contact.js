import React from 'react';
import Link from 'gatsby-link';
import GoogleMaps from '../components/GoogleMaps';
import './contact.scss';

const Contact = () => (
  <div className="contact__container">
    <h1 className="contact__title">Contact</h1>
    <div className="contact__map">
      <GoogleMaps
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%', width: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  </div>
);

export default Contact;
