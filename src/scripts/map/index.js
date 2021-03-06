import styles from './styles';

const initMap = () => {
  const mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(39.751263, -104.999771),
    navigationControl: true,
    mapTypeControl: false,
    scaleControl: false,
    disableDefaultUI: true,
    draggable: false,
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    styles: styles
  };

  const mapElement = document.getElementById('map');
  const map = new google.maps.Map(mapElement, mapOptions);

  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(39.7555539,-105.0022813),
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
