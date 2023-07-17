// import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  sessionStorage,
  // Add any blacklist or whitelist configuration here if needed
};

export default persistConfig;