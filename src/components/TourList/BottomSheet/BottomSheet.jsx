import { styled } from 'styled-components';

import { theme } from '../../../styles/theme';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
import Text from '../../layout/atom/Text';

function BottomSheet({ setModal, clickedModal }) {
  const CloseModal = () => {
    setModal(false);
  };

  return (
    <>
      <St.ModalBackground />
      <Flex
        justifycontent="space-between"
        column="true"
        style={{
          backgroundColor: theme.Color.white,
          position: 'fixed',
          bottom: '0px',
          borderRadius: '15px 15px 0px 0px',
          width: '100%',
          zIndex: '10',
        }}>
        <Flex justifycontent="center">
          {/* <Icon type="ic_cancel" onClick={CloseModal} style={{ flexShrink: '0', margin: '18px 24px', width: '18px' }} /> */}
          <button onClick={CloseModal}> X </button>
          <Text
            type="body_bold_16"
            innerText="투어형태"
            style={{
              flexGrow: '1',
              marginTop: '15px',
              color: `$theme.Color.gray1`,
              textAlign: 'center',
            }}
          />
        </Flex>
        {clickedModal}
        <St.BottomSheetFooter>
          <button className="refresh">
            <Icon type="ic_reset" style={{ marginLeft: '5px' }} />
            <Text type="body_bold_14" innerText="초기화" />
          </button>
          <button className="submit">
            <Text type="body_bold_14" innerText="적용하기" />
          </button>
        </St.BottomSheetFooter>
      </Flex>
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
    background-color: ${({ theme }) => theme.Color.bg_modal};
    z-index: 1;
    .exitBtn {
      flex-shrink: 0;
      margin: 18px 24px;
      width: 18px;
    }
  `,

  BottomSheetFooter: styled.div`
    display: flex;
    width: 90%;
    justify-content: center;
    gap: 6px;
    color: ${({ theme }) => theme.Color.gray4};
    margin: 10px 18px;
    .refresh {
      display: flex;
      width: 87px;
      align-items: center;
      justify-content: space-evenly;
      background-color: ${({ theme }) => theme.Color.gray8};
      padding: 11px 14px 11px 14px;
      border-radius: 4px;
    }
    .submit {
      background-color: ${({ theme }) => theme.Color.blue2};
      color: ${({ theme }) => theme.Color.white};
      width: 80%;
      padding: 11px 14px 11px 14px;
      border-radius: 4px;
      text-align: center;
    }
  `,
};
