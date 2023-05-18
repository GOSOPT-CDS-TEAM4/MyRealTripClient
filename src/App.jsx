import { ThemeProvider } from 'styled-components';

import TourListPage from './pages/TourListPage';
import GlobalStyle from './styles/globalstyle';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TourListPage />
    </ThemeProvider>
  );
}

export default App;
