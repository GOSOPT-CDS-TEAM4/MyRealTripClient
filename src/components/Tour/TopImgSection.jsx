import { styled } from 'styled-components';

import { theme } from '../../styles/theme';
import Flex from '../layout/atom/Flex';
import Icon from '../layout/atom/Icon';
import Img from '../layout/atom/Img';
import Text from '../layout/atom/Text';

function TopImgSection() {
  return (
    <St.TopImgSectionWrapper>
      <Img type="img_paris" width="100%" />
      <Text type="detail_medium_12" innerText="프랑스" style={{ color: theme.Color.white }} />
      <Flex alignitems="center">
        <Text type="title_bold_24" innerText="파리" style={{ color: theme.Color.white }} />
        <Icon type="arrow_down_20" />
      </Flex>
    </St.TopImgSectionWrapper>
  );
}

export default TopImgSection;

const St = {
  TopImgSectionWrapper: styled.section`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    & > :nth-child(2) {
      position: absolute;
      top: 68px;
      left: 17px;
    }
    & > :nth-child(3) {
      position: absolute;
      top: 86px;
      left: 17px;
    }
  `,
};
