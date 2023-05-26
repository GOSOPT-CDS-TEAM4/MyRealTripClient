import { useEffect } from 'react';

import { useRecoilValue, useRecoilState } from 'recoil';
import { styled, css } from 'styled-components';

import { pageData, tourListData } from '../../../recoil/tourListRecoil';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
import TourListCardSquare from '../TourListCardSquare';

function TourListItemSection() {
  const tourList = useRecoilValue(tourListData);
  const [page, setPage] = useRecoilState(pageData);

  const pagination = (e) => {
    setPage(e.target.innerText);
  };

  return (
    <>
      <Flex
        justifycontent="center"
        alignitems="alignitems"
        style={{
          paddingLeft: '22px',
          marginTop: '-22px',
          flexDirection: 'column',
        }}>
        <Flex
          justifycontent="start"
          style={{
            flexWrap: 'wrap',
          }}>
          {tourList && tourList.map((item, idx) => <TourListCardSquare key={idx} tourData={item} />)}
        </Flex>

        <Flex justifycontent="space-around" alignitems="center" style={{ marginBottom: '80px' }}>
          <Icon type="arrow_left_gray" />
          <St.PaginationBtn isActive onClick={pagination}>
            1
          </St.PaginationBtn>
          <St.PaginationBtn isActive={page === 2} onClick={(e) => pagination(e)}>
            2
          </St.PaginationBtn>
          <St.PaginationBtn isActive={page === 3} onClick={(e) => pagination(e)}>
            3
          </St.PaginationBtn>
          <St.PaginationBtn isActive={page === 4} onClick={(e) => pagination(e)}>
            4
          </St.PaginationBtn>
          <St.PaginationBtn isActive={page === 5} onClick={(e) => pagination(e)}>
            5
          </St.PaginationBtn>
          <Icon type="arrow_right_blue" />
        </Flex>
      </Flex>
    </>
  );
}

export default TourListItemSection;

const St = {
  PaginationBtn: styled.button`
    position: relative;
    width: 40px;
    height: 40px;
    all: unset;
    cursor: pointer;
    text-align: center;
    background-color: ${({ isActive }) => (isActive ? `${({ theme }) => theme.Color.blue2};` : 'none')};
    ${({ theme }) => theme.Text.body_medium_14};
    color: ${({ isActive }) =>
      isActive ? `${({ theme }) => theme.Color.blue2};` : `${({ theme }) => theme.Color.white};`};
  `,
  HorizonLine: styled.div`
    margin: 18px 0px;
    border: 2px solid ${({ theme }) => theme.Color.gray9};
    width: 100%;
  `,
};
