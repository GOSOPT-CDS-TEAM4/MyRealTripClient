//디테일 투어 페이지
import { styled } from 'styled-components';

import DetailPageFloat from './DetailPageFloat/DetailPageFloat';
import DetailTourAbout from './DetailTourAbout';
import DetailTourCourse from './DetailTourCourse';
import DetailTourDescription from './DetailTourDescription';
import DetailTourGuide from './DetailTourGuide';
import DetailTourImg from './DetailTourImg';
import DetailTourMore from './DetailTourMore/DetailTourMore';
import DetailTourNotice from './DetailTourNotice';
import DetailTourReview from './DetailTourReview/DetailTourReview';
import DetailTourTitle from './DetailTourTitle/DetailTourTitle';
import DetailTourTripInfo from './DetailTourTripInfo';

function DetailTour() {
  return (
    <>
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
        <DetailPageFloat />
      </St.DetailPageWholeWrapper>
    </>
  );
}

export default DetailTour;

const St = {
  DetailPageWholeWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
  `,

  StDetailTourImg: styled(DetailTourImg)`
    position: relative;
  `,

  DetailPageWrapper: styled.main`
    display: flex;
    position: relative;
    background-color: ${({ theme }) => theme.Color.white};
    width: 375px;

    top: -20px;
    z-index: 2;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  `,
};
