import { styled } from 'styled-components';

function bottomSheet() {
  return (
    <>
      <St.ModalBackground />
    </>
  );
}

export default bottomSheet;

const St = {
  ModalBackground: styled.div`
    background-color: ${({ theme }) => theme.Color.black};
  `,
  BottomSheetWrapper: styled.div``,
  BottomSheetHeader: styled.div``,
};
