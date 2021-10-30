import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import Routers from './Routers';
import configStore from "./Storages/index"
import { Provider } from "react-redux"

const store = configStore()

ReactDOM.render(
    <Provider store={store}>
        <Routers />
    </Provider>,
    document.getElementById("root")
)