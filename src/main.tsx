import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './state/index.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './style/GlobalStyle.tsx'
import { darkTheme } from './style/theme/dark.ts'
import { ApolloProvider } from '@apollo/client'
import client from './config/graphql.client.ts'


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </PersistGate>
    </ApolloProvider>
  </Provider>,
)
