import { createStore, applyMiddleware, compose } from 'redux';
import mainState from "./components/Main/state";
import catalogState from './components/Catalog/state';
import thunk from  'redux-thunk';
import rootReducer from './reducers';

const rootState = {
    main: mainState,
    catalog: catalogState
};

const getComposeEnhancers = () => {
      return compose(
        applyMiddleware(thunk)
        ,window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (a) => a
      );
  };

const store = createStore(rootReducer, rootState, getComposeEnhancers());

export default store;