import React from 'react'
import { HeaderStyled, NavLinkStyled } from './Header.styled'

const Header = () => {
  return (
    <HeaderStyled>
      <ul>
        <li><NavLinkStyled to="/" end>Shop</NavLinkStyled></li>
        <li><NavLinkStyled to="/cart">Shopping Cart</NavLinkStyled></li>
        <li><NavLinkStyled to="/history">Orders History</NavLinkStyled></li>
      </ul>
    </HeaderStyled>
  )
}

export default Header