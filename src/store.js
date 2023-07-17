import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import authReducer from './authSlice'; // Import your authentication reducer
// Import other reducers from your app

const persistConfig = {
  key: 'root',
  storage: storageSession,
  // Add any blacklist or whitelist configuration here if needed
};

const rootReducer = combineReducers({
  auth: authReducer, // Include your authentication reducer here
  // Include other reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export default store;
export { persistor };