import { ThemeProvider } from 'styled-components';

import Flex from './components/layout/atom/Flex';
import DetailTour from './pages/DetailTour';
import GlobalStyle from './styles/globalstyle';
import { theme } from './styles/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Flex column justifyContent="space-evenly" alignItems="center">
        <DetailTour />
      </Flex>
    </ThemeProvider>
  );
}

export default App;
