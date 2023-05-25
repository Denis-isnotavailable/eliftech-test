import React, { useEffect, useState } from 'react'
import { MenuItemStyled, ImageThumbStyled, TitleThumbStyled } from './MenuItem.styled'
import { useDispatch, useSelector } from 'react-redux'
import { removeDish, setDishes, setShopId } from 'redux/operations';

const MenuItem = ({ dish, currentShopId }) => {
  const dispatch = useDispatch();
  const dishesFromCart = useSelector(state => state.cart.dishes);
  const [isInCart, setIsInCart] = useState(false);
 

  useEffect(() => { 
    const i = dishesFromCart.findIndex(({ _id }) => _id === dish._id);
    if (i !== -1) setIsInCart(true);
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dishesFromCart]);

  const handleAddToCart = () => {
    const dishWithCount = {...dish, quantity: 1}
    dispatch(setDishes(dishWithCount));
    dispatch(setShopId(currentShopId));
  }

  const handleRemoveFromCart = () => {
    if (dishesFromCart.length === 1) dispatch(setShopId(""));
    dispatch(removeDish(dish._id));
    setIsInCart(false);
  }
  
  const { dishName, price, img} = dish;
  return (
    <MenuItemStyled>
      <ImageThumbStyled>
        <img src={img} alt="burger" width={350} height={200} />
      </ImageThumbStyled>

      <TitleThumbStyled>
        <h3>{dishName}</h3>
        <p>Price: <strong>{price} $</strong></p>
      </TitleThumbStyled>
      
      {
        !isInCart ?
          <button type='button' onClick={handleAddToCart}>add to Cart</button> :
          <button type='button' onClick={handleRemoveFromCart}>remove from Cart</button>
    }
      
      
    </MenuItemStyled>
  )
}

export default MenuItem