import { createStore } from "redux";
import reducer from "./reducers";

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
  );
  return store;
}
