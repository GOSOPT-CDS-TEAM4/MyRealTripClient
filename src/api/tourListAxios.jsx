import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import axiosInstance from '../api/axios';
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
  const setTourList = useSetRecoilState(tourListData);
  const setTour = useSetRecoilState(tourFullData);
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
    const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
    try {
      const response = await axiosInstance.get(`${BASE_URL}/api/tour/filter?${searchParams.toString()}`);
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
