import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Main = lazy(() => import('./pages/Main/Main'));
const TopNav = lazy(() => import('./components/TopNav/TopNav'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const TourTicket = lazy(() => import('./pages/TourTicket/TourTicket'));
const SignIn = lazy(() => import('./pages/User/SignIn'));
const SignUp = lazy(() => import('./pages/User/SignUp'));

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div>
            <h1>로딩중입니다</h1>
          </div>
        }
      >
        <TopNav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/tourticket" component={TourTicket} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
