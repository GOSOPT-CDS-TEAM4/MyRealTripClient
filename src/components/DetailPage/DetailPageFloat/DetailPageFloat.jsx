import { useState } from 'react';
import { useParams } from 'react-router-dom/';

import { styled } from 'styled-components';

import axiosInstance from '../../../api/axios';
import useDetailTour from '../../../utils/useDetailTour';
import Icon from '../../layout/atom/Icon';

function DetailPageFloat() {
  const { tourId } = useParams();
  const detailTour = useDetailTour(tourId);

  const [heart, setHeart] = useState('heart_empty');

  const handleScrap = async (method, tourId) => {
    switch (method) {
      case 'POST':
        await axiosInstance.post('https://api.my-real-trip.o-r.kr/api/scrap', { tourId: 2 }).then((res) => {
          console.log(res);
          if (res.status <= 300) {
            setHeart('heart_fill');
          }
        });
        return;
      case 'DELETE':
        await axiosInstance.delete(`https://api.my-real-trip.o-r.kr/api/scrap/${tourId}`).then((res) => {
          if (res.status <= 300) {
            setHeart('heart_empty');
          }
        });
        return;
    }
  };

  return (
    <St.FloatWrapper>
      <St.HeartBtn>
        <Icon type={heart} onClick={() => handleScrap(heart === 'heart_fill' ? 'DELETE' : 'POST', detailTour.id)} />
      </St.HeartBtn>
      <St.ReservationBtn>예약하기</St.ReservationBtn>
    </St.FloatWrapper>
  );
}

export default DetailPageFloat;

const St = {
  FloatWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;

    gap: 10px;

    display: flex;
    z-index: 2;
    position: fixed;
    bottom: 0;

    background-color: white;
  `,
  HeartBtn: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 44px;
    height: 44px;

    background-color: ${({ theme }) => theme.Color.gray8};
    border-radius: 4px;
  `,
  ReservationBtn: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 305px;
    height: 44px;
    background-color: ${({ theme }) => theme.Color.blue2};
    color: ${({ theme }) => theme.Color.white};

    ${({ theme }) => theme.Text.body_bold_14};
  `,
};
