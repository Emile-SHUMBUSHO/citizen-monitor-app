import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
  const loggerMiddleware = createLogger({
    predicate: () => __DEV__,
  });
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}

export const store = configureStore();


// import { applyMiddleware, compose, createStore } from "redux";
// import thunkMiddleware from "redux-thunk";
// import rootReducer from "./reducers";
// import { composeWithDevTools } from 'redux-devtools-extension'

// export default function configureStore(preloadedState) {
//   const middlewares = [thunkMiddleware];
//   const middlewareEnhancer = applyMiddleware(...middlewares);

//   const enhancers = [middlewareEnhancer];
//   // const composedEnhancers = compose(...enhancers);
//   const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
//   const store = createStore(rootReducer, preloadedState, composedEnhancer);

//   return store;
// }
// export const store = configureStore();
