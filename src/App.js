import React from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="shop">Shop</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
