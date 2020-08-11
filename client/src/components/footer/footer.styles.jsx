import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const FooterContainer = styled.div`
  position: relative;
  background: #f2f4f5;
  color: #002f34;
  text-align: center;
`

export const FooterBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

`

export const StaticBoxContainer = styled.div`
  margin: auto 50px;
  & ul {
    list-style-type: none;

    & li {
      text-align: left;
      cursor: pointer;
      background-color: transparent;
      
    }
  }
`

export const OptionLink = styled(Link)`
  font-size: 20px;
  color: #002f34;
`

export const FooterAppsContainer = styled.div`
  display: flex;
  margin-top: 6px;
  position: relative;
  width: 25vw;


`

export const AppIconContainer = styled.a`
  flex: 0 1 30%;
  display: inline-block;
  height: 50px;
  
`