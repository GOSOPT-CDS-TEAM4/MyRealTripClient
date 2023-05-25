import { styled } from 'styled-components';

import { theme } from '../../styles/theme';
import Img from '../layout/atom/Img';
import Text from '../layout/atom/Text';

function TrendPlace({ type }) {
  const imgType = () => {
    switch (type) {
      case '방콕':
        return 'img_bangkok';
      case '제주':
        return 'img_jeju';
      case '파리':
        return 'img_paris';
    }
  };
  return (
    <St.TrendPlaceWrapper>
      <Img type={imgType()} width="111px" height="111px" />
      <Text innerText={type} type="body_bold_16" style={{ color: theme.Color.white }} />
    </St.TrendPlaceWrapper>
  );
}

export default TrendPlace;

const St = {
  TrendPlaceWrapper: styled.article`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    border: 2px solid ${({ theme }) => theme.Color.white};

    border-radius: calc(129px / 2);
    width: 129px;
    height: 129px;
    img {
      border-radius: calc(111px / 2);
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
      margin: 0;
    }
  `,
};
