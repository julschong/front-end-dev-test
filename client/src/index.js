import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import App from './App';
import HomeContextProvider from './store/HomeContext';

ReactDOM.render(
    <HomeContextProvider>
        <App />
    </HomeContextProvider>,
    document.getElementById('root')
);
