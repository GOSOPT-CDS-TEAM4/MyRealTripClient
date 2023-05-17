import { ThemeProvider } from 'styled-components';

import LandingPage from './pages/Landing';
import GlobalStyle from './styles/globalstyle';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
