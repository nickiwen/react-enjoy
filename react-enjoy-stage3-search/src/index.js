import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import "./static/css/common.less";
import "./static/css/font.css";
import "./static/css/iconfont.css";
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <AppRouter />
    </Provider>
    , document.getElementById('root'));