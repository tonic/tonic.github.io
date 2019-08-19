import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './components/ContactForm';
import initMap from './map';
import { Promise } from 'es6-promise';

google.maps.event.addDomListener(window, 'load', initMap);

ReactDOM.render(
  <ContactForm />,
  document.getElementById('contact-form')
);

function contactFocus(e) {
  if ('#contact' === window.location.hash) {
    setTimeout(() => document.querySelector('#contact-form input[name="name"]').focus(), 100);
  }
}

window.addEventListener('hashchange', contactFocus);
window.addEventListener('load', contactFocus);
document.querySelector('.values .btn').addEventListener('click', contactFocus);
