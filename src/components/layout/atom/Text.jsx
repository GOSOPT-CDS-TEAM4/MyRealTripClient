import { styled } from 'styled-components';

import { theme } from '../../../styles/theme';

const Text = ({ type, innerText }) => <St.Text style={theme.Text[type]}>{innerText}</St.Text>;

export default Text;

const St = {
  Text: styled.span`
    position: absolute;
  `,
};
