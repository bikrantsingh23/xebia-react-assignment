import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login'
import ProductListing from './components/ProductListing/ProductListing'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/products" exact component={Login} />
          <Route path="/" exact component={ProductListing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
