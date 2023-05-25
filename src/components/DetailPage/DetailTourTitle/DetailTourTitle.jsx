import { useParams } from 'react-router-dom/';

import styled from 'styled-components';

import useDetailTour from '../../../utils/useDetailTour';
import DivideLine from '../../layout/atom/DivideLine';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';

//이미지 하단 투어에 관한 제목, 별점, 가격
function DetailTourTitle() {
  const { tourId } = useParams();
  const detailTour = useDetailTour(tourId);

  // console.log(detailTour.reviewTotalResponseDto.totalRating);

  return (
    <>
      <Flex column justifycontent="center" style={{ marginTop: '20px', marginLeft: '15px' }}>
        <St.Location>
          {detailTour.country}
          {'>'}
          <Icon type="location_gray" style={{ padding: '0 8.5px' }} />
          {detailTour.city}
        </St.Location>
        <St.Header>{detailTour.title}</St.Header>

        <St.Container>
          <St.ReviewWrapper>
            <St.Star>
              <Icon type="star_five_small" style={{ padding: '0 6px' }} />
              {detailTour.reviewTotalResponseDto && detailTour.reviewTotalResponseDto.totalRating}
            </St.Star>
            <St.ReviewCount>
              ({detailTour?.reviewTotalResponseDto?.totalNumber}) {'>'}
            </St.ReviewCount>
          </St.ReviewWrapper>

          <St.MoneyWrapper>
            <St.Money>{detailTour.price}</St.Money>
            <St.People>1인</St.People>
          </St.MoneyWrapper>
        </St.Container>
      </Flex>
      <DivideLine margintop="20px" />
    </>
  );
}

export default DetailTourTitle;

const St = {
  Location: styled.h3`
    ${({ theme }) => theme.Text.body_medium_14};
    color: ${({ theme }) => theme.Color.gray4};
  `,

  Header: styled.header`
    ${({ theme }) => theme.Text.title_bold_24};
    margin-top: 16px;
    margin-bottom: 16px;
    width: 375px;
  `,

  Container: styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,

  Star: styled.h2`
    ${({ theme }) => theme.Text.body_bold_14};
  `,

  ReviewWrapper: styled.article`
    display: flex;
  `,

  ReviewCount: styled.h2`
    ${({ theme }) => theme.Text.body_medium_14};
    color: ${({ theme }) => theme.Color.gray4};
    margin-left: 2px;
  `,

  MoneyWrapper: styled.article`
    display: flex;
    justify-content: center;
    align-items: baseline;
  `,
  Money: styled.h2`
    ${({ theme }) => theme.Text.title_bold_18};
  `,

  People: styled.h3`
    ${({ theme }) => theme.Text.body_medium_14};
    color: ${({ theme }) => theme.Color.gray4};
    margin-left: 4px;
  `,
};
