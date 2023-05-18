import { styled } from 'styled-components';

import Icon from '../../layout/atom/Icon';

function Button({ children }) {
  return (
    <St.ButtonWrapper>
      {children}
      <Icon type="arrow_down_23" style={{ marginRight: '6px' }} />
    </St.ButtonWrapper>
  );
}

export default Button;

const St = {
  ButtonWrapper: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 344px;
    height: 54px;

    border: 1px solid ${({ theme }) => theme.Color.gray8};
    border-radius: 6px;

    background-color: ${({ theme }) => theme.Color.white};
    ${({ theme }) => theme.Text.body_bold_16};
    color: ${({ theme }) => theme.Color.gray2};
  `,
};
