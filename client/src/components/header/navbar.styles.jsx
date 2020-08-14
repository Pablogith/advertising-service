import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
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


  
  transition: all 0.5s cubic-bezier(0.8, 0.2, 0.2, 0.8);};
  transform: ${props => (props.show ? 'none' : 'translate(0, -100%)')};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
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

export const AddLink = styled(Link)`
  background: #fff;
  color: #002f34;
  float: right;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  margin-top: 12px;
  margin-bottom: 12px;
  padding: 13px 22px;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 0 8px #fff;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: none;
    color: #fff;
    box-shadow: inset 0 0 0 5px #fff;
  }
`