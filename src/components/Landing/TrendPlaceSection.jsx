import { styled } from 'styled-components';

import { theme } from '../../styles/theme';
import Flex from '../layout/atom/Flex';
import Text from '../layout/atom/Text';
// eslint-disable-next-line import/order
import TrendPlace from './TrendPlace';

function TrendPlaceSection() {
  return (
    <St.TrendPlaceWrapper>
      <Text type="title_medium_20" innerText="요즘 인기 있는 여행지" style={{ color: theme.Color.white }} />
      <St.TrendPlaceCarousel>
        <Flex alignitems="center" style={{ gap: '15px', width: 'fit-content' }}>
          <TrendPlace type="제주" />
          <TrendPlace type="파리" />
          <TrendPlace type="방콕" />
          <TrendPlace type="방콕" />
          <TrendPlace type="방콕" />
        </Flex>
      </St.TrendPlaceCarousel>
    </St.TrendPlaceWrapper>
  );
}

export default TrendPlaceSection;
const St = {
  TrendPlaceWrapper: styled.section`
    width: 100%;
    & > span {
      display: block;
      margin-top: 17px;
    }
  `,
  TrendPlaceCarousel: styled.section`
    margin-top: 27px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};
