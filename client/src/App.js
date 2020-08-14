import React, {useState} from 'react';

import { Switch, Route} from 'react-router-dom';

import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import AccountPage from './pages/account/account'
import AddOfferPage from './pages/add-offer-page/add-offer-page'
import FavoritePage from './pages/favorite/favorite'
import HomepagePage from './pages/homepage/homepage'
import OfferPage from './pages/offerpage/offer-page'

import NavLinks from './components/header/navbar.component'
import {Navbar} from './components/header/navbar.styles'

import Footer from './components/footer/footer.component'

import './App.css';

const  App = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y > prevPos.y
    if (isShow !== hideOnScroll) setHideOnScroll(isShow)
  }, [hideOnScroll])

  return (
    <>
      <Navbar show={hideOnScroll}>
        <NavLinks />
      </Navbar>
      <Switch>
        <Route exact path='/account' component={AccountPage} />
        <Route exact path='/add' component={AddOfferPage} />
        <Route exact path='/favorites' component={FavoritePage} />
        <Route exact path='/' component={HomepagePage} />
        <Route exact path='/offer' component={OfferPage} />
      </Switch> 
      <Footer />
    </>
  )
}

export default App;
