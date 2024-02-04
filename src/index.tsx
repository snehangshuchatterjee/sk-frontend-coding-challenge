import * as React from 'react';
import './i18n';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import store from './redux/store';

createRoot(document.getElementById('app')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
