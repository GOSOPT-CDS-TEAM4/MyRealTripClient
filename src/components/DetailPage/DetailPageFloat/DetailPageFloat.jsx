import { styled } from 'styled-components';

import Icon from '../../layout/atom/Icon';

function DetailPageFloat() {
  return (
    <St.FloatWrapper>
      <St.HeartBtn>
        <Icon type="heart_empty" />
      </St.HeartBtn>
      <St.ReservationBtn>예약하기</St.ReservationBtn>
    </St.FloatWrapper>
  );
}

export default DetailPageFloat;

const St = {
  FloatWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;

    gap: 10px;

    display: flex;
    z-index: 2;
    position: fixed;
    bottom: 0;

    background-color: white;
  `,
  HeartBtn: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 44px;
    height: 44px;

    background-color: ${({ theme }) => theme.Color.gray8};
    border-radius: 4px;
  `,
  ReservationBtn: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 305px;
    height: 44px;
    background-color: ${({ theme }) => theme.Color.blue2};
    color: ${({ theme }) => theme.Color.white};

    ${({ theme }) => theme.Text.body_bold_14};
  `,
};
