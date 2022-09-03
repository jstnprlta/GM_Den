import React from 'react'
import ReactDOM from 'react-dom';
import { provider } from "react-redux";
import { configstore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

import App from './App';

const store = configstore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <provider store={store}>
        <App/>
    </provider>, 
document.getElementById("root"));