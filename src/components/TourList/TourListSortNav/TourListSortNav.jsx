import React, { useEffect } from 'react';

import { useRecoilValue, useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { tourFullData, sortData } from '../../../recoil/tourListRecoil';
import Flex from '../../layout/atom/Flex';
import Text from '../../layout/atom/Text';

function TourListSortNav() {
  const tourFull = useRecoilValue(tourFullData);
  const [sort, setSort] = useRecoilState(sortData);
  const sortedOption = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {});
  return (
    <Flex
      justifycontent="space-between"
      style={{
        margin: '18px 22px',
      }}>
      <Text type="body_bold_16" innerText={`총 ${tourFull.totalTourNumber}개`} />
      <St.SortSelect onChange={(e) => sortedOption(e)}>
        <option value="추천순">추천순</option>
        <option value="별점순">별점순</option>
      </St.SortSelect>
    </Flex>
  );
}

export default TourListSortNav;

const St = {
  SortSelect: styled.select`
    appearance: none;
    text-align: center;
    border: 0px;
    ${({ theme }) => theme.Text.body_bold_16};
    background: url(/assets/icon/triangle.png) no-repeat 100% 50%;
  `,
};
