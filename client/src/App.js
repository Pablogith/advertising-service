import React from 'react';
import { Switch, Route} from 'react-router-dom';

import AccountPage from './pages/account/account'
import AddOfferPage from './pages/add-offer-page/add-offer-page'
import FavoritePage from './pages/favorite/favorite'
import HomepagePage from './pages/homepage/homepage'
import OfferPage from './pages/offerpage/offer-page'

import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'

import './App.css';

const  App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/account' component={AccountPage} />
      <Route exact path='/add' component={AddOfferPage} />
      <Route exact path='/favorites' component={FavoritePage} />
      <Route exact path='/' component={HomepagePage} />
      <Route exact path='/offer' component={OfferPage} />
    </Switch> 
    <Footer />
  </div>
);


export default App;
