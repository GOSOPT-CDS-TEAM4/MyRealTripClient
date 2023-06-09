import { styled } from 'styled-components';

import { theme } from '../../styles/theme';
import Flex from '../layout/atom/Flex';
import Img from '../layout/atom/Img';
import Text from '../layout/atom/Text';

function MyRealMagazine() {
  return (
    <St.MyRealMagazineWrapper>
      <Flex column>
        <Text type="title_bold_18" innerText="마이리얼 매거진" />
        <Text type="body_medium_14" innerText="여행 전 필독! 꿀 정보 대방출" style={{ color: theme.Color.gray5 }} />
      </Flex>
      <St.MagazineCarouselWrapper>
        <St.IndivMagazineWrapper>
          <Img width="248px" height="146px" type="mymagazine_mockup_1" />
          <Text type="body_bold_14" innerText="세상에 이런 여행이!" style={{ color: theme.Color.white }} />
          <Text
            type="detail_regular_12"
            innerText="전세계의 특색 있는 여행을 소개해요."
            style={{ color: theme.Color.white }}
          />
        </St.IndivMagazineWrapper>
        <St.IndivMagazineWrapper>
          <Img width="248px" height="146px" type="mymagazine_mockup_2" />
          <Text type="body_bold_14" innerText="파리에 이런 것도 있다고?" style={{ color: theme.Color.white }} />
          <Text type="detail_regular_12" innerText="색다른 여행이 궁금해요." style={{ color: theme.Color.white }} />
        </St.IndivMagazineWrapper>
      </St.MagazineCarouselWrapper>
    </St.MyRealMagazineWrapper>
  );
}

export default MyRealMagazine;

const St = {
  MyRealMagazineWrapper: styled.section`
    margin-top: 31px;
    width: 100%;
  `,
  MagazineCarouselWrapper: styled.article`
    display: flex;
    gap: 10px;
    margin-top: 15px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  IndivMagazineWrapper: styled.article`
    position: relative;
    img {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url(${({ url }) => url});
    }
    :nth-child(2) {
      position: absolute;
      top: 93px;
      left: 12px;
    }
    :nth-child(3) {
      position: absolute;
      top: 114px;
      left: 12px;
    }
  `,
};
