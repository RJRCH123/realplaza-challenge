import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'

import { createStore } from 'redux'

import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'

import Layout from './components/organisms/layout/Layout'
import Login from './pages/Login'

const store = createStore(
  rootReducer
)

document.title = 'Tua CRM'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <Login />  */}
      {/* Aquí debes hacer una condicional, si no esta logueado que aparezca '<Login />' y si está registrado que aparezca '<Layout />'. Te lo dejo en tus manos... Para ir probando puedes mostrar una vista descoentando la otra y viceversa */}
      <Layout />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
