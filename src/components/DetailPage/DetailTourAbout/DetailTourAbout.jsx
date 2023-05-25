import { useParams } from 'react-router-dom';

import { styled } from 'styled-components';

import useDetailTour from '../../../utils/useDetailTour';
import DivideLine from '../../layout/atom/DivideLine';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';

//디테일 투어 title 밑의 무료취소~한국어 까지
function DetailTourAbout() {
  const { tourId } = useParams();
  const detailTour = useDetailTour(tourId);
  const time = detailTour?.requiredTime;

  return (
    <Flex column justifycontent="center">
      <St.FreeCancelWrapper>
        <Icon type="cancel_blue" />
        <St.FreeCancel>무료 취소</St.FreeCancel>
        <St.FreeCancelAbout>상품 이용일 하루 전 오전 9시까지</St.FreeCancelAbout>
      </St.FreeCancelWrapper>
      <DivideLine margintop="15px" />

      <St.AboutWrapper>
        <Icon type="meta_clock" />
        <St.RecentlyReservation>최근에 예약이 발생했어요.</St.RecentlyReservation>
      </St.AboutWrapper>

      <St.AboutWrapper>
        <Icon type="meta_group" />
        <St.AboutTour>
          {detailTour.itemType}
          <span />
          (최소 출발 인원 1명)
        </St.AboutTour>
      </St.AboutWrapper>

      <St.AboutWrapper>
        <Icon type="meta_walking" />
        <St.AboutTour>{detailTour?.transfortation}</St.AboutTour>
      </St.AboutWrapper>

      <St.AboutWrapper>
        <Icon type="meta_time" />
        <St.AboutTour>
          {time.slice(0, 2)}시간 <span />
          {time.slice(3, 5)}분 소요
        </St.AboutTour>
      </St.AboutWrapper>

      <St.AboutWrapper>
        <Icon type="meta_language" />
        <St.AboutTour>{detailTour.language}</St.AboutTour>
      </St.AboutWrapper>
      <DivideLine margintop="15px" />
    </Flex>
  );
}

export default DetailTourAbout;

const St = {
  FreeCancelWrapper: styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 18px;
  `,

  FreeCancel: styled.h1`
    ${({ theme }) => theme.Text.body_bold_16};
    ${({ theme }) => theme.Color.gray2};
    margin-left: 6px;
  `,

  FreeCancelAbout: styled.span`
    ${({ theme }) => theme.Text.body_regular_14};
    color: ${({ theme }) => theme.Color.gray2};
    margin-left: 6px;
  `,

  AboutWrapper: styled.div`
    display: flex;
    margin-top: 13px;
    align-items: center;
  `,
  RecentlyReservation: styled.span`
    display: flex;
    align-items: center;
    margin-left: 10px;
    ${({ theme }) => theme.Text.body_regular_14};
    color: ${({ theme }) => theme.Color.blue1};
  `,

  AboutTour: styled.div`
    ${({ theme }) => theme.Text.body_regular_14};
    color: ${({ theme }) => theme.Color.gray1};
    margin-left: 10px;
  `,
};
