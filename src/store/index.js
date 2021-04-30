import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {devToolsEnhancer} from 'react-devtools-extension';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devToolsEnhancer()),
);

export default store;
