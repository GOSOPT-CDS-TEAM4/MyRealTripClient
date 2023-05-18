import { styled } from 'styled-components';

import Flex from '../layout/atom/Flex';
import Icon from '../layout/atom/Icon';

function IconSection() {
  return (
    <St.MainSectionIconWrapper>
      <Flex justifycontent="center" alignitems="center" style={{ gap: '15px' }}>
        <Icon type="hotel" />
        <Icon type="insurance" />
        <Icon type="kids" />
        <Icon type="car" />
        <Icon type="package" />
        <Icon type="koreastay" />
      </Flex>
    </St.MainSectionIconWrapper>
  );
}

export default IconSection;

const St = {
  MainSectionIconWrapper: styled.section`
    padding-top: 70px;
    width: 100%;
  `,
};
