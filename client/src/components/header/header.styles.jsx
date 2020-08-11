import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;
  width: 100%;
  height: 70px;
  background-color: #002f34;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  margin-left: 15%;
  width: 70px;
  padding: 25px;
  color: white;

  & a {
    color: white;
    font-size: 22px;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 15%;
`

export const OptionLink = styled(Link)`
  line-height: 22px;
  font-size: 22px;
  text-align: center;
  margin-right: 2vw;
  cursor: pointer;
  color: white;  
  font-weight: 500;
  padding-top: 10px;
  padding-bottom: 10px;
`