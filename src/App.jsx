import { ThemeProvider } from 'styled-components';


import GlobalStyle from './styles/globalstyle';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
   
    </ThemeProvider>
  );
}

export default App;
