import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login'
import PageNotFound from './components/ErrorBoundary/PageNotFound'

const ProductListing = React.lazy(() => import('./components/ProductListing/ProductListing'));

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Suspense fallback={<div><h2>Page Loading...</h2></div>}>
            <Route path="/products" exact component={ProductListing} />
          </Suspense>
          <PageNotFound />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
