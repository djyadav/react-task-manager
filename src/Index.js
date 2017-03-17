import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import list from './reducers';
import {createStore} from 'redux';
import {loadState,saveState} from './localStorage';
const persistedState=loadState();
window.React = React;
let store = createStore(list,persistedState);
render(
  ( <Provider store={store}><App /></Provider>), document.getElementById('app')
);
store.subscribe(()=>{
	saveState(store.getState())
});
