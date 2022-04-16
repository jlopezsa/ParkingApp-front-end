import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';

// eslint-disable-next-line no-undef
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
