//코스 소개 밑의 이용 안내
import { styled } from 'styled-components';

import Flex from '../../layout/atom/Flex';
import Button from '../../layout/molecule/button';

function DetailTourGuide() {
  return (
    <Flex column>
      <St.GuideTitle>이용 안내</St.GuideTitle>
      <St.GuideDetailTitle>만나는 시간</St.GuideDetailTitle>
      <St.GuideDetail>9시</St.GuideDetail>
      <St.GuideDetailTitle>만나는 장수</St.GuideDetailTitle>
      <St.GuideDetail>루브르 박물관 유리 피라미드 앞 루이 14세 청동 기마상 아래</St.GuideDetail>
      <Button>이용 안내 더 보기</Button>
    </Flex>
  );
}

export default DetailTourGuide;

const St = {
  GuideTitle: styled.h1`
    ${({ theme }) => theme.Text.title_medium_20};

    margin-bottom: 20px;
  `,

  GuideDetailTitle: styled.h2`
    ${({ theme }) => theme.Text.body_bold_14};
    ${({ theme }) => theme.Color.gray1};

    margin-bottom: 14px;
  `,

  GuideDetail: styled.h3`
    ${({ theme }) => theme.Text.body_regular_14};
    ${({ theme }) => theme.Color.gray1};

    margin-bottom: 30px;
  `,
};
