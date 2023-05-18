import React from 'react';
import { styled } from 'styled-components';

function TourListSortNav() {
  return (
    <St.SortNavWrapper>
      <St.TotalNum> 총 453개 </St.TotalNum>
      <St.SortSelect>
        <option value="추천순">추천순</option>
        <option value="별점순">별점순</option>
      </St.SortSelect>
    </St.SortNavWrapper>
  );
}

export default TourListSortNav;

const St = {
  SortNavWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 18px 22px;
  `,
  TotalNum: styled.span`
    ${({ theme }) => theme.Text.body_bold_16};
  `,
  SortSelect: styled.select`
    appearance: none;
    text-align: center;
    width: 80px;
    border: 0px;
    ${({ theme }) => theme.Text.body_bold_16};
    background: url(/assets/icon/triangle.png) no-repeat 100% 50%;
  `,
};
