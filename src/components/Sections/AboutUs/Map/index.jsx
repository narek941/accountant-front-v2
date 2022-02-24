import React from 'react';
import {
  Marker,
  GoogleMap,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps';

import { mapStyles } from 'utils/index';

const location = {
  lat: 40.1950407,
  lng: 44.4952705,
};

const InjectableGoogleMap = () => (
  <GoogleMap
    defaultZoom={17}
    defaultCenter={location}
    options={{
      styles: mapStyles,
      disableDefaultUI: true,
      fullscreenControl: true,
      zoomControl: true,
    }}
  >
    <Marker
      position={location}
      icon={{
        url: 'images/MapLocation.svg',
        scaledSize: new window.google.maps.Size(48.13, 64),
      }}
    />
  </GoogleMap>
);

const Map = withScriptjs(withGoogleMap(InjectableGoogleMap));

export default Map;
