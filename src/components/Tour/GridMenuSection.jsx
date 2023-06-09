import { styled } from 'styled-components';

import Flex from '../layout/atom/Flex';
import Icon from '../layout/atom/Icon';
import Text from '../layout/atom/Text';

function GridMenuSection() {
  return (
    <St.GridMenuSectionWrapper>
      <Flex justifycontent="center" style={{ gap: '18px', marginTop: '32px' }}>
        <St.MenuIcon>
          <Icon type="img_flag" />
          <Text type="detail_regular_12" innerText="투어" />
        </St.MenuIcon>
        <St.MenuIcon>
          <Icon type="img_entry" />
          <Text type="detail_regular_12" innerText="입장권" />
        </St.MenuIcon>
        <St.MenuIcon>
          <Icon type="img_activity" />
          <Text type="detail_regular_12" innerText="액티비티" />
        </St.MenuIcon>
        <St.MenuIcon>
          <Icon type="img_class" />
          <Text type="detail_regular_12" innerText="클래스" />
        </St.MenuIcon>
      </Flex>
      <Flex justifycontent="center" style={{ gap: '18px', marginTop: '18px' }}>
        <St.MenuIcon>
          <Icon type="img_traffic" />
          <Text type="detail_regular_12" innerText="교통편의" />
        </St.MenuIcon>
        <St.MenuIcon>
          <Icon type="img_cart" />
          <Text type="detail_regular_12" innerText="여행편의" />
        </St.MenuIcon>
        <St.MenuIcon>
          <Icon type="img_camera" />
          <Text type="detail_regular_12" innerText="스냅촬영" />
        </St.MenuIcon>
        <St.MenuIcon>
          <Icon type="img_food" />
          <Text type="detail_regular_12" innerText="미식" />
        </St.MenuIcon>
      </Flex>
    </St.GridMenuSectionWrapper>
  );
}

export default GridMenuSection;

const St = {
  GridMenuSectionWrapper: styled.section`
    width: 100%;
  `,
  MenuIcon: styled.article`
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.Color.gray9};
    width: 70px;
    height: 70px;
  `,
};
