import { styled } from 'styled-components';

import Carousel from '../Landing/Carousel';
import GoodsSection from '../Landing/GoodsSection';
import MainButtonSection from '../Landing/MainButtonSection';
import IconSection from '../Landing/MainIconSection';
import TrendPlaceSection from '../Landing/TrendPlaceSection';
import Icon from '../layout/atom/Icon';

function Landing() {
  return (
    <St.LandingWrapper>
      <St.InputWrapper>
        <Icon type="search" style={{ width: '20px', paddingLeft: '20px' }} />
        <input type="text" placeholder="도시나 상품을 검색해보세요" />
      </St.InputWrapper>
      <TrendPlaceSection />
      <MainButtonSection />
      <St.MainSectionWrapper>
        <IconSection />
        <St.Line />
        <Carousel />
        <GoodsSection />
        <GoodsSection />
      </St.MainSectionWrapper>
    </St.LandingWrapper>
  );
}

export default Landing;

const St = {
  LandingWrapper: styled.main`
    padding-right: 15px;
    padding-left: 15px;
  `,
  InputWrapper: styled.section`
    display: flex;
    align-items: center;
    border-radius: 5px;
    background: ${({ theme }) => theme.Color.gray9};
    width: 100%;
    height: 45px;
    input {
      border: none;
      background: none;
      padding-left: 10px;
      width: 100%;
      &::placeholder {
        color: ${({ theme }) => theme.Color.gray2};
      }
    }
  `,
  MainSectionWrapper: styled.section`
    transform: translateY(-41px);
    margin-left: calc(-50vw + 50%);
    border-radius: 15px 15px 0 0;
    background-color: ${({ theme }) => theme.Color.white};
    padding-right: 15px;
    padding-left: 15px;
    width: calc(100vw - 30px);
  `,
  Line: styled.div`
    margin-top: 33px;
    border: 1px solid ${({ theme }) => theme.Color.gray8};
    width: 100%;
    height: 0px;
  `,
};
