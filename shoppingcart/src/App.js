import React, { Component } from 'react';
import Title from './components/Title';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Title/>
        <div className="row">
            <ProductList/>
            <Cart/>
        </div>
      </div>
    );
  }
}

export default App;
