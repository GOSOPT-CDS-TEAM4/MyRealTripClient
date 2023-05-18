//이용 후기
import { styled } from 'styled-components';

import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
import Button from '../../layout/molecule/button';

function DetailTourReview() {
  return (
    <Flex column>
      <St.ReviewTitle>이용 후기</St.ReviewTitle>
      <St.ScoreWrapper>
        <St.Score>4.9</St.Score>
        <St.ReviewCount>
          <Icon type="star_five_small" />
          후기 2406개
        </St.ReviewCount>
      </St.ScoreWrapper>

      <St.ReviewWrapper>
        <St.Reviewer>
          <Icon type="star_five_black" />
          강**
        </St.Reviewer>
        <St.ReviewDescription>30대 • 배우자와 가는 여행 • 2023-04-28</St.ReviewDescription>
        <St.Review>
          가이드님이 너무 재미있게 잘 설명해주세요! 특히 파리의 건축과 역사를 먼저 설명해주신게 이해가 쏙쏙 됐습니다.
          미술사, 건축양식, 인문학이 합...
        </St.Review>
      </St.ReviewWrapper>

      <Button>후기 2,406개 전체보기</Button>
      <Icon style={{ marginTop: '24px' }} type="line" />
    </Flex>
  );
}

export default DetailTourReview;

const St = {
  ReviewTitle: styled.div`
    color: ${({ theme }) => theme.Color.gray1};
    ${({ theme }) => theme.Text.header_medium_20};

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
    color: ${({ theme }) => theme.Color.gray1};
    ${({ theme }) => theme.Text.body_regular_14};
  `,
};
