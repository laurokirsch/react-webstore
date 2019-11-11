import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/hats' component={HatsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
