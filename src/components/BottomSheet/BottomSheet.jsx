import { styled } from 'styled-components';

import TourType from './TourType';

function BottomSheet() {
  return (
    <>
      <St.ModalBackground />
      <St.BottomSheetWrapper>
        <St.BottomSheetHeader>
          <img src="assets/icon/ic_cancel.png" alt="x" />
          <div className="bs_title"> 투어형태 </div>
        </St.BottomSheetHeader>
        <TourType />
        <St.BottomSheetFooter>
          <button className="refresh">
            <img src="assets/icon/ic_reset.png" alt="" />
            <span> 초기화 </span>
          </button>
          <button className="submit">
            <span> 적용하기 </span>
          </button>
        </St.BottomSheetFooter>
      </St.BottomSheetWrapper>
    </>
  );
}

export default BottomSheet;

const St = {
  ModalBackground: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(20, 23, 25, 0.4); // 임시 컬러
    z-index: 1;
  `,
  BottomSheetWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    bottom: 0px;
    border-radius: 15px 15px 0px 0px;
    width: 100%;
    background-color: ${({ theme }) => theme.Color.white};
    z-index: 10;
  `,

  BottomSheetHeader: styled.div`
    display: flex;
    > img {
      margin: 18px 24px;
      width: 18px;
      flex-shrink: 0;
    }
    .bs_title {
      text-align: center;
      flex-grow: 1;
      margin-top: 15px;
      ${({ theme }) => theme.Text.body_bold_16};
      color: ${({ theme }) => theme.Color.gray1};
    }
  `,
  BottomSheetFooter: styled.div`
    display: flex;
    justify-content: center;
    ${({ theme }) => theme.Text.body_bold_14};
    color: ${({ theme }) => theme.Color.gray4};
    .refresh {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background-color: ${({ theme }) => theme.Color.gray8};
      padding: 11px 14px 11px 14px;
      margin: 10px 0px 18px 18px;
      border-radius: 4px;

      > img {
        margin-right: 5px;
      }
    }
    .submit {
      background-color: ${({ theme }) => theme.Color.blue2};
      color: ${({ theme }) => theme.Color.white};
      padding: 11px 106px 11px 106px;
      margin: 10px 0px 18px 18px;
      border-radius: 4px;
    }
  `,
};
