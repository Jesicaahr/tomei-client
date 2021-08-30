import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const initialState = {};

const middleware = [thunk];

const config = {
  key: "primary",
  storage,
};

let persistedReducer = persistCombineReducers(config, rootReducers);

export default () => {
  let store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  let persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};