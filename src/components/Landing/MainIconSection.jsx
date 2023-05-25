import { styled } from 'styled-components';

import Icon from '../layout/atom/Icon';

function IconSection() {
  return (
    <St.MainSectionIconWrapper>
      <St.IconWrapper>
        <Icon type="hotel" />
        <Icon type="insurance" />
        <Icon type="kids" />
        <Icon type="car" />
        <Icon type="package" />
        <Icon type="koreastay" />
      </St.IconWrapper>
    </St.MainSectionIconWrapper>
  );
}

export default IconSection;

const St = {
  MainSectionIconWrapper: styled.section`
    width: 100%;
  `,
  IconWrapper: styled.section`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};
