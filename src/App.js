import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Homepage from './pages/homepage/homepage.component';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Homepage/>
      </BrowserRouter>
    );
  }
}

export default App;
