import { styled } from 'styled-components';

import { theme } from '../../../styles/theme';
import Flex from '../atom/Flex';
import Icon from '../atom/Icon';
import Img from '../atom/Img';
import Text from '../atom/Text';

function Landing() {
  return (
    <St.LandingWrapper>
      <St.InputWrapper>
        <Icon type="search" style={{ width: '20px', paddingLeft: '20px' }} />
        <input type="text" placeholder="도시나 상품을 검색해보세요" />
      </St.InputWrapper>
      <St.TrendPlaceWrapper>
        <Text type="title_medium_20" innerText="요즘 인기 있는 여행지" />
        <Flex alignItems="center" justifyContent="space-evenly" style={{ marginTop: '27px', gap: '15px' }}>
          <Img type="landing_paris" />
          <Img type="landing_jeju" />
          <Img type="landing_bangkok" />
        </Flex>
      </St.TrendPlaceWrapper>
      <St.MainButtonWrapper>
        <Flex style={{ gap: '20px' }} justifyContent="center">
          <article>
            <Icon type="img_ticket" />
            <Text type="detail_medium_12" innerText="항공권" />
          </article>
          <article>
            <Icon type="img_stay" />
            <Text type="detail_medium_12" innerText="숙소" />
          </article>
          <article>
            <Icon type="img_tour" />
            <Text type="detail_medium_12" innerText="투어·티켓" />
          </article>
        </Flex>
      </St.MainButtonWrapper>
      <St.MainSectionWrapper>
        <St.MainSectionIconWrapper>
          <Flex justifyContent="flex-start" alignItems="center" style={{ gap: '15px' }}>
            <Icon type="hotel" />
            <Icon type="insurance" />
            <Icon type="kids" />
            <Icon type="car" />
            <Icon type="package" />
            <Icon type="koreastay" />
          </Flex>
        </St.MainSectionIconWrapper>
        <St.Line />
        <St.MainCarouselWrapper>
          <Img type="img_bangkokhotel" />
          <Text type="detail_regular_12" innerText="환상적인 인피니티 풀과 스파 즐기기" />
          <Text type="body_bold_16" innerText="방콕 럭셔리 호텔 최대 50% 할인" />
          <Flex justifyContent="center" style={{ gap: '6px', marginTop: '15px' }}>
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
        <St.GoodsSectionWrapper>
          <Flex justifyContent="space-between" alignItems="center">
            <Text type="title_bold_18" innerText="실시간 베스트 상품" />
            <Flex alignItems="center" style={{ width: 'auto' }}>
              <Text type="body_bold_14" innerText="더보기" style={{ color: theme.Color.blue1 }} />
              <Icon type="arrow_right_blue" />
            </Flex>
          </Flex>
          <Flex style={{ gap: '10px' }}>
            <St.IndivGoodsWrapper>
              <Flex column alignItems="start">
                <Img type="img_sono" />
                <Icon type="heart_fill" />
                <Text
                  type="detail_regular_12"
                  innerText="티켓/패스 · 강원도"
                  style={{ marginTop: '9px', color: theme.Color.gray4 }}
                />
                <Text type="body_bold_14" innerText="소노 델피노 숙박권" />
                <Flex alignItems="center" style={{ marginTop: '14.5px' }}>
                  <Text type="body_bold_14" innerText="224,000원" />
                  <Text
                    type="detail_regular_12"
                    innerText="540,000원"
                    style={{ textDecoration: 'line-through', color: `${theme.Color.gray4}` }}
                  />
                </Flex>
              </Flex>
            </St.IndivGoodsWrapper>
            <St.IndivGoodsWrapper>
              <Flex column alignItems="start">
                <Img type="img_sono" />
                <Icon type="heart_fill" />
                <Text
                  type="detail_regular_12"
                  innerText="티켓/패스 · 강원도"
                  style={{ marginTop: '9px', color: theme.Color.gray4 }}
                />
                <Text type="body_bold_14" innerText="소노 델피노 숙박권" />
                <Flex alignItems="center" style={{ marginTop: '14.5px' }}>
                  <Text type="body_bold_14" innerText="224,000원" />
                  <Text
                    type="detail_regular_12"
                    innerText="540,000원"
                    style={{ textDecoration: 'line-through', color: `${theme.Color.gray4}` }}
                  />
                </Flex>
              </Flex>
            </St.IndivGoodsWrapper>
            <St.IndivGoodsWrapper>
              <Flex column alignItems="start">
                <Img type="img_sono" />
                <Icon type="heart_fill" />
                <Text
                  type="detail_regular_12"
                  innerText="티켓/패스 · 강원도"
                  style={{ marginTop: '9px', color: theme.Color.gray4 }}
                />
                <Text type="body_bold_14" innerText="소노 델피노 숙박권" />
                <Flex alignItems="center" style={{ marginTop: '14.5px' }}>
                  <Text type="body_bold_14" innerText="224,000원" />
                  <Text
                    type="detail_regular_12"
                    innerText="540,000원"
                    style={{ textDecoration: 'line-through', color: `${theme.Color.gray4}` }}
                  />
                </Flex>
              </Flex>
            </St.IndivGoodsWrapper>
          </Flex>
        </St.GoodsSectionWrapper>
        <St.GoodsSectionWrapper>
          <Flex justifyContent="space-between" alignItems="center">
            <Text type="title_bold_18" innerText="파리 관심 급상승 상품" />
            <Flex alignItems="center" style={{ width: 'auto' }}>
              <Text type="body_bold_14" innerText="더보기" style={{ color: theme.Color.blue1 }} />
              <Icon type="arrow_right_blue" />
            </Flex>
          </Flex>
          <Flex style={{ gap: '10px' }}>
            <St.IndivGoodsWrapper>
              <Flex column alignItems="start">
                <Img type="img_sono" />
                <Icon type="heart_fill" />
                <Text
                  type="detail_regular_12"
                  innerText="티켓/패스 · 강원도"
                  style={{ marginTop: '9px', color: theme.Color.gray4 }}
                />
                <Text type="body_bold_14" innerText="소노 델피노 숙박권" />
                <Flex alignItems="center" style={{ marginTop: '14.5px' }}>
                  <Text type="body_bold_14" innerText="224,000원" />
                  <Text
                    type="detail_regular_12"
                    innerText="540,000원"
                    style={{ textDecoration: 'line-through', color: `${theme.Color.gray4}` }}
                  />
                </Flex>
              </Flex>
            </St.IndivGoodsWrapper>
            <St.IndivGoodsWrapper>
              <Flex column alignItems="start">
                <Img type="img_sono" />
                <Icon type="heart_fill" />
                <Text
                  type="detail_regular_12"
                  innerText="티켓/패스 · 강원도"
                  style={{ marginTop: '9px', color: theme.Color.gray4 }}
                />
                <Text type="body_bold_14" innerText="소노 델피노 숙박권" />
                <Flex alignItems="center" style={{ marginTop: '14.5px' }}>
                  <Text type="body_bold_14" innerText="224,000원" />
                  <Text
                    type="detail_regular_12"
                    innerText="540,000원"
                    style={{ textDecoration: 'line-through', color: `${theme.Color.gray4}` }}
                  />
                </Flex>
              </Flex>
            </St.IndivGoodsWrapper>
            <St.IndivGoodsWrapper>
              <Flex column alignItems="start">
                <Img type="img_sono" />
                <Icon type="heart_fill" />
                <Text
                  type="detail_regular_12"
                  innerText="티켓/패스 · 강원도"
                  style={{ marginTop: '9px', color: theme.Color.gray4 }}
                />
                <Text type="body_bold_14" innerText="소노 델피노 숙박권" />
                <Flex alignItems="center" style={{ marginTop: '14.5px' }}>
                  <Text type="body_bold_14" innerText="224,000원" />
                  <Text
                    type="detail_regular_12"
                    innerText="540,000원"
                    style={{ textDecoration: 'line-through', color: `${theme.Color.gray4}` }}
                  />
                </Flex>
              </Flex>
            </St.IndivGoodsWrapper>
          </Flex>
        </St.GoodsSectionWrapper>
      </St.MainSectionWrapper>
    </St.LandingWrapper>
  );
}

export default Landing;

const St = {
  LandingWrapper: styled.main`
    padding-left: 15px;
    padding-right: 15px;
  `,
  InputWrapper: styled.section`
    width: 100%;
    height: 45px;
    background: ${({ theme }) => theme.Color.gray9};
    border-radius: 5px;

    display: flex;
    align-items: center;
    input {
      padding-left: 10px;
      width: 100%;
      border: none;
      background: none;
      &::placeholder {
        color: ${({ theme }) => theme.Color.gray2};
      }
    }
  `,
  TrendPlaceWrapper: styled.section`
    width: 100%;
    span {
      display: block;
      margin-top: 17px;
      color: white;
    }
  `,
  MainButtonWrapper: styled.section`
    width: 100%;
    margin-top: 34px;
    article {
      width: 82px;
      height: 85px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.Color.white};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 999;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
    }
  `,
  MainSectionWrapper: styled.section`
    width: calc(100vw - 30px);
    background-color: ${({ theme }) => theme.Color.white};
    margin-left: calc(-50vw + 50%);
    padding-left: 15px;
    padding-right: 15px;
    transform: translateY(-41px);
    border-radius: 15px 15px 0 0;
  `,
  MainSectionIconWrapper: styled.section`
    width: 100%;
    padding-top: 70px;
  `,
  Line: styled.div`
    width: 100%;
    height: 0px;
    border: 1px solid ${({ theme }) => theme.Color.gray8};
    margin-top: 33px;
  `,
  MainCarouselWrapper: styled.section`
    margin-top: 31px;
    position: relative;
    span:nth-child(2) {
      color: white;
      position: absolute;
      top: 45px;
      left: 18px;
    }
    span:nth-child(3) {
      color: white;
      position: absolute;
      top: 63px;
      left: 18px;
    }
  `,
  GrayEllipse: styled.div`
    width: 5px;
    height: 5px;
    background-color: ${({ theme }) => theme.Color.gray5};
    border-radius: 2.5px;
  `,
  BlackEllipse: styled.div`
    width: 5px;
    height: 5px;
    background-color: ${({ theme }) => theme.Color.black};
    border-radius: 2.5px;
  `,
  GoodsSectionWrapper: styled.section`
    width: 100%;
    margin-top: 32px;
  `,
  IndivGoodsWrapper: styled.article`
    width: fit-content;
    position: relative;
    margin-top: 12px;
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
};
