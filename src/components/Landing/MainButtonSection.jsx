import { styled } from 'styled-components';

import Flex from '../layout/atom/Flex';
import Icon from '../layout/atom/Icon';
import Text from '../layout/atom/Text';

function MainButtonSection() {
  return (
    <St.MainButtonWrapper>
      <Flex style={{ gap: '20px', transform: 'translateY(41px)' }} justifycontent="center">
        <article>
          <Icon type="img_ticket" />
          <Text type="detail_medium_12" innerText="항공권" />
        </article>
        <article>
          <Icon type="img_stay" />
          <Text type="detail_medium_12" innerText="숙소" />
        </article>
        <article>
          <Icon type="img_tour" />
          <Text type="detail_medium_12" innerText="투어·티켓" />
        </article>
      </Flex>
    </St.MainButtonWrapper>
  );
}

export default MainButtonSection;

const St = {
  MainButtonWrapper: styled.section`
    /* margin-top: 34px; */
    width: 100%;
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 999;
      border-radius: 10px;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
      background-color: ${({ theme }) => theme.Color.white};
      width: 82px;
      height: 85px;
    }
  `,
};
