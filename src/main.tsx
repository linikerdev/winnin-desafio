import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider, useSelector } from 'react-redux'
import { persistor, RootState, store } from './state/index.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './style/GlobalStyle.tsx'
import { lightTheme } from './style/theme/light.ts'
import { darkTheme } from './style/theme/dark.ts'

const RootApp = () => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RootApp />
    </PersistGate>
  </Provider>
);