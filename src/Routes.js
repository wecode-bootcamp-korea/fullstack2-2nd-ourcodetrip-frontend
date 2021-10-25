import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TopNav from './components/TopNav/TopNav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import TourTicket from './pages/TourTicket/TourTicket';
import SignIn from './pages/User/SignIn';
import SignUp from './pages/User/SignUp';

import GlobalStyles from './styles/GlobalStyles';

const Routes = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <TopNav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/tourticket" component={TourTicket} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
