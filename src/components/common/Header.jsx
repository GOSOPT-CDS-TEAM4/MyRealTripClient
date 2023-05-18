import { styled } from 'styled-components';

import Flex from '../layout/atom/Flex';
import Icon from '../layout/atom/Icon';

function Header({ headerType }) {
  return (
    <St.HeaderWrapper>
      <Flex alignitems="center" justifycontent="space-between" style={{ padding: '15px' }}>
        {headerType === 'white' ? (
          <>
            <Icon type="menu_white" />
            <Icon type="img_logo_white" />
            <Icon type="search_white" />
          </>
        ) : (
          <>
            <Icon type="menu" />
            <Icon type="img_logo_black" />
            <Icon type="search" />
          </>
        )}
      </Flex>
    </St.HeaderWrapper>
  );
}

export default Header;

const St = {
  HeaderWrapper: styled.header`
    width: calc(100% - 30px);
  `,
};
