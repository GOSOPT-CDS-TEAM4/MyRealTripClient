import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { setModalData } from '../../../recoil/tourListRecoil';
import { theme } from '../../../styles/theme';
import Flex from '../../layout/atom/Flex';
import Icon from '../../layout/atom/Icon';
import Text from '../../layout/atom/Text';

function BottomSheet({ clickedModal, title }) {
  const [modal, setModal] = useRecoilState(setModalData);
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
          width: '420px',
          zIndex: '10',
        }}>
        <Flex justifycontent="center">
          <St.ButtonWrapper onClick={CloseModal}>
            <Icon type="ic_cancel" style={{ flexShrink: '0', margin: '18px 24px', width: '18px', hover: 'cursor' }} />
          </St.ButtonWrapper>
          <Text
            type="body_bold_16"
            innerText={`${title}`}
            style={{
              flexGrow: '1',
              marginTop: '15px',
              color: `$theme.Color.gray1`,
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
    .exitBtn {
      flex-shrink: 0;
      margin: 18px 24px;
      width: 18px;
    }
  `,
  ButtonWrapper: styled.button``,
};
