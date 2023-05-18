import { ThemeProvider } from 'styled-components';

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
