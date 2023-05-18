import { ThemeProvider } from 'styled-components';

import Flex from './components/layout/atom/Flex';
import Icon from './components/layout/atom/Icon';
import Img from './components/layout/atom/Img';
import DetailTour from './pages/DetailTour';
import LandingPage from './pages/Landing';
import GlobalStyle from './styles/globalstyle';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Flex column justifycontent="space-evenly" alignitems="center">
        <DetailTour />
      </Flex>
      <LandingPage />
      <Flex column justifyContent="space-evenly" alignItems="center">
        <Icon type="search" />
        <Img type="img_bangkok" width="100px" height="100px" />
      </Flex>
    </ThemeProvider>
  );
}

export default App;
