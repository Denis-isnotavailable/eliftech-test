import React from 'react'
import { CartListStyled } from './CartList.styled'
import CartListItem from 'components/CartListItem/CartListItem'
import { useSelector } from 'react-redux';

const CartList = () => {
    const dishesFromCart = useSelector(state => state.cart.dishes);

  return (
      <CartListStyled>
          {dishesFromCart.length !== 0 ?
              dishesFromCart.map(dish =>
                <CartListItem
                    key={dish._id}
                    dish={dish}                      
                  />) : "Cart is Empty"}
    </CartListStyled>
  )
}

export default CartList