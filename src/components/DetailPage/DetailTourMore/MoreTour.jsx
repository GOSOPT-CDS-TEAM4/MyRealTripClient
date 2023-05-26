import { useState, useEffect } from 'react';

import axios from 'axios';
import { styled } from 'styled-components';

import Icon from '../../layout/atom/Icon';

function MoreTour({ similarTour }) {
  console.log('here');

  return (
    <>
      <St.SimilarGoodsWrapper>
        <St.TourImg src={similarTour.image} />
        <div>
          <Icon type="heart_fill" />
        </div>
        <St.SimilarTourAbout>{similarTour.itemType}</St.SimilarTourAbout>
        <St.SimilarTourTitle>{similarTour.name}</St.SimilarTourTitle>
        <St.SimilarTourPrice>{similarTour.price.originalPrice}원</St.SimilarTourPrice>
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
    width: 375px;
    position: relative;

    div {
      width: 21px;
      img:nth-child(2) {
        position: absolute;
        top: 9px;
        right: 20px;
        z-index: 999;
        background-color: red;
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
  SimilarTourTitle: styled.h1`
    color: ${({ theme }) => theme.Color.gray1};
    ${({ theme }) => theme.Text.body_bold_14};

    height: 21px;
    display: inline-block;
    overflow: hidden;
    margin-bottom: 13px;
  `,

  SimilarTourPrice: styled.div`
    color: ${({ theme }) => theme.Color.gray1};
    ${({ theme }) => theme.Text.body_bold_14};
    display: flex;
    width: 148px;

    position: relative;
  `,
};
