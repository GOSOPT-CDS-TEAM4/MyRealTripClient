import React from 'react';
import { styled } from 'styled-components';

import { theme } from '../../../styles/theme';
import Text from '../../layout/atom/Text';

function BsTourType() {
  return (
    <St.TourTypeWrapper>
      <label>
        <input type="radio" name="tour-type-radio" value="all" />
        <Text type="body_regular_14" innerText="전체" style={{ color: theme.Color.gray2 }} />
      </label>
      <label>
        <input type="radio" name="tour-type-radio" value="group" />
        <Text type="body_regular_14" innerText="그룹" style={{ color: theme.Color.gray2 }} />
      </label>
      <label>
        <input type="radio" name="tour-type-radio" value="private" />
        <Text type="body_regular_14" innerText="프라이빗" style={{ color: theme.Color.gray2 }} />
      </label>
    </St.TourTypeWrapper>
  );
}

export default BsTourType;

const St = {
  TourTypeWrapper: styled.section`
    display: flex;
    flex-direction: column;
    > label {
      margin-bottom: 27px;
      margin-left: 38px;
    }
  `,
};
