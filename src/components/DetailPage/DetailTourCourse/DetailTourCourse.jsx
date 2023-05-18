//코스 소개 안내
import { styled } from 'styled-components';

import Button from '../../common/Button';
import DivideLine from '../../layout/atom/DivideLine';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';

function DetailTourCourse() {
  return (
    <Flex column justifycontent="center">
      <St.CourseTitle>코스 소개</St.CourseTitle>
      <St.TimeWrapper>
        <Icon type="location_blue" />
        <St.Time>09:00</St.Time>
        <St.TimeDescription>출발</St.TimeDescription>
      </St.TimeWrapper>
      <Flex>
        <Flex alignitems="center" style={{ marginLeft: '15px' }}>
          <St.CourseLineTitle />
          <St.CourseDescriptionWrapper>
            <St.Address>주소: 1 place colette, 75001 Paris</St.Address>
            <St.CourseDesciption>
              루브르 박물관 유리 피라미드 앞 루이 14세 청동 기마상 아래 모임 장소 안내 : 상품페이지 하단 링크 참고 출발
              시간 10분 전까지 지정된 장소에 도착해주세요.
            </St.CourseDesciption>
          </St.CourseDescriptionWrapper>
        </Flex>
      </Flex>

      <St.TimeWrapper>
        <Icon type="location_black" />
        <St.Time>09:10</St.Time>
        <St.TimeDescription>루브르 발견하기</St.TimeDescription>
      </St.TimeWrapper>
      <Flex style={{ marginLeft: '15px' }}>
        <St.CourseLine />
        <St.CourseWrapper>
          <St.CourseDesciption>각 시대별 루브르 박물관의 쓰임을 살펴봅니다.</St.CourseDesciption>

          <img
            src="https://t1.daumcdn.net/cfile/tistory/2157723656165D1D15"
            alt="루브르박물관"
            style={{ width: '293px', height: '189px', borderRadius: '8px', margintop: '15px' }}
          />
        </St.CourseWrapper>
      </Flex>

      <St.TimeWrapper>
        <Icon type="location_black" />
        <St.Time>09:20</St.Time>
        <St.TimeDescription>인류 최초의 문명 메소포타미아</St.TimeDescription>
      </St.TimeWrapper>

      <St.CourseGradient>
        <St.CourseLine />
        <St.CourseWrapper>
          <St.CourseDesciption>지금으로부터 4천 년 전 이야기에 대해 살펴봅니다.</St.CourseDesciption>

          <img
            src="https://www.jsd.or.kr/files/2021/07/05/8bf87f030308086168be90d92d92f2f9125913.jpg"
            alt="루브르박물관"
            style={{ width: '293px', height: '189px', borderRadius: '8px', margintop: '15px' }}
          />
        </St.CourseWrapper>
      </St.CourseGradient>

      <Button>코스소개 더 보기</Button>
      <DivideLine margintop="24px" marginbottom="30px" />
    </Flex>
  );
}

export default DetailTourCourse;

const St = {
  CourseTitle: styled.h1`
    ${({ theme }) => theme.Text.title_medium_20};
    margin-bottom: 28px;
  `,

  TimeWrapper: styled.article`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin: 9px 0;
  `,

  Time: styled.h2`
    ${({ theme }) => theme.Text.body_bold_16};
    margin-right: 5px;
  `,

  TimeDescription: styled.h3`
    ${({ theme }) => theme.Text.detail_regular_12};
    ${({ theme }) => theme.Color.gray4};
  `,

  CourseDescriptionWrapper: styled.article`
    display: flex;
    flex-direction: column;
    width: 293px;
    height: 126px;
    margin-left: 20px;
  `,

  CourseLineTitle: styled.span`
    height: 156px;
    border-left: 2px solid ${({ theme }) => theme.Color.gray8};
  `,
  CourseLine: styled.span`
    height: 256px;
    border-left: 2px solid ${({ theme }) => theme.Color.gray8};
  `,
  Address: styled.h2`
    ${({ theme }) => theme.Text.body_bold_14};
  `,

  CourseDesciption: styled.h3`
    ${({ theme }) => theme.Text.body_regular_14};
  `,

  CourseWrapper: styled.article`
    display: flex;
    flex-direction: column;
    margin: 20px 0 20px 20px;
  `,

  CourseGradient: styled.article`
    display: flex;
    margin-left: 15px;
    margin-bottom: 27px;
  `,
};
