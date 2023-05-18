//하단의 비슷한 상품과 비교해 보세요
import { styled } from 'styled-components';

import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
import Img from '../../layout/atom/Img';

function DetailTourMore() {
  return (
    <Flex column alignItems="start">
      <img
        src="/assets/img/pocketWifi.png"
        alt="pocketWifi"
        style={{ width: '375px', height: '75px', marginTop: '50px', marginBottom: '42px' }}
      />
      <St.SimilarTitle>비슷한 상품과 비교해보세요</St.SimilarTitle>
      <St.GoodWrapper>
        <St.SimilarGoodsWrapper>
          <Flex column alignItems="start">
            <Img type="img_tour_detail" width="149px" height="103px" />
            <Icon type="heart_fill" />
            <St.SimilarTourGuide>가이드 투어 ・ 파리</St.SimilarTourGuide>
            <St.SimilarTourGuideTitle>[루브르+오르세] 명작 프..</St.SimilarTourGuideTitle>
            <Flex alignItems="center" style={{ marginTop: '13px' }}>
              <St.SimilarTourGuideTitle>300.000원</St.SimilarTourGuideTitle>
            </Flex>
          </Flex>
        </St.SimilarGoodsWrapper>

        <St.SimilarGoodsWrapper>
          <Flex column alignItems="start">
            <Img type="img_tour_detail" width="149px" height="103px" />
            <Icon type="heart_fill" />
            <St.SimilarTourGuide>가이드 투어 ・ 파리</St.SimilarTourGuide>
            <St.SimilarTourGuideTitle>[루브르+오르세] 4시간..</St.SimilarTourGuideTitle>
            <St.SimilarTourGuideTitle>300.000원</St.SimilarTourGuideTitle>
          </Flex>
        </St.SimilarGoodsWrapper>

        <St.SimilarGoodsWrapper>
          <Flex column alignItems="start">
            <Img type="img_tour_detail" width="149px" height="103px" />
            <Icon type="heart_fill" />
            <St.SimilarTourGuide>가이드 투어 ・ 파리</St.SimilarTourGuide>
            <St.SimilarTourGuideTitle>[루브르+오르세] 명작 프..</St.SimilarTourGuideTitle>
            <St.SimilarTourGuideTitle>300.000원</St.SimilarTourGuideTitle>
          </Flex>
        </St.SimilarGoodsWrapper>
      </St.GoodWrapper>
    </Flex>
  );
}

export default DetailTourMore;

const St = {
  GoodWrapper: styled.section`
    display: flex;
    width: 100%;
  `,

  SimilarGoodsWrapper: styled.article`
    width: fit-content;
    position: relative;

    div {
      width: auto;
      img:nth-child(2) {
        position: absolute;
        top: 9px;
        right: 20px;
        z-index: 999;
      }
    }
  `,

  SimilarTitle: styled.header`
    ${({ theme }) => theme.Text.title_medium_20};
    margin-bottom: 15px;
  `,

  SimilarTourGuide: styled.h2`
    ${({ theme }) => theme.Color.gray4};
    ${({ theme }) => theme.Text.detail_regular_12};
    margin-top: 9px;
    margin-bottom: 2px;
  `,

  SimilarTourGuideTitle: styled.h1`
    ${({ theme }) => theme.Color.gray1};
    ${({ theme }) => theme.Text.body_bold_14};
  `,
};
