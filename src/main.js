import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { persistor, store } from './state/index.ts';
import { PersistGate } from 'redux-persist/integration/react';
createRoot(document.getElementById('root')).render(_jsx(Provider, { store: store, children: _jsx(PersistGate, { loading: null, persistor: persistor, children: _jsx(App, {}) }) }));
