import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Homepage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage = () => {
  return (
    <div>
      <h1>Hats</h1>
    </div>
  )
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/hats" component={HatsPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
