import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import PublicRoute from "./routes/route";
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import configureStore from '../src/store/ConfigureStore';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PublicRoute />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

