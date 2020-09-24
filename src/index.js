import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './views/Login';
import Main from './views/Main';
import Control from './views/Control';
import Calificaciones from './views/Calificaciones';
import Clientes from './views/Clientes';
import Conductores from './views/Conductores';
import Contabilidad from './views/Contabilidad';
import Notificaciones from './views/Notificaciones';
import Pago  from './views/Pago';
import Peticion_ser from './views/Peticion_ser';
import Reportes from './views/Reportes';
import Servicios from './views/Servicios'
import store from './redux/store';
import Agregar_perfil from './views/Agregar_perfil';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Precio from './views/Precio';
import Banderazo from './views/banderazo';
import Mapa from './views/Mapa';

const routing = (
  <Router>
    <Provider store={store}>
      <Route path="/" component={Login} />
      <Route path="/dashboard" component={Main} />
      <Route path="/views/Control" component={Control} />
      <Route path="/views/Calificaciones" component={Calificaciones} />
      <Route path="/views/Clientes" component={Clientes} />
      <Route path="/views/Conductores" component={Conductores} />
      <Route path="/views/Contabilidad" component={Contabilidad} />
      <Route path="/views/Notificaciones" component={Notificaciones} />
      <Route path="/views/Pago" component={Pago} />
      <Route path="/views/Peticion_ser" component={Peticion_ser} />
      <Route path="/views/Reportes" component={Reportes} />
      <Route path="/views/Servicios" component={Servicios} />
      <Route path="/views/Agregar_perfil" component={Agregar_perfil} /> 
      <Route path="/views/Precio" component={Precio} />
      <Route path="/views/Banderazo" component={Banderazo} />
      <Route path="/views/Mapa" component={Mapa} />
   </Provider>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
