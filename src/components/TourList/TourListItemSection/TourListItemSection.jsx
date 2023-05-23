import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
import TourListCardSquare from '../TourListCardSquare';

function TourListItemSection() {
  const [tourList, setTourList] = useState();

  useEffect(() => {
    getTourList();
  }, []);

  async function getTourList() {
    try {
      const response = await axios.get(
        `http://15.165.135.183:8080/api/tour/filter?city=%ED%8C%8C%EB%A6%AC&order=%EC%B6%94%EC%B2%9C%EC%88%9C&minimumPrice=100&maximumPrice=100000000000&tourType=all&page=1`,
      );
      const data = response.data.data;
      setTourList(data.tourList);
      console.log(tourList);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
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
