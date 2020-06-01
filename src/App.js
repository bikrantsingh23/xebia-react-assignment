import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login'
import PageNotFound from './components/ErrorBoundary/PageNotFound'

const ProductListing = React.lazy(() => import('./components/ProductListing/ProductListing'));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div><h2>Page Loading...</h2></div>}>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/products" exact component={ProductListing} />
            <PageNotFound />
          </Switch>
        </Suspense>
      </Router>
    </div >
  );
}

export default App;
