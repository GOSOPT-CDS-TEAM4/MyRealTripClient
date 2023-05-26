import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  tourListData,
  tourFullData,
  cityNameData,
  maximumPriceData,
  minimumPriceData,
  pageData,
  sortData,
  tourTypeData,
} from '../recoil/tourListRecoil';

const TourListAxios = () => {
  const [tourList, setTourList] = useRecoilState(tourListData);
  const [tour, setTour] = useRecoilState(tourFullData);
  const cityName = useRecoilValue(cityNameData);
  const sort = useRecoilValue(sortData);
  const tourType = useRecoilValue(tourTypeData);
  const maximumPrice = useRecoilValue(maximumPriceData);
  const minimumPrice = useRecoilValue(minimumPriceData);
  const page = useRecoilValue(pageData);

  const [searchParams] = useSearchParams();
  searchParams.set('city', cityName);
  searchParams.set('order', sort);
  searchParams.set('minimumPrice', minimumPrice);
  searchParams.set('maximumPrice', maximumPrice);
  searchParams.set('tourType', tourType);
  searchParams.set('page', page);

  const getRawTourList = async (searchParams) => {
    try {
      const response = await axios.get(`https://15.165.135.183:8080/api/tour/filter?${searchParams.toString()}`);
      setTourList(response.data.data.tourList);
      setTour(response.data.data);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getRawTourList(searchParams);
  }, [searchParams, cityName, sort, minimumPrice, maximumPrice, tourType, page]);
};

export default TourListAxios;
