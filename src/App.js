import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login'
import ProductListing from './components/ProductListing/ProductListing'
import PageNotFound from './components/ErrorBoundary/PageNotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/products" exact component={ProductListing} />
          <PageNotFound />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
