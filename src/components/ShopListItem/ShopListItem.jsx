import React from 'react'
import { ShopItemStyled, ButtonStyled } from './ShopListItem.styled'
import { useSelector } from 'react-redux';

const ShopListItem = ({ shop, setCurrentShopId, currentShopId }) => {
    const cartShopId = useSelector(state => state.cart.shopId);

    const isDisabled = cartShopId !== "" && cartShopId !== shop._id;
    return (
        <ShopItemStyled onClick={() => setCurrentShopId(shop._id)}>
            <ButtonStyled
                type='button'
                isActive={currentShopId === shop._id}
                disabled={isDisabled}
            >
                {shop.shopname}
            </ButtonStyled>
        </ShopItemStyled>
    )
};

export default ShopListItem