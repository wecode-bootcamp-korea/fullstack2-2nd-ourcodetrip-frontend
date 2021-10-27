import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Main = lazy(() => import('./pages/Main/Main'));
const TopNav = lazy(() => import('./components/TopNav/TopNav'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const SignIn = lazy(() => import('./pages/User/SignIn'));
const SignUp = lazy(() => import('./pages/User/SignUp'));
const TourTicket = lazy(() => import('./pages/TourTicket/TourTicket'));
const TourTicketList = lazy(() => import('./pages/TourTicket/TourTicketList'));
const Review = lazy(() =>
  import('./components/Boards/ReviewBoard/ReviewBoard')
);
const NotFound = lazy(() => import('./components/NotFound/NotFound'));
const WishList = lazy(() => import('./pages/WishList/WishList'));
const ManagingProfile = lazy(() =>
  import('./pages/User/Profile/ManagingProfile')
);
const EditingProfile = lazy(() =>
  import('./pages/User/Profile/EditingProfile')
);
const AuthenticationPage = lazy(() =>
  import('./pages/User/Profile/AuthenticationPage/AuthenticationPage')
);

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
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/tourticket" component={TourTicket} />
          <Route path="/tourticket/list" component={TourTicketList} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/wishlists" component={WishList} />
          <Route exact path="/profile" component={ManagingProfile} />
          <Route path="/auth" component={AuthenticationPage} />
          <Route exact path="/edit" component={EditingProfile} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
