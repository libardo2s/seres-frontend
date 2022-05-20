import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './views/Login';
import Main from './views/Main';
import Juegos from './views/Juegos';
import Industria4 from './views/Industria4.0';
import Datos from './views/Datos';
import Stem from './views/Stem';
import store from './redux/store';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Motivacion from './views/Motivacion';

const routing = (
  <Router>
    <Provider store={store}>
      <Route path="/" component={Motivacion} />
      <Route path="/dashboard" component={Main} />
      <Route path="/views/Juegos" component={Juegos} />
      <Route path="/views/Industria4.0" component={Industria4} />
      <Route path="/views/Datos" component={Datos} />
      <Route path="/views/Stem" component={Stem} /> 
      <Route path="/views/Motivacion" component={Motivacion} />
   </Provider>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
