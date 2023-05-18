import React from 'react';
import { styled } from 'styled-components';

import Flex from '../../layout/atom/Flex';
import Text from '../../layout/atom/Text';

function TourListSortNav() {
  return (
    <Flex
      justify_content="space-between"
      style={{
        margin: '18px 22px',
      }}>
      <Text type="body_bold_16" innerText="총 468개" />
      <St.SortSelect>
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
    width: 80px;
    border: 0px;
    ${({ theme }) => theme.Text.body_bold_16};
    background: url(/assets/icon/triangle.png) no-repeat 100% 50%;
  `,
};
