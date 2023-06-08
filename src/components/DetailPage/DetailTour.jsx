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
import Booking from './Booking';
import { useState } from 'react';

function DetailTour() {
  const [modalOpen, setModalOpen] = useState(false);

  const bookingOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <St.DetailPageWholeWrapper>
        <St.StDetailTourImg />
        <St.DetailPageWrapper id="detail-page-wrapper">
          <DetailTourTitle />
          <DetailTourAbout />
          <DetailTourNotice />
          {modalOpen && <Booking handleModalClose={handleModalClose} />}
          <DetailTourDescription />
          <DetailTourReview />
          <DetailTourTripInfo />
          <DetailTourCourse />
          <DetailTourGuide />
          <DetailTourMore />
          <DetailPageFloat bookingOpen={bookingOpen} />
        </St.DetailPageWrapper>
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
    width: 420px;
    height: auto;
    top: -20px;
    z-index: 2;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    height: auto;
  `,
};
