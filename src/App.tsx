import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import MainLayout from './components/templates/MainLayout';
import { RootState } from './state';
import GlobalStyle from './style/GlobalStyle';
import { darkTheme } from './style/theme/dark';
import { lightTheme } from './style/theme/light';
const App = () => {
  const theme = useSelector((state: RootState) => state.anime.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <MainLayout />
    </ThemeProvider>
  );
}
export default App;
