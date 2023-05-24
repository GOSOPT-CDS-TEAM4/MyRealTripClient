import { styled } from 'styled-components';

import DivideLine from '../layout/atom/DivideLine';
import Flex from '../layout/atom/Flex';
import Icon from '../layout/atom/Icon';
import Text from '../layout/atom/Text';

function Footer() {
  return (
    <Flex
      justifycontent="center"
      column
      style={{ width: '375px', height: '869px', marginLeft: '15px', marginRight: '15px' }}>
      <St.FooterLine />
      <Text type="title_bold_18" innerText="고객지원실 운영안내" />
      <St.CustomerSupport>
        연중무휴 09:00-18:00 (점심시간 12:00-13:00) <br />
        주말/공휴일 포함, 한국시간 기준
        <br /> ※ 항공권 환불/변경은 평일 09:00-17:00 접수 가능
        <br />
        유선상담 1670-8208
      </St.CustomerSupport>
      <St.CustomerConsultation>1:1 채팅상담</St.CustomerConsultation>
      <DivideLine margintop="28px" />

      <St.ButtomBtn>
        소개
        <Icon type="arrow_down_20" />
      </St.ButtomBtn>
      <DivideLine />
      <St.ButtomBtn>
        파트너
        <Icon type="arrow_down_20" />
      </St.ButtomBtn>
      <DivideLine />
      <St.ButtomBtn>
        지원
        <Icon type="arrow_down_20" />
      </St.ButtomBtn>
      <DivideLine marginbottom="42px" />

      <Flex justifycontent="center" style={{ gap: '14px' }}>
        <Text innerText="이용약관" type="body_regular_14" />
        <Text innerText="개인정보 처리방침" type="body_bold_14" />
        <Text innerText="이용약관" type="body_regular_14" />
      </Flex>

      <Flex column style={{ gap: '12px' }}>
        <Text
          innerText="상호명 (주)마이리얼트립 | 대표 이동건 | 개인정보보호책임자 정재훈 | 사업자등록번호 209-81-55339 사업자정보확인 | 통신판매업신고번호 2019-서
울서초-0260 | 관광사업등록번호 : 제2019-3호
주소 서울 특별시 서초구 강남대로 311, 드림플러스 강남 18~19층 (서초동, 한화생명보험빌딩) | 이메일 help@myrealtrip.com | 광고/제휴 문의 partnership@myrealtrip.com"
          type="detail_regular_12"
          style={{ color: '#848C94', marginTop: '6px' }}
        />
        <Text
          innerText="자사는 서울특별시관광협회 공제영업보증보험에 가입되어 있습니다. 
        영업보증보험: 1.5억원 / 기획여행보증: 2억원
        마이리얼트립은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 상품·거래정보 및 거래에 대하여 책임을 지지않습니다.
        부득이한 사정에 의해 확정된 여행일정이 변경되는 경우 여행자의 사전 동의를 받습니다."
          type="detail_regular_12"
          style={{ color: '#848C94', marginBottom: '11px' }}
        />
      </Flex>
      <St.LanguageBtn>
        <Icon type="language" />
        한국어
        <Icon type="arrow_down_20" />
      </St.LanguageBtn>

      <Flex justifycontent="space-between" style={{ width: '345px', marginTop: '24px' }}>
        <St.SnsWrapper>
          <Icon type="ic_facebook" />
          <Icon type="ic_naver" />
          <Icon type="ic_insta" />
          <Icon type="ic_youtube" />
        </St.SnsWrapper>
        <Icon type="img_logo_isms" />
      </Flex>

      <Flex style={{ marginTop: '15px' }}>
        <St.DownloadBtn>
          <Icon type="ic_appstore" style={{ marginRight: '10px' }} />
          App Store
        </St.DownloadBtn>
        <Flex style={{ width: '7px' }} />
        <St.DownloadBtn>
          <Icon type="ic_googlestore" style={{ marginRight: '10px' }} />
          Google Play
        </St.DownloadBtn>
      </Flex>
    </Flex>
  );
}

export default Footer;

const St = {
  FooterLine: styled.div`
    margin-bottom: 32px;
    border: 3px solid ${({ theme }) => theme.Color.gray9};
    width: 100vw;
  `,

  CustomerSupport: styled.article`
    margin-top: 4px;
    ${({ theme }) => theme.Text.body_regular_14};
    color: ${({ theme }) => theme.Color.gray1};
    height: 82px;
  `,

  CustomerConsultation: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 111px;
    height: 41px;

    margin-top: 14px;

    border: 1px solid ${({ theme }) => theme.Color.gray7};
    border-radius: 4px;

    ${({ theme }) => theme.Text.body_regular_14};
    color: ${({ theme }) => theme.Color.gray1};
  `,

  ButtomBtn: styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 14px;
    margin: 14px 0;
    width: 345px;
    ${({ theme }) => theme.Text.body_regular_14};
    color: ${({ theme }) => theme.Color.gray2};
  `,

  LanguageBtn: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 118px;
    height: 39px;

    gap: 1px;

    border: 1px solid ${({ theme }) => theme.Color.gray7};
    border-radius: 4px;

    ${({ theme }) => theme.Text.body_medium_14};
    color: ${({ theme }) => theme.Color.gray4};
  `,

  SnsWrapper: styled.article`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 140px;
    gap: 10px;
  `,

  DownloadBtn: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 170px;
    height: 37px;

    border: 1px solid ${({ theme }) => theme.Color.gray6};
    ${({ theme }) => theme.Text.body_medium_14};
    color: ${({ theme }) => theme.Color.gray2};
  `,
};
