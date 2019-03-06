import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Products from './components/Products'
import Cart from './components/Cart'
import Header from './components/Header'
import Error from './components/Error'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/' component={Products} exact />
            <Route path='/cart' component={Cart} />
            <Error component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
