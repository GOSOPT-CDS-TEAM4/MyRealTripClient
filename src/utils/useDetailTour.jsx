import { useEffect, useState } from 'react';

import axiosInstance from '../api/axios';

function useDetailTour(tourId) {
  const [detailTour, setDetailTour] = useState('');

  const getData = async () => {
    try {
      const data = await axiosInstance.get(`https://api.my-real-trip.o-r.kr/api/tour/detail/${tourId}`);
      setDetailTour(data.data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, [tourId]);

  return detailTour;
}

export default useDetailTour;
