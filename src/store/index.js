import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/index";
import ReduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleware = compose(applyMiddleware(ReduxThunk), devTools);

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, middleware);

const persistor = persistStore(store);

export { persistor, store };
