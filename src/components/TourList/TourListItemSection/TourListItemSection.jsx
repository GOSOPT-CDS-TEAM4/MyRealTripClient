import { useRef, useState } from 'react';

import { useRecoilValue, useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { pageData, tourListData } from '../../../recoil/tourListRecoil';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
import TourListCardSquare from '../TourListCardSquare';

function TourListItemSection() {
  const tourList = useRecoilValue(tourListData);
  const [page, setPage] = useRecoilState(pageData);
  const scrollRef = useRef();

  const pagination = (e) => {
    setPage(e.target.innerText);
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Flex
        ref={scrollRef}
        justifycontent="center"
        alignitems="alignitems"
        style={{
          marginTop: '-22px',
          flexDirection: 'column',
        }}>
        <Flex
          justifycontent="start"
          style={{
            flexWrap: 'wrap',
            paddingLeft: '22px',
          }}>
          {tourList && tourList.map((item, idx) => <TourListCardSquare key={idx} tourData={item} />)}
        </Flex>

        <Flex justifycontent="space-around" alignitems="center" style={{ marginBottom: '80px' }}>
          <Icon type="arrow_left_gray" />
          <St.PaginationBtn onClick={pagination}>1</St.PaginationBtn>
          <St.PaginationBtn onClick={pagination}>2</St.PaginationBtn>
          <St.PaginationBtn onClick={pagination}>3</St.PaginationBtn>
          <St.PaginationBtn onClick={pagination}>4</St.PaginationBtn>
          <St.PaginationBtn onClick={pagination}>5</St.PaginationBtn>
          <Icon type="arrow_right_blue" />
        </Flex>
      </Flex>
    </>
  );
}

export default TourListItemSection;

const St = {
  PaginationBtn: styled.button`
    padding-left: 0px;
    position: relative;
    width: 60px;
    height: 60px;
    all: unset;
    cursor: pointer;
    text-align: center;
    ${({ theme }) => theme.Text.body_medium_14};

    background-color: ${({ theme }) => theme.Color.white};
    color: ${({ theme }) => theme.Color.blue2};
  `,
  HorizonLine: styled.div`
    margin: 18px 0px;
    border: 2px solid ${({ theme }) => theme.Color.gray9};
    width: 100%;
  `,
};
