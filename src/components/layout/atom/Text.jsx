import { styled } from 'styled-components';

import { theme } from '../../../styles/theme';

const Text = ({ type, innerText, style }) => (
  <St.TextWrapper type={theme.Text[type]} style={style}>
    {innerText}
  </St.TextWrapper>
);

export default Text;

const St = {
  TextWrapper: styled.span`
    ${({ type }) => type}
  `,
};
