//Notice 밑의 Q&A
import { useParams } from 'react-router-dom';

import { styled } from 'styled-components';

import useDetailTour from '../../../utils/useDetailTour';
import Button from '../../common/Button';
import DivideLine from '../../layout/atom/DivideLine';
import Flex from '../../layout/atom/Flex';

function DetailTourDescription() {
  const { tourId } = useParams();
  const detailTour = useDetailTour(tourId);

  return (
    <Flex column style={{ marginLeft: '15px' }}>
      <St.DescriptionTitle>{detailTour.descriptionTitle}</St.DescriptionTitle>
      <St.DescriptionWrapper>
        <St.Division />
        {detailTour.description}
      </St.DescriptionWrapper>
      <Button>상품 설명 더보기</Button>
      <DivideLine margintop="24px" />
    </Flex>
  );
}

export default DetailTourDescription;

const St = {
  DescriptionTitle: styled.header`
    width: 336px;
    ${({ theme }) => theme.Text.title_medium_20};
    color: ${({ theme }) => theme.Color.black};
  `,

  DescriptionWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 345px;

    margin-bottom: 10px;

    ${({ theme }) => theme.Text.body_regular_14};

    background: linear-gradient(180deg, black, rgba(0, 0, 0, 0.8) 26.79%, rgba(0, 0, 0, 0) 100%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  `,

  Division: styled.div`
    display: flex;
    height: 21px;
  `,
};
