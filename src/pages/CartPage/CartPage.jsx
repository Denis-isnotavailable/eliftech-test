import CartForm from 'components/CartForm/CartForm'
import React from 'react'
import { CartPageStyled } from './CartPage.styled'

const CartPage = () => {
  return (
    <CartPageStyled>
      <CartForm />
    </CartPageStyled>
    
  )
};

export default CartPage