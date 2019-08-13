import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import configureStore from './store';
import Main from './scenes/Main/Main';
import * as serviceWorker from './serviceWorker';

const Store = configureStore();

ReactDOM.render(
  <Provider store={ Store }>
    <Main />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
