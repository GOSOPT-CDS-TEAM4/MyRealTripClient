import { styled } from 'styled-components';

import { theme } from '../../../styles/theme';

function EllipsisText({ type, innerText, style }) {
  return (
    <St.TextWrapper type={theme.Text[type]} style={style}>
      {innerText}
    </St.TextWrapper>
  );
}

export default EllipsisText;

const St = {
  TextWrapper: styled.span`
    ${({ type }) => type}
    display: inline-block;
    width: 149px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
};
