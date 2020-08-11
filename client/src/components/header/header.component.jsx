import React from 'react'

import {
  HeaderContainer, 
  LogoContainer, 
  OptionsContainer, 
  OptionLink
} from './header.styles'

const Header = () => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <a to='/' className='header__logo-container'>Olx</a> 
      {/* put logo here */}
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/favorites'>&#10084;</OptionLink>
      <OptionLink to='/account'>Mój Olx</OptionLink>
      <OptionLink style={{backgroundColor: "white",
      borderRadius: "10px",
      color: "#002f34"
    }} to='/add'>Dodaj ogłoszenie</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
) 

export default Header