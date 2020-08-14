import React from 'react'

import {
  LogoContainer, 
  OptionsContainer, 
  OptionLink,
  AddLink
} from './navbar.styles'

const NavLinks = () => (
  <>
    <LogoContainer to='/'>
      <a href='/' className='header__logo-container'>Olx</a> 
      {/* put logo here */}
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/favorites'>&#10084;</OptionLink>
      <OptionLink to='/account'>Mój Olx</OptionLink>
      <AddLink d to='/add'>
        <span>
          Dodaj ogłoszenie
        </span>
      </AddLink>
    </OptionsContainer>
  </>
) 

export default NavLinks