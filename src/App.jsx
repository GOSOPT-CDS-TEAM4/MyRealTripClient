import './App.css';

import { styled, ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/globalstyle';
import { theme } from './styles/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <St.Div>hello</St.Div>
      <p>new change</p>
    </ThemeProvider>
  );
}

export default App;

const St = {
  Div: styled.div`
    ${({ theme }) => theme.Text.Header.title_bold_32};
  `,
};
