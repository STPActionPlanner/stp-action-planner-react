import styled from 'styled-components'
import { Link } from 'react-router-dom'

import {ReactComponent as LogoIcon } from '../../assets/img/walk.svg'

export const NavContainer = styled.nav`
  width: 100%;
  padding: 2rem 1rem;
`

export const Nav = styled.div`
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media only screen and (min-width: 40em) {
    flex-direction: row;
    gap: 4rem;
  }
`

export const Logo = styled(LogoIcon)`
  height: 4rem;
  width: auto;
`

export const NavList = styled.ul`
  
  display: flex;
  gap: 2rem;
  position: relative;

  list-style: none;
  order: 1;

  @media only screen and (min-width: 40em) {
    order: 0;
    margin-right: auto;
  }
`

export const NavItem = styled.li`
  font-size: 1.6rem;
  position: relative;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: inherit;
`

export const NavItemDropdown = styled.ul`
  height: max-content;
  width: max-content;

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  background-color: #fff;
  border: 1px solid ${props => props.theme.colors.lightPurple};
  border-radius: 1rem;
`

export const DropdownClose = styled.button`
  border: none;
  background-color: transparent;
  margin-left: auto;
  cursor: pointer;
  font-size: 2.5rem;
  color: ${props => props.theme.colors.purple};;
  line-height: 1;
`

export const DropdownHeader = styled.div`
  width: 100%;
  height: auto;
  background-color: ${props => props.theme.colors.lightPurple};
  border-radius: 1rem 1rem 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  padding: .5rem 1rem;
  color: ${props => props.theme.colors.purple};
`

export const DropdownContent = styled.div`
  padding: 0 1rem 1rem 1rem;
`