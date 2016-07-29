import $ from 'jquery';
import initMap from './map';

google.maps.event.addDomListener(window, 'load', initMap);

$(function() {
  var $form = $('form#contact');

  $form.submit(function(event) {
    event.preventDefault();

    var name    = $form.find('input[name="name"]').val();
    var email   = $form.find('input[name="email"]').val();
    var phone   = $form.find('input[name="phone"]').val();
    var message = $form.find('textarea[name="message"]').val();

    var data = {
      lead: {
        name: name,
        email: email,
        phone: phone,
        message: message
      }
    };

    $.ajax({
      type: 'POST',
      url: 'http://leads.tonic.io/api/leads',
      data: data,
      dataType: 'json',
      encode: true
    })
    .done(function(data) {
      console.log(data);
    });
  });
});
