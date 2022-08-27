import { applyMiddleware, compose, createStore } from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";

const middleware = [thunk];

const enhancers = [];

const isDevelopment = process.env.NODE_ENV === "development";

if (
  isDevelopment &&
  typeof window !== "undefined" &&
  window.devToolsExtension
) {
  enhancers.push(window.devToolsExtension());
}

const store = createStore(
    reducer,
    compose(
        applyMiddleware(...middleware),
        ...enhancers
    )
);

export default store;