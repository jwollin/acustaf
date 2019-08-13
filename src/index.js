import React from 'react';
import { render } from 'react-dom';

import $ from 'jquery';
import { getData, URL } from './utils/utils';

import * as serviceWorker from './serviceWorker';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function initialize() {
  // get initial data for users.
  getData(URL, '/users').then(data => {
    render(
      <App data={data} />,
      document.getElementById('root')
    );
  });
}



$(() => initialize());

serviceWorker.unregister();
