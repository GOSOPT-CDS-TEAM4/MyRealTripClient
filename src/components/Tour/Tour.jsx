import { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import BestReviewTourProduct from './BestReviewTourProduct';
import BestReviewTourSection from './BestReviewTourSection';
import GridMenuSection from './GridMenuSection';
import MainNavBanner from './MainNavBanner';
import MyRealMagazine from './MyRealMagazine';
import TopImgSection from './TopImgSection';
import axiosInstance from '../../api/axios';
import { theme } from '../../styles/theme';
import Text from '../layout/atom/Text';

function Tour() {
  const [bestReviewData, setBestReviewData] = useState([]);

  const getBestReviewData = async () => {
    try {
      const res = await axiosInstance.get('/api/tour/best');
      setBestReviewData(res.data.data);
      console.log(res.data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getBestReviewData();
  }, []);

  return (
    <>
      <TopImgSection />
      <St.MainSectionWrapper>
        <MainNavBanner />
        <GridMenuSection />
        <MyRealMagazine />
        <BestReviewTourProduct />
        <Text
          innerText="만족도 높은 베스트 셀러 상품만 모아봤어요!"
          type="body_medium_14"
          style={{ color: theme.Color.gray5, marginTop: '6px' }}
        />
        {bestReviewData[0] &&
          bestReviewData.map((indivBestReview, idx) => (
            <BestReviewTourSection bestReviewData={indivBestReview} key={idx} />
          ))}
      </St.MainSectionWrapper>
    </>
  );
}

export default Tour;

const St = {
  MainSectionWrapper: styled.section`
    margin-top: 135px;
    border-radius: 10px 10px 0 0;
    background-color: ${({ theme }) => theme.Color.white};
    padding-right: 15px;
    padding-left: 15px;
    width: calc(100% - 30px);
    height: auto;
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
};
