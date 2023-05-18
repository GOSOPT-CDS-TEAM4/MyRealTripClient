import { styled } from 'styled-components';

import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';

//디테일 투어 title 밑의 무료취소~한국어 까지
function DetailTourAbout() {
  return (
    <Flex column justifyContent="space-evenly">
      <Icon type="line" />
      <St.FreeCancelWrapper>
        <Icon type="cancel_blue" />
        <St.FreeCancel>무료 취소</St.FreeCancel>
        <St.FreeCancelAbout>상품 이용일 하루 전 오전 9시까지</St.FreeCancelAbout>
      </St.FreeCancelWrapper>
      <Icon type="line" />
      <St.AboutWrapper>
        <Icon type="meta_clock" />
        <St.RecentlyReservation>최근에 예약이 발생했어요.</St.RecentlyReservation>
      </St.AboutWrapper>

      <St.AboutWrapper>
        <Icon type="meta_group" />
        <St.AboutTour>그룹 투어(최소 출발 인원 1명)</St.AboutTour>
      </St.AboutWrapper>

      <St.AboutWrapper>
        <Icon type="meta_walking" />
        <St.AboutTour>도보 이동</St.AboutTour>
      </St.AboutWrapper>

      <St.AboutWrapper>
        <Icon type="meta_time" />
        <St.AboutTour>3시간 30분 소요</St.AboutTour>
      </St.AboutWrapper>

      <St.AboutWrapper>
        <Icon type="meta_language" />
        <St.AboutTour>한국어</St.AboutTour>
      </St.AboutWrapper>
      <Icon style={{ marginTop: '13px' }} type="line" />
    </Flex>
  );
}

export default DetailTourAbout;

const St = {
  FreeCancelWrapper: styled.article`
    display: flex;
    margin: 15px 0;
  `,

  FreeCancel: styled.span`
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
