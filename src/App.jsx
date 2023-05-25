import { atom, RecoilRoot, selector, useRecoilState, useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';

import Router from './components/common/Router';
import GlobalStyle from './styles/globalstyle';
import { theme } from './styles/theme';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
