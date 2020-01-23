import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware, compose } from 'redux';
import { rootReducer } from './store/reducers/index';
import thunk from 'redux-thunk';



// // Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

let store = createStore(rootReducer,compose(
    applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

ReactDOM.render(

    <Provider store={store}>
    <App />
    </Provider>

,document.getElementById('root'));
