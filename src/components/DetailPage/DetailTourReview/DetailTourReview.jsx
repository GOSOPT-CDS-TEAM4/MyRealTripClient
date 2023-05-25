//이용 후기
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import useDetailTour from '../../../utils/useDetailTour';
import Button from '../../common/Button';
import DivideLine from '../../layout/atom/DivideLine';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';

function DetailTourReview() {
  const { tourId } = useParams();
  const detailTour = useDetailTour(tourId);

  return (
    <Flex column style={{ height: 'auto' }}>
      <St.ReviewTitle>이용 후기</St.ReviewTitle>
      <St.ScoreWrapper>
        <St.Score>{detailTour?.reviewTotalResponseDto?.totalRating}</St.Score>
        <St.ReviewCount>
          <Icon type="star_five_small" />
          후기 {detailTour?.reviewTotalResponseDto?.totalNumber}
        </St.ReviewCount>
      </St.ScoreWrapper>
      <St.ReviewScroll>
        <St.ReviewWrapper>
          <St.Reviewer>
            <Icon type="star_five_black" />
            <span> </span>
            {detailTour?.reviewTotalResponseDto?.reviewResponseDtoList[0].nickname}
          </St.Reviewer>
          <St.ReviewDescription>
            {detailTour?.reviewTotalResponseDto?.reviewResponseDtoList[0].keyword1}•
            {detailTour?.reviewTotalResponseDto?.reviewResponseDtoList[0].keyword2}•
            {detailTour?.reviewTotalResponseDto?.reviewResponseDtoList[0].createdAt.slice(0, 10)}
          </St.ReviewDescription>
          <St.Review>{detailTour?.reviewTotalResponseDto?.reviewResponseDtoList[0].content}</St.Review>
        </St.ReviewWrapper>

        <St.ReviewWrapper>
          <St.Reviewer>
            <Icon type="star_five_black" />
            <span> </span>
            {detailTour?.reviewTotalResponseDto?.reviewResponseDtoList[1].nickname}
          </St.Reviewer>
          <St.ReviewDescription>
            {detailTour?.reviewTotalResponseDto?.reviewResponseDtoList[1].keyword1}•
            {detailTour?.reviewTotalResponseDto?.reviewResponseDtoList[1].keyword2}•
            {detailTour?.reviewTotalResponseDto?.reviewResponseDtoList[1].createdAt.slice(0, 10)}
          </St.ReviewDescription>
          <St.Review>{detailTour?.reviewTotalResponseDto?.reviewResponseDtoList[1].content}</St.Review>
        </St.ReviewWrapper>
      </St.ReviewScroll>
      <Button>후기 {detailTour?.reviewTotalResponseDto?.totalNumber}개 전체보기</Button>

      <DivideLine margintop="24px" />
    </Flex>
  );
}

export default DetailTourReview;

const St = {
  ReviewTitle: styled.h1`
    color: ${({ theme }) => theme.Color.gray1};
    ${({ theme }) => theme.Text.title_medium_20};

    margin-top: 30px;
  `,

  ScoreWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 12px;
  `,

  Score: styled.span`
    color: ${({ theme }) => theme.Color.gray1};
    ${({ theme }) => theme.Text.title_bold_32};

    margin-right: 6px;
  `,

  ReviewCount: styled.span`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.Color.gray4};
    ${({ theme }) => theme.Text.detail_regular_12};
  `,

  ReviewWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 309px;
    height: 154px;
    padding: 16px 16px 0 16px;
    margin-bottom: 15px;
    margin-right: 10px;

    position: relative;

    border: 1px solid ${({ theme }) => theme.Color.gray8};
    border-radius: 8px;
  `,

  Reviewer: styled.h1`
    color: ${({ theme }) => theme.Color.gray1};
    ${({ theme }) => theme.Text.body_bold_14};
  `,

  ReviewDescription: styled.h2`
    margin-top: 9px;
    color: ${({ theme }) => theme.Color.gray4};
    ${({ theme }) => theme.Text.detail_regular_12};
  `,

  Review: styled.p`
    margin-top: 9px;
    width: 277px;
    height: 63px;
    color: ${({ theme }) => theme.Color.gray1};
    ${({ theme }) => theme.Text.body_regular_14};
  `,

  ReviewScroll: styled.section`
    display: flex;
    flex-direction: row;
    width: 360px;
    margin-bottom: 15px;

    position: relative;
    overflow-x: scroll;

    align-items: center;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
};
