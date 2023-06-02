import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// store.js

 
import habitReducer from './reducers';
 
 
import {createStore, applyMiddleware} from 'redux';
import  thunk from 'redux-thunk';
 

 

const logger  = ({dispatch, getState}) =>(next) =>(action)=> {
  
  if(typeof action !== 'function'){
    console.log('ACTION',action);
  }
  next(action)} ;


  const store = createStore(habitReducer, applyMiddleware(logger, thunk));
  
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store={store}>
     <App   />
    </Provider>
  
);

 