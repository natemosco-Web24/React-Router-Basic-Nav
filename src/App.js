import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from "react-router-dom";
const App = () => (
  <div>
    <Route exact path="/" component={Navigation} />
    <Route path="/contact" component={Contact}></Route>
    <Route path="/about" component={About}></Route>
  </div>
);

export default App;
