import { ThemeProvider } from 'styled-components';

import Flex from './components/layout/atom/Flex';
import DetailTour from './pages/DetailTour';

import LandingPage from './pages/Landing';
// import Flex from './components/layout/atom/Flex';
// import Icon from './components/layout/atom/Icon';
// import Img from './components/layout/atom/Img';
import TourListPage from './pages/tourListPage';
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
      <St.Div>hello</St.Div>
      <Flex column justifyContent="space-evenly" alignItems="center">
        <Icon type="search" />
        <Img type="img_bangkok" width="100px" height="100px" />
      </Flex>
    </ThemeProvider>
  );
}

export default App;
