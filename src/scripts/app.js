import $ from 'jquery';
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

var tonicService = (function(){
    
    function getCurrentYear() {
        return (new Date()).getFullYear();
    }
    
    function setCopyrightYear() {
        var $copyright = $("js-copyright-year");

        $copyright.html(getCurrentYear());
    }
    
    function init() {
        document.addEventListener("DOMContentLoaded", function(event) { 
          setCopyrightYear();
        });
    }
    
    return {
        init: init
    }
})();

tonicService.Init();