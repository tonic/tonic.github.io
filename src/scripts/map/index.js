import styles from './styles';

const initMap = () => {
  const mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(39.7577740, -105.0071320),
    scrollwheel: false,
    navigationControl: true,
    mapTypeControl: false,
    scaleControl: false,
    draggable: true,
    disableDefaultUI: true,
    styles: styles
  };

  const mapElement = document.getElementById('map');
  const map = new google.maps.Map(mapElement, mapOptions);

  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(39.7578276, -105.0072071),
    map: map,
    title: 'Tonic, Inc.',
    icon: {
      size: new google.maps.Size(30, 47),
      scaledSize: new google.maps.Size(30, 47),
      url: '/images/marker.png'
    }
  });
}

export default initMap;
