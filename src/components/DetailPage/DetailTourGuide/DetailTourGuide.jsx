//코스 소개 밑의 이용 안내

import { useParams } from 'react-router-dom';

import { styled } from 'styled-components';

import DetailTourMap from './DetailTourMap';
import useDetailTour from '../../../utils/useDetailTour';
import Button from '../../common/Button';
import Flex from '../../layout/atom/Flex';

function DetailTourGuide() {
  const { tourId } = useParams();
  const detailTour = useDetailTour(tourId);

  return (
    <Flex column justifycontent="center">
      <St.GuideTitle>이용 안내</St.GuideTitle>
      {detailTour?.guideResponseDto?.time ? (
        <>
          <St.GuideDetailTitle>만나는 시간</St.GuideDetailTitle>
          <St.GuideDetail>{detailTour.guideResponseDto?.time}</St.GuideDetail>
        </>
      ) : (
        <Flex />
      )}

      <St.GuideDetailTitle>만나는 장소</St.GuideDetailTitle>
      <Flex column alignitems="center" style={{ gap: '15px' }}>
        <St.GuideDetail>{detailTour.guideResponseDto?.locationResponseDto?.locationDescription}</St.GuideDetail>
        <DetailTourMap></DetailTourMap>

        <Button>이용 안내 더 보기</Button>
      </Flex>
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
