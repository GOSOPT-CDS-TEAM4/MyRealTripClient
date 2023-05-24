import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { test } from '../../../recoil/test';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
import TourListCardSquare from '../TourListCardSquare';
function TourListItemSection({ tourList }) {
  const [sort, setSort] = useState();
  const [minimumPrice, setminiMumPrice] = useState();
  const [maximumPrice, setMaximumPrice] = useState();
  const [tourType, setTourType] = useState();
  const [page, setPage] = useState();
  const testText = useRecoilValue(test);
  return (
    <>
      <div>{testText}</div>
      <Flex
        justifycontent="center"
        alignitems="alignitems"
        style={{
          padding: '13px',
          flexDirection: 'column',
        }}>
        <Flex
          justifycontent="start"
          style={{
            flexWrap: 'wrap',
          }}>
          {tourList && tourList.map((item, idx) => <TourListCardSquare key={idx} tourData={item} />)}
        </Flex>

        <Flex justifycontent="space-around" style={{ marginBottom: '80px' }}>
          <Icon type="arrow_left_gray" />
          <St.PaginationBtn>1</St.PaginationBtn>
          <St.PaginationBtn>2</St.PaginationBtn>
          <St.PaginationBtn>3</St.PaginationBtn>
          <St.PaginationBtn>4</St.PaginationBtn>
          <St.PaginationBtn>5</St.PaginationBtn>
          <Icon type="arrow_right_blue" />
        </Flex>
      </Flex>
      <St.HorizonLine />
    </>
  );
}

export default TourListItemSection;

const St = {
  PaginationBtn: styled.button`
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
    margin: 18px 0px;
    border: 2px solid ${({ theme }) => theme.Color.gray9};
    width: 100%;
  `,
};
