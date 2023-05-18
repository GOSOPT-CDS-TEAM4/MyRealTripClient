import React from 'react';
import { styled } from 'styled-components';

import TourListCardSquare from '../TourListCardSquare';

function TourListItemSection() {
  return (
    <>
      <St.ItemWrapper>
        <TourListCardSquare />
        <TourListCardSquare />
        <TourListCardSquare />
        <TourListCardSquare />
        <TourListCardSquare />
        <TourListCardSquare />
      </St.ItemWrapper>

      <St.PaginationWrapper>
        <img src="assets/icon/arrow_left_gray.png" alt="" />
        <St.PaginationBtn>1</St.PaginationBtn>
        <St.PaginationBtn>2</St.PaginationBtn>
        <St.PaginationBtn>3</St.PaginationBtn>
        <St.PaginationBtn>4</St.PaginationBtn>
        <St.PaginationBtn>5</St.PaginationBtn>
        <img src="assets/icon/arrow_right_blue.png" alt="" />
      </St.PaginationWrapper>
      <St.HorizonLine />
    </>
  );
}

export default TourListItemSection;

const St = {
  ItemWrapper: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `,
  PaginationWrapper: styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 80px;
    > img {
      width: 5px;
      height: 10px;
    }
  `,
  PaginationBtn: styled.button`
    /* padding-bottom: 40px; */
    padding-right: 40px;
    all: unset;
    ${({ theme }) => theme.Text.body_medium_14};
    color: ${({ theme }) => theme.Color.blue2};
    &:active {
      background-color: ${({ theme }) => theme.Color.blue2};
      color: ${({ theme }) => theme.Color.white};
    }
  `,
  HorizonLine: styled.div`
    width: 100%;
    margin: 18px 0px;
    border: 2px solid ${({ theme }) => theme.Color.gray9};
  `,
};
