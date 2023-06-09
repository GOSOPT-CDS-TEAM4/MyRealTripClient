import { useRecoilState, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { setModalData } from '../../../recoil/tourListRecoil';
import { theme } from '../../../styles/theme';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
import Text from '../../layout/atom/Text';

function BottomSheet({ clickedModal, title }) {
  const setModal = useSetRecoilState(setModalData);

  const CloseModal = () => {
    document.body.style.overflowY = 'auto';
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
          width: '430px',
          zIndex: '1000',
        }}>
        <Flex
          justifycontent="start"
          alignitems="center"
          style={{ width: '400px', marginLeft: '22px', marginTop: '22px' }}>
          <St.ButtonWrapper onClick={CloseModal}>
            <Icon type="ic_cancel" style={{ hover: 'cursor', width: '16px', height: '16px' }} />
          </St.ButtonWrapper>
          <Text
            type="body_bold_16"
            innerText={`${title}`}
            style={{
              color: `$theme.Color.gray1`,
              flexGrow: '1',
              textAlign: 'center',
            }}
          />
        </Flex>
        {clickedModal}
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
  `,
  ButtonWrapper: styled.button`
    flex-shrink: 0;
  `,
};
