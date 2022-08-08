import notes from '../notes';

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  wihteList: [notes],
};

const appReducer = combineReducers({
  notes: persistReducer(persistConfig, notes),
});

export default appReducer;
