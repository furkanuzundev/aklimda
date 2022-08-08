import { createStore, applyMiddleware } from 'redux';
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const store = createStore(reducers, applyMiddleware(thunk));
const persistor = persistStore(store);


export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
