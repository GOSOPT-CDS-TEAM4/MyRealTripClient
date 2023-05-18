//코스 소개 안내
import { styled } from 'styled-components';

import DivideLine from '../../layout/atom/DivideLine';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
import Button from '../../layout/molecule/button';

function DetailTourCourse() {
  return (
    <Flex column justifyContent="center">
      <St.CoureTitle>코스 소개</St.CoureTitle>
      <St.TimeWrapper>
        <Icon type="location_blue" />
        <St.Time>09:00</St.Time>
        <St.TimeDescription>출발</St.TimeDescription>
      </St.TimeWrapper>
      <Flex>
        <Flex justifyContent="center" alignItems="center">
          <St.CoureLineTitle />
          <St.CoureDescriptionWrapper>
            <St.Address>주소: 1 place colette, 75001 Paris</St.Address>
            <St.CoureDesciption>
              루브르 박물관 유리 피라미드 앞 루이 14세 청동 기마상 아래 모임 장소 안내 : 상품페이지 하단 링크 참고 출발
              시간 10분 전까지 지정된 장소에 도착해주세요.
            </St.CoureDesciption>
          </St.CoureDescriptionWrapper>
        </Flex>
      </Flex>

      <St.TimeWrapper>
        <Icon type="location_black" />
        <St.Time>09:10</St.Time>
        <St.TimeDescription>루브르 발견하기</St.TimeDescription>
      </St.TimeWrapper>
      <Flex justifyContent="center" alignItems="center">
        <St.CoureLine />
        <St.CoureWrapper>
          <St.CoureDesciption>각 시대별 루브르 박물관의 쓰임을 살펴봅니다.</St.CoureDesciption>

          <img
            src="https://t1.daumcdn.net/cfile/tistory/2157723656165D1D15"
            alt="루브르박물관"
            style={{ width: '293px', height: '189px', borderRadius: '8px', marginTop: '15px' }}
          />
        </St.CoureWrapper>
      </Flex>

      <St.TimeWrapper>
        <Icon type="location_black" />
        <St.Time>09:20</St.Time>
        <St.TimeDescription>인류 최초의 문명 메소포타미아</St.TimeDescription>
      </St.TimeWrapper>

      <Flex justifyContent="center" alignItems="center">
        <St.CoureLine />
        <St.CoureWrapper>
          <St.CoureDesciption>지금으로부터 4천 년 전 이야기에 대해 살펴봅니다.</St.CoureDesciption>

          <img
            src="https://www.jsd.or.kr/files/2021/07/05/8bf87f030308086168be90d92d92f2f9125913.jpg"
            alt="루브르박물관"
            style={{ width: '293px', height: '189px', borderRadius: '8px', marginTop: '15px' }}
          />
        </St.CoureWrapper>
      </Flex>

      <Button>코스소개 더 보기</Button>
      <DivideLine margin="24px 0" />
    </Flex>
  );
}

export default DetailTourCourse;

const St = {
  CoureTitle: styled.h1`
    ${({ theme }) => theme.Text.header_medium_20};
    margin-bottom: 28px;
  `,

  TimeWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,

  Time: styled.h2`
    ${({ theme }) => theme.Text.body_bold_16};
    margin-right: 5px;
  `,

  TimeDescription: styled.h3`
    ${({ theme }) => theme.Text.detail_regular_12};
    ${({ theme }) => theme.Color.gray4};
  `,

  CoureDescriptionWrapper: styled.article`
    display: flex;
    flex-direction: column;
    width: 293px;
    height: 126px;
    margin-left: 20px;
  `,

  CoureLineTitle: styled.span`
    height: 156px;
    border-left: 2px solid ${({ theme }) => theme.Color.gray8};
  `,
  CoureLine: styled.span`
    height: 256px;
    border-left: 2px solid ${({ theme }) => theme.Color.gray8};
  `,
  Address: styled.h2`
    ${({ theme }) => theme.Text.body_bold_14};
  `,

  CoureDesciption: styled.h3`
    ${({ theme }) => theme.Text.body_regular_14};
  `,

  CoureWrapper: styled.article`
    display: flex;
    flex-direction: column;
    margin: 20px 0 20px 20px;
  `,
};
