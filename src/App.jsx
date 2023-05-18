import { ThemeProvider } from 'styled-components';

import Flex from './components/layout/atom/Flex';
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
    </ThemeProvider>
  );
}

export default App;
