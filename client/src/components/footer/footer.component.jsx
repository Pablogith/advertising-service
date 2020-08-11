import React from 'react'

import {
  FooterContainer,
  FooterBottomContainer,
  StaticBoxContainer,
  FooterAppsContainer,
  OptionLink,
  AppIconContainer
} from './footer.styles'

const Footer = () => (
  <FooterContainer>
    <FooterBottomContainer>
      <StaticBoxContainer>
        <ul>
          <li><OptionLink to='/'>Aplikacje mobilne OLX.pl</OptionLink></li>
          <li><OptionLink to='/'>Pomoc</OptionLink></li>
          <li><OptionLink to='/'>Wyróżnione ogłoszenia</OptionLink></li>
          <li><OptionLink to='/'>Blog</OptionLink></li>
          <li><OptionLink to='/'>Regulamin</OptionLink></li>
          <li><OptionLink to='/'>Polityka prywatności</OptionLink></li>
          <li><OptionLink to='/'>Reklama</OptionLink></li>
          <li><OptionLink to='/'>Biuro prasowe</OptionLink></li>
        </ul>
      </StaticBoxContainer>
      <StaticBoxContainer>
        <ul>
          <li><OptionLink to='/'>Jak działa OLX.pl</OptionLink></li>
          <li><OptionLink to='/'>Zasady bezpieczeństwa</OptionLink></li>
          <li><OptionLink to='/'>Mapa kategorii</OptionLink></li>
          <li><OptionLink to='/'>Mapa miejscowości</OptionLink></li>
          <li><OptionLink to='/'>Popularne wyszukiwania</OptionLink></li>
          <li><OptionLink to='/'>Kariera</OptionLink></li>
          <li><OptionLink to='/'>Ustawienia plików cookie</OptionLink></li>
          <li><OptionLink to='/'>Kody rabatowe</OptionLink></li>
        </ul>
      </StaticBoxContainer>
      <FooterAppsContainer>
        <AppIconContainer href='/' style={{backgroundImage: "url(https://static.olx.pl/static/olxpl/packed/font/2fc9f37e6707acfc0e1255cec57c49a986.svg)"}}>
          <span>w Google Play</span>
        </AppIconContainer>
        <AppIconContainer href='/' style={{backgroundImage: "url(https://static.olx.pl/static/olxpl/packed/font/2fccd2faa9395d5faed1011516c64dc929.svg)"}}>
          <span>w AppStore</span>
        </AppIconContainer>
      </FooterAppsContainer>
    </FooterBottomContainer>
  </FooterContainer>
)

export default Footer