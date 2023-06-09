//이용 후기 밑의 상품 정보에 관한 것
import { useParams } from 'react-router-dom';

import { styled } from 'styled-components';

import addCommasInNumbers from '../../../utils/addCommasInNumber';
import useDetailTour from '../../../utils/useDetailTour';
import DivideLine from '../../layout/atom/DivideLine';
import Flex from '../../layout/atom/Flex';

function DetailTourTripInfo() {
  const { tourId } = useParams();
  const detailTour = useDetailTour(tourId);

  return (
    <Flex column>
      <St.InfoTitle>상품 정보</St.InfoTitle>
      <St.InfoDetailTitle>인원별 가격</St.InfoDetailTitle>
      <Flex>
        <St.PeopleDetailWrapper>
          <St.PeopleInfoDetail>1명~6명</St.PeopleInfoDetail>
        </St.PeopleDetailWrapper>
        <St.PriceDetailWrpper>
          <St.PeoplePriceDetail>{detailTour.price && `${addCommasInNumbers(detailTour.price)}`}원</St.PeoplePriceDetail>
        </St.PriceDetailWrpper>
      </Flex>

      <St.InfoDetailTitle>포함 사항</St.InfoDetailTitle>
      <St.InfoDetail>{detailTour?.includedOption}</St.InfoDetail>
      <St.InfoDetailTitle>불포함 사항</St.InfoDetailTitle>
      <St.InfoDetail>{detailTour?.excludedOption}</St.InfoDetail>

      <DivideLine margintop="30px" marginbottom="30px" />
    </Flex>
  );
}

export default DetailTourTripInfo;

const St = {
  InfoTitle: styled.h1`
    ${({ theme }) => theme.Text.title_medium_20};
    ${({ theme }) => theme.Color.gray1};

    margin-top: 30px;
  `,

  InfoDetailTitle: styled.h2`
    ${({ theme }) => theme.Text.body_bold_14};
    ${({ theme }) => theme.Color.gray1};
    margin-top: 30px;

    margin-bottom: 14px;
  `,

  InfoDetail: styled.h3`
    ${({ theme }) => theme.Text.body_regular_14};
    ${({ theme }) => theme.Color.gray1};
  `,

  PeopleDetailWrapper: styled.div`
    display: flex;
    align-items: center;
    width: 173px;
    height: 36px;
    border-top: 1px solid ${({ theme }) => theme.Color.gray8};
    border-bottom: 1px solid ${({ theme }) => theme.Color.gray8};

    background-color: ${({ theme }) => theme.Color.gray9};
  `,
  PriceDetailWrpper: styled.div`
    display: flex;
    align-items: center;
    width: 173px;
    height: 36px;
    border-top: 1px solid ${({ theme }) => theme.Color.gray8};
    border-bottom: 1px solid ${({ theme }) => theme.Color.gray8};
    background-color: ${({ theme }) => theme.Color.white};
  `,
  PeopleInfoDetail: styled.h3`
    ${({ theme }) => theme.Text.body_regular_14};
    ${({ theme }) => theme.Color.gray1};
    margin-left: 18px;
  `,
  PeoplePriceDetail: styled.h3`
    ${({ theme }) => theme.Text.body_bold_14};
    ${({ theme }) => theme.Color.gray1};
    margin-left: 18px;
  `,
};
