import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
// import { rootReducer } from './components/reducers';
import thunk from 'redux-thunk';



// // Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

let store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, 
document.getElementById('root'));
