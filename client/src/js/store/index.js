import { createStore, compose, applyMiddleware } from "redux";
import { reducerContact } from "../reducers/reducerContact";
import thunk from "redux-thunk";
//asaynchrone store
const middelWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducerContact,
  composeEnhancers(applyMiddleware(...middelWare))
);
export default store;
