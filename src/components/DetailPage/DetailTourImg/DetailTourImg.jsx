/* eslint-disable jsx-a11y/alt-text */
import { useParams } from 'react-router-dom/';

import useDetailTour from '../../../utils/useDetailTour';
import Flex from '../../layout/atom/Flex';

//제목 상단의 이미지
function DetailTourImg() {
  const { tourId } = useParams();
  const detailTour = useDetailTour(tourId);

  return <Flex>{detailTour.image && <img src={detailTour.image} width="420px" height="305px" />}</Flex>;
}

export default DetailTourImg;
