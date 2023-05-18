//디테일 투어 페이지
import { styled } from 'styled-components';

import DetailTourAbout from '../components/DetailPage/DetailTourAbout';
import DetailTourCourse from '../components/DetailPage/DetailTourCourse';
import DetailTourDescription from '../components/DetailPage/DetailTourDescription';
import DetailTourGuide from '../components/DetailPage/DetailTourGuide';
import DetailTourImg from '../components/DetailPage/DetailTourImg';
import DetailTourMore from '../components/DetailPage/DetailTourMore/DetailTourMore';
import DetailTourNotice from '../components/DetailPage/DetailTourNotice';
import DetailTourReview from '../components/DetailPage/DetailTourReview/DetailTourReview';
import DetailTourTitle from '../components/DetailPage/DetailTourTitle/DetailTourTitle';
import DetailTourTripInfo from '../components/DetailPage/DetailTourTripInfo';
import Flex from '../components/layout/atom/Flex';

function DetailTour() {
  return (
    <Flex column justifycontent="center">
      <St.DetailPageWholeWrapper>
        <St.StDetailTourImg />
        <St.DetailPageWrapper>
          <DetailTourTitle />
          <DetailTourAbout />
          <DetailTourNotice />
          <DetailTourDescription />
          <DetailTourReview />
          <DetailTourTripInfo />
          <DetailTourCourse />
          <DetailTourGuide />
          <DetailTourMore />
        </St.DetailPageWrapper>
      </St.DetailPageWholeWrapper>
    </Flex>
  );
}

export default DetailTour;

const St = {
  DetailPageWholeWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 375px;
    padding: 0 15px;
  `,

  StDetailTourImg: styled(DetailTourImg)`
    position: relative;
  `,

  DetailPageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    top: -20px;

    width: 375px;

    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    background-color: ${({ theme }) => theme.Color.white};
  `,
};
