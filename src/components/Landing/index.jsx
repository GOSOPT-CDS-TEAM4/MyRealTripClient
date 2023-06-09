import { styled } from 'styled-components';

import Carousel from './Carousel';
import GlobalGoodsSection from './GlobalGoodsSection';
import MainButtonSection from './MainButtonSection';
import IconSection from './MainIconSection';
import ParisGoodsSection from './ParisGoodsSection';
import TrendPlaceSection from './TrendPlaceSection';
import Icon from '../layout/atom/Icon';

function Landing() {
  return (
    <>
      <St.LandingWrapper>
        <St.InputWrapper>
          <Icon type="search" style={{ width: '20px', paddingLeft: '20px' }} />
          <input type="text" placeholder="도시나 상품을 검색해보세요" />
        </St.InputWrapper>
        <TrendPlaceSection />
      </St.LandingWrapper>
      <St.MainSectionWrapper>
        <MainButtonSection />
        <IconSection />
        <St.Line />
        <Carousel />
        <GlobalGoodsSection />
        <ParisGoodsSection />
      </St.MainSectionWrapper>
    </>
  );
}

export default Landing;

const St = {
  LandingWrapper: styled.section`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    z-index: 0;
    background-color: ${({ theme }) => theme.Color.blue2};
    padding-top: 58px;
    padding-right: 15px;
    padding-left: 15px;
    width: calc(100% - 30px);
    height: 418px;
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
    position: relative;
    z-index: 1;
    margin-top: 380px;
    border-radius: 15px 15px 0 0;
    background-color: ${({ theme }) => theme.Color.white};
    padding-right: 15px;
    padding-bottom: 41px;
    padding-left: 15px;
    width: calc(100% - 30px);
    height: calc(100% + 41px);
  `,
  Line: styled.div`
    margin-top: 33px;
    border: 1px solid ${({ theme }) => theme.Color.gray8};
    width: 100%;
    height: 0px;
  `,
  MarginBox: styled.div`
    background-color: ${({ theme }) => theme.Color.white};
    width: 100%;
    height: max-content;
  `,
};
