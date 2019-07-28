import React from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Homepage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage = (props) => {
  return (
    <div>
      <h1>Hats</h1>
      <button onClick={() => props.history.push('/')}>
        To home page
      </button>
    </div>
  )
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="shop/hats">Hats</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/shop/hats" component={HatsPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
