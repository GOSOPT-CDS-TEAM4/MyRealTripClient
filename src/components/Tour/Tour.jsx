import { styled } from 'styled-components';

import { theme } from '../../styles/theme';
import Flex from '../layout/atom/Flex';
import Icon from '../layout/atom/Icon';
import Img from '../layout/atom/Img';
import Text from '../layout/atom/Text';

function Tour() {
  return (
    <>
      <St.TopImgSectionWrapper>
        <Img type="img_paris" width="100%" />
        <Text type="detail_medium_12" innerText="프랑스" style={{ color: theme.Color.white }} />
        <Flex alignitems="center">
          <Text type="title_bold_24" innerText="파리" style={{ color: theme.Color.white }} />
          <Icon type="arrow_down_20" />
        </Flex>
      </St.TopImgSectionWrapper>
      <St.MainSectionWrapper>
        <Flex style={{ paddingTop: '10px' }}>
          <Flex column alignitems="center" style={{ borderBottom: `3px solid ${theme.Color.blue2}`, width: '111px' }}>
            <Icon type="img_tourticket" />
            <Text type="body_bold_14" innerText="투어·티켓" style={{ color: theme.Color.blue1 }} />
          </Flex>
          <Flex column alignitems="center" style={{ borderBottom: `3px solid ${theme.Color.gray9}`, width: '111px' }}>
            <Icon type="img_ lodging" />
            <Text type="body_bold_14" innerText="숙소" style={{ color: theme.Color.gray4 }} />
          </Flex>
          <Flex column alignitems="center" style={{ borderBottom: `3px solid ${theme.Color.gray9}`, width: '111px' }}>
            <Icon type="img_ticket" />
            <Text type="body_bold_14" innerText="항공권" style={{ color: theme.Color.gray4 }} />
          </Flex>
        </Flex>
        <St.GridMenuSectionWrapper>
          <Flex justifycontent="center" style={{ gap: '18px', marginTop: '32px' }}>
            <St.MenuIcon>
              <Icon type="img_flag" />
              <Text type="detail_regular_12" innerText="투어" />
            </St.MenuIcon>
            <St.MenuIcon>
              <Icon type="img_flag" />
              <Text type="detail_regular_12" innerText="투어" />
            </St.MenuIcon>
            <St.MenuIcon>
              <Icon type="img_flag" />
              <Text type="detail_regular_12" innerText="투어" />
            </St.MenuIcon>
            <St.MenuIcon>
              <Icon type="img_flag" />
              <Text type="detail_regular_12" innerText="투어" />
            </St.MenuIcon>
          </Flex>
          <Flex justifycontent="center" style={{ gap: '18px', marginTop: '18px' }}>
            <St.MenuIcon>
              <Icon type="img_flag" />
              <Text type="detail_regular_12" innerText="투어" />
            </St.MenuIcon>
            <St.MenuIcon>
              <Icon type="img_flag" />
              <Text type="detail_regular_12" innerText="투어" />
            </St.MenuIcon>
            <St.MenuIcon>
              <Icon type="img_flag" />
              <Text type="detail_regular_12" innerText="투어" />
            </St.MenuIcon>
            <St.MenuIcon>
              <Icon type="img_flag" />
              <Text type="detail_regular_12" innerText="투어" />
            </St.MenuIcon>
          </Flex>
        </St.GridMenuSectionWrapper>
        <St.MyRealMagazineWrapper>
          <Flex column>
            <Text type="title_bold_18" innerText="마이리얼 매거진" />
            <Text type="body_medium_14" innerText="여행 전 필독! 꿀 정보 대방출" style={{ color: theme.Color.gray5 }} />
          </Flex>
          <Flex style={{ gap: '10px', marginTop: '15px', overflowX: 'scroll' }}>
            <St.IndivMagazineWrapper>
              <Img width="248px" height="146px" url="" />
              <Text type="body_bold_14" innerText="세상에 이런 여행이!" style={{ color: theme.Color.white }} />
              <Text
                type="detail_regular_12"
                innerText="전세계의 특색 있는 여행을 소개해요."
                style={{ color: theme.Color.white }}
              />
            </St.IndivMagazineWrapper>
            <St.IndivMagazineWrapper>
              <Img width="248px" height="146px" url="" />
              <Text type="body_bold_14" innerText="세상에 이런 여행이!" style={{ color: theme.Color.white }} />
              <Text
                type="detail_regular_12"
                innerText="전세계의 특색 있는 여행을 소개해요."
                style={{ color: theme.Color.white }}
              />
            </St.IndivMagazineWrapper>
            <St.IndivMagazineWrapper>
              <Img width="248px" height="146px" url="" />
              <Text type="body_bold_14" innerText="세상에 이런 여행이!" style={{ color: theme.Color.white }} />
              <Text
                type="detail_regular_12"
                innerText="전세계의 특색 있는 여행을 소개해요."
                style={{ color: theme.Color.white }}
              />
            </St.IndivMagazineWrapper>
          </Flex>
        </St.MyRealMagazineWrapper>
      </St.MainSectionWrapper>
    </>
  );
}

export default Tour;

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
  MainSectionWrapper: styled.section`
    margin-top: 77px;
    border-radius: 10px 10px 0 0;
    background-color: ${({ theme }) => theme.Color.white};
    padding-right: 15px;
    padding-left: 15px;
    width: calc(100% - 30px);
    height: auto;
  `,
  GridMenuSectionWrapper: styled.section`
    width: 100%;
  `,
  MenuIcon: styled.article`
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.Color.gray9};
    width: 70px;
    height: 70px;
  `,
  MyRealMagazineWrapper: styled.section`
    margin-top: 31px;
    width: 100%;
  `,
  IndivGoodsWrapper: styled.article`
    position: relative;
    margin-top: 12px;
    width: fit-content;
    div {
      width: auto;
      img:nth-child(2) {
        position: absolute;
        top: 8px;
        right: 10px;
        z-index: 999;
      }
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
