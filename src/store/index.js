// import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { createBrowserHistory } from 'history';
// import { routerMiddleware } from 'react-router-redux';
// import rootReducer from '../reducers';
// import sagas from '../sagas/';

// export const history = createBrowserHistory()

// export default function configureStore(preloadedState) {
//   let middleware = applyMiddleware();
//   const middlewares = [];
//   const sagaMiddleware = createSagaMiddleware();
//   const routingMiddleware = routerMiddleware(history);
//   middlewares.push(sagaMiddleware);
//   middlewares.push(routingMiddleware);
//   let enhancer;
//   if (process.env.NODE_ENV !== 'production') {
//     middleware = applyMiddleware(...middlewares);

//     /* eslint-disable no-underscore-dangle */
//     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//     enhancer = composeEnhancers(
//       // Middleware we want to use in development
//       middleware
//     );
//     /* eslint-enable */
//   } else {
//     middleware = applyMiddleware(...middlewares);
//     enhancer = compose(middleware);
//   }
//   const store = createStore(rootReducer, preloadedState, enhancer);
//   sagaMiddleware.run(sagas);
//   console.log('===i am here===');
//   return store;
// };

// configureStore.js

import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from '../reducers';
import sagas from '../sagas';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware,
      ),
    ),
  );
  sagaMiddleware.run(sagas);
  return store;
}
