import { styled, ThemeProvider } from 'styled-components';

import Flex from './components/layout/atom/Flex';
import Icon from './components/layout/atom/Icon';
import Img from './components/layout/atom/Img';
import GlobalStyle from './styles/globalstyle';
import { theme } from './styles/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <St.Div>hello</St.Div>
      <Flex column justifyContent="space-evenly" alignItems="center">
        <Icon type="search" />
        <Img type="img_bangkok" width="100px" height="100px" />
      </Flex>
    </ThemeProvider>
  );
}

export default App;

const St = {
  Div: styled.div`
    ${({ theme }) => theme.Text.title_bold_32};
  `,
};
