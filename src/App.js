import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import MainLayout from './components/templates/MainLayout';
import GlobalStyle from './style/GlobalStyle';
import { darkTheme } from './style/theme/dark';
import { lightTheme } from './style/theme/light';
const App = () => {
    const theme = useSelector((state) => state.anime.theme);
    return (_jsxs(ThemeProvider, { theme: theme === 'light' ? lightTheme : darkTheme, children: [_jsx(GlobalStyle, {}), _jsx(MainLayout, {})] }));
};
export default App;
