import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import './index.css';
import Layout from "./Layout";
import {store} from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <Provider store={store} >
        <Layout />
      </Provider>
    </BrowserRouter>
);

