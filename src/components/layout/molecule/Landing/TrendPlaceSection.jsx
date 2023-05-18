import { styled } from 'styled-components';

import { theme } from '../../../../styles/theme';
import Flex from '../../atom/Flex';
import Text from '../../atom/Text';
// eslint-disable-next-line import/order
import TrendPlace from './TrendPlace';

function TrendPlaceSection() {
  return (
    <St.TrendPlaceWrapper>
      <Text type="title_medium_20" innerText="요즘 인기 있는 여행지" style={{ color: theme.Color.white }} />
      <Flex alignitems="center" justifycontent="center" style={{ marginTop: '27px', gap: '15px' }}>
        <TrendPlace type="제주" />
        <TrendPlace type="파리" />
        <TrendPlace type="방콕" />
        <TrendPlace type="방콕" />
        <TrendPlace type="방콕" />
      </Flex>
    </St.TrendPlaceWrapper>
  );
}

export default TrendPlaceSection;
const St = {
  TrendPlaceWrapper: styled.section`
    width: fit-content;
    overflow-x: auto;
    & > span {
      display: block;
      margin-top: 17px;
    }
  `,
};
