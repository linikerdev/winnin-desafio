import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import themeReducer from './theme/reducer'
import { api } from '../services/api';
const persistConfig = {
    key: 'root',
    storage,
    timeout: 1,
    whitelist: ['themeReducer'],
}


const rootReducer = combineReducers({
    themeReducer,
    [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

const persistor = persistStore(store);

export { store, persistor };