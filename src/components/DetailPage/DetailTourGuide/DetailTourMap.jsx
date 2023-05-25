import React, { useCallback, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import useDetailTour from '../../../utils/useDetailTour';

function DetailTourMap() {
  const { tourId } = useParams();
  const detailTour = useDetailTour(tourId);
  const mapRef = useRef(null);

  const latitude = detailTour?.guideResponseDto?.locationResponseDto?.latitude;
  const longtitude = detailTour?.guideResponseDto?.locationResponseDto?.longtitude;

  const initMap = useCallback(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: latitude, lng: longtitude },
      zoom: 50,
    });
  }, [latitude, longtitude, mapRef]);

  useEffect(() => {
    initMap();
  }, [latitude, longtitude, mapRef]);
  return <div className="map" style={{ width: '345px', height: '154px', borderRadius: '8px' }} ref={mapRef}></div>;
}

export default DetailTourMap;
