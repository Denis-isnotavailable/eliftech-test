import React, { useState } from 'react'
import { CartListItemStyled, ImageThumbStyled, TitleThumbStyled } from './CartListItem.styled'
import { useDispatch, useSelector } from 'react-redux';
import { changeDishQuantity, removeDish, setShopId } from 'redux/operations';

const CartListItem = ({ dish }) => {
    const dishesFromCart = useSelector(state => state.cart.dishes);
    const [dishCount, setDishCount] = useState(dish.quantity);
    const dispatch = useDispatch();
    

    const handleRemoveFromCart = () => {
        if (dishesFromCart.length === 1) dispatch(setShopId(""));
        dispatch(removeDish(dish._id));        
    }

    const handleQuantityChange = e => {
        setDishCount(e.currentTarget.value);
        dispatch(changeDishQuantity({ id: dish._id, quantity: e.currentTarget.value }));
    }

    
    const { dishName, price, img} = dish;
    return (
        <CartListItemStyled>
            <button type='button' onClick={handleRemoveFromCart}>x</button>
            <ImageThumbStyled>
                <img src={img} alt="burger" width={300} height={150} />
            </ImageThumbStyled>

            <TitleThumbStyled>
                <h3>{dishName}</h3>
                <p>Price: <strong>{price} $</strong></p>
                <input type="number" min="1" value={dishCount} onChange={e => handleQuantityChange(e)} />
            </TitleThumbStyled>
        </CartListItemStyled>
    )
};

export default CartListItem