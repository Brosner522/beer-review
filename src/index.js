import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BeerForm from "./Components/BeerForm";
import BeerContainer from "./Components/BeerContainer";
import test from './Components/test'


ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/test" component={test} />
      <Route exact path="/BeerForm" component={BeerForm} />
      <Route exact path="/" component={App} />
      <Route exact path="/BeerContainer" component={BeerContainer} />
    </Switch>
  </BrowserRouter>),
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
