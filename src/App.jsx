import { ThemeProvider } from 'styled-components';

<<<<<<< HEAD
import Flex from './components/layout/atom/Flex';
import DetailTour from './pages/DetailTour';
=======
import LandingPage from './pages/Landing';
>>>>>>> 52ec659 (✨ [feat] LandingPage 작업...)
import GlobalStyle from './styles/globalstyle';
import { theme } from './styles/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
<<<<<<< HEAD
      <Flex column justifyContent="space-evenly" alignItems="center">
        <DetailTour />
      </Flex>
=======
      <LandingPage />
>>>>>>> 52ec659 (✨ [feat] LandingPage 작업...)
    </ThemeProvider>
  );
}

export default App;
