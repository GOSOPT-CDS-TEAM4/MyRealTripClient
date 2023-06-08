import styled from 'styled-components';

function Booking({ handleModalClose }) {
  return <St.Bookwrapper onClick={handleModalClose}>예약이 완료되었습니다.</St.Bookwrapper>;
}

export default Booking;

const St = {
  Bookwrapper: styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 50px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.Color.yellow};

    ${({ theme }) => theme.Text.body_bold_14};

    display: flex;
    z-index: 2;
    position: fixed;
    bottom: 500px;

    color: white;
  `,
};
