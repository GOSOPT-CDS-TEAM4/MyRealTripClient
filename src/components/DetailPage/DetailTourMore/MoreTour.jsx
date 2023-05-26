import { useState, useEffect } from 'react';
import { styled } from 'styled-components';

import Icon from '../../layout/atom/Icon';
import axiosInstance from '../../../api/axios';
import addCommasInNumbers from '../../../utils/addCommasInNumber';
import EllipsisText from '../../layout/atom/EllipsisText';

function MoreTour({ similarTour }) {
  const [heart, setHeart] = useState(similarTour.isScrap ? 'heart_fill' : 'heart_empty');
  const handleScrap = async (method, tourId) => {
    switch (method) {
      case 'POST':
        await axiosInstance.post('https://api.my-real-trip.o-r.kr/api/scrap', { tourId }).then((res) => {
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
    <>
      <St.SimilarGoodsWrapper>
        <St.TourImg src={similarTour.image} />
        <div>
          <Icon type={heart} onClick={() => handleScrap(heart === 'heart_fill' ? 'DELETE' : 'POST', similarTour.id)} />
        </div>
        <St.SimilarTourAbout>{similarTour.itemType}</St.SimilarTourAbout>
        <EllipsisText type="body_bold_14" innerText={similarTour.name} style={{ width: '148px', color: '#343A40' }} />
        <St.SimilarTourPrice>
          {similarTour.price.originalPrice && `${addCommasInNumbers(similarTour.price.originalPrice)}`}원
        </St.SimilarTourPrice>
      </St.SimilarGoodsWrapper>
    </>
  );
}

export default MoreTour;

const St = {
  SimilarGoodsWrapper: styled.article`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    position: relative;
    cursor: pointer;
    width: fit-content;

    div {
      border-radius: 5px;
      img:nth-child(1) {
        position: absolute;
        z-index: 999;
        right: 9px;
        top: 10px;
      }
    }
  `,

  TourImg: styled.img`
    width: 149px;
    height: 103px;
    border-radius: 5px;
  `,
  SimilarTourAbout: styled.h2`
    color: ${({ theme }) => theme.Color.gray4};
    ${({ theme }) => theme.Text.detail_regular_12};
    margin-top: 9px;
    margin-bottom: 2px;
  `,

  SimilarTourPrice: styled.span`
    color: ${({ theme }) => theme.Color.gray1};
    ${({ theme }) => theme.Text.body_bold_14};
    display: flex;
    width: 148px;

    margin-top: 10px;
    position: relative;
  `,
};
