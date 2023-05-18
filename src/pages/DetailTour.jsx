//디테일 투어 페이지

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
    <Flex column justifyContent="space-evenly">
      <DetailTourImg />
      <DetailTourTitle />
      <DetailTourAbout />
      <DetailTourNotice />
      <DetailTourDescription />
      <DetailTourReview />
      <DetailTourTripInfo />
      <DetailTourCourse />
      <DetailTourGuide />
      <DetailTourMore />
    </Flex>
  );
}

export default DetailTour;
