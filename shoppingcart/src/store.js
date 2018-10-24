import { createStore } from 'redux';
import appReducers from './reducers/index';
// import { actCloseForm, actOpenForm, actToggleForm, actSort } from './actions/index';



const store = createStore(
   appReducers, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );


export default store;