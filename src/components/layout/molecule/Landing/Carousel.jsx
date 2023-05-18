import { styled } from 'styled-components';

import Flex from '../../atom/Flex';
import Img from '../../atom/Img';
import Text from '../../atom/Text';

function Carousel() {
  return (
    <St.MainCarouselWrapper>
      <div>
        <Img type="img_bangkokhotel" />
        <Text type="detail_regular_12" innerText="환상적인 인피니티 풀과 스파 즐기기" />
        <Text type="body_bold_16" innerText="방콕 럭셔리 호텔 최대 50% 할인" />
      </div>
      <Flex justifycontent="center" style={{ gap: '6px', marginTop: '15px' }}>
        <St.GrayEllipse />
        <St.GrayEllipse />
        <St.GrayEllipse />
        <St.GrayEllipse />
        <St.BlackEllipse />
        <St.GrayEllipse />
        <St.GrayEllipse />
        <St.GrayEllipse />
      </Flex>
    </St.MainCarouselWrapper>
  );
}

export default Carousel;
const St = {
  MainCarouselWrapper: styled.section`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    margin-top: 31px;
    div {
      position: relative;
      span:nth-child(2) {
        position: absolute;
        top: 45px;
        left: 18px;
        color: ${({ theme }) => theme.Color.white};
      }
      span:nth-child(3) {
        position: absolute;
        top: 63px;
        left: 18px;
        color: ${({ theme }) => theme.Color.white};
      }
    }
  `,
  GrayEllipse: styled.div`
    border-radius: 2.5px;
    background-color: ${({ theme }) => theme.Color.gray5};
    width: 5px;
    height: 5px;
  `,
  BlackEllipse: styled.div`
    border-radius: 2.5px;
    background-color: ${({ theme }) => theme.Color.black};
    width: 5px;
    height: 5px;
  `,
};
