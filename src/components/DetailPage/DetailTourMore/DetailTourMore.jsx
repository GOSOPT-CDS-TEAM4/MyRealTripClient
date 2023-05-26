//하단의 비슷한 상품과 비교해 보세요

import { useEffect, useState } from 'react';

import axios from 'axios';
import { styled } from 'styled-components';

import MoreTour from './MoreTour';
import Flex from '../../layout/atom/Flex';
function DetailTourMore() {
  const [moreData, setMoreData] = useState([]);

  const getMoreData = async () => {
    try {
      const data = await axios.get('https://api.my-real-trip.o-r.kr/api/tour/random', {
        headers: {
          Location: 'global',
        },
      });
      setMoreData(data.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMoreData();
  }, []);

  return (
    <Flex column alignitems="start">
      <img
        src="/assets/img/pocketWifi.png"
        alt="pocketWifi"
        style={{ width: '420px', height: '75px', margin: '42px 0' }}
      />
      <Flex column>
        <St.SimilarTitle>비슷한 상품과 비교해보세요</St.SimilarTitle>
        {moreData[0] && (
          <St.GoodWrapper>
            {moreData.map((similarTour, index) => (
              <MoreTour key={index} similarTour={similarTour} />
            ))}
          </St.GoodWrapper>
        )}
      </Flex>
    </Flex>
  );
}

export default DetailTourMore;

const St = {
  GoodWrapper: styled.section`
    display: flex;
    width: 420px;
    position: relative;

    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  SimilarGoodsWrapper: styled.article`
    margin-right: 10px;
    width: 420px;
    position: relative;
    /* 
    div {
      width: auto;
      img:nth-child(2) {
        position: absolute;
        top: 9px;
        right: 20px;
        z-index: 999;
      }
    } */
  `,

  SimilarTitle: styled.div`
    ${({ theme }) => theme.Text.title_bold_18};
    margin-top: 20px;
    margin-bottom: 15px;
    width: 375px;
    margin-left: 15px;
  `,

  SimilarTourGuide: styled.h2`
    ${({ theme }) => theme.Color.gray4};
    ${({ theme }) => theme.Text.detail_regular_12};
    margin-top: 9px;
    margin-bottom: 2px;
  `,

  SimilarTourGuideTitle: styled.div`
    color: ${({ theme }) => theme.Color.gray1};
    ${({ theme }) => theme.Text.body_bold_14};
    display: flex;
    width: 148px;

    position: relative;
    display: inline-block;
    overflow: hidden;
  `,
};
