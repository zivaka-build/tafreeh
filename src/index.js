import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import axios from 'axios';
import Cookies from 'js-cookie';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './stores';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import { STORAGE } from './common/constants/storageConstants';
import { ACTIONS } from './common/config/actions';
import { APIS } from './common/config/urlConfig';

const token = Cookies.get(STORAGE.AUTH_TOKEN);

function render() {
ReactDOM.render(
  
    <Provider store={store}>
      <ReduxToastr
          timeOut={3000}
          newestOnTop={true}
          preventDuplicates
          position="top-right"
          transitionIn="bounceInDown"
          transitionOut="bounceOutUp"
          progressBar
          closeOnToastrClick
        />
      <App />
    </Provider>,
  document.getElementById('root')
);
}
if (token) {
  try {
    axios({
      method: 'GET',
      url: APIS.ME+Cookies.get(STORAGE.CURRENT_USER_EMAIL),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(success => {
        store.dispatch({
          type: ACTIONS.GET_ME,
          payload: success.data.user,
        });
        render();
      })
      .catch(error => {
        Cookies.remove(STORAGE.AUTH_TOKEN);
        Cookies.remove(STORAGE.CURRENT_USER_EMAIL);
        store.dispatch({
          type: ACTIONS.LOGOUT,
        });
        render();
      });
  } catch (e) {
    Cookies.remove(STORAGE.AUTH_TOKEN);
    Cookies.remove(STORAGE.CURRENT_USER_EMAIL);
    render();
  }
} else {
  render();
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
