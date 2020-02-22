import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

const App = () => (
  <HashRouter>
    <NavBar />
    <Route
      exact
      path="/"
      component={Landing}
    />
  </HashRouter>
);

export default App;
