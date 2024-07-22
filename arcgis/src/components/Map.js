import React, { useEffect, useRef } from 'react';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';

const Map = () => {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const webMap = new WebMap({
        portalItem: {
          id: 'your-web-map-id' // Replace with your Web Map ID
        }
      });

      new MapView({
        container: mapDiv.current,
        map: webMap
      });
    }
  }, []);

  return <div style={{ height: '100vh', width: '100vw' }} ref={mapDiv}></div>;
};

export default Map;
