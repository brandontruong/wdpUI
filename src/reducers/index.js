// import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

// // import reducers
// import DataSourceReducer from './DataSourceReducer';

// // combine reducers
// const appReducer = combineReducers({
//     dataSource: DataSourceReducer,
//     routing: routerReducer
// });

// const rootReducer = (state, action) => {
//     return appReducer(state, action);
// };

// export default rootReducer;

// reducers.js
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import DataSourceReducer from './DataSourceReducer';

const createRootReducer = (history) => combineReducers({
  dataSource: DataSourceReducer,
  router: connectRouter(history),

});
export default createRootReducer;
