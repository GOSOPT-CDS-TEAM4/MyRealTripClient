import axios from 'axios';
import { useEffect, useState } from 'react';

function useDetailTour(tourId) {
  const [detailTour, setDetailTour] = useState('');

  const getData = async () => {
    try {
      const data = await axios.get(`https://api.my-real-trip.o-r.kr/api/tour/detail/${tourId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
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
