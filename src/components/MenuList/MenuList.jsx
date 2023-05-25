import React from 'react';
import { MenuListStyled } from './MenuList.styled';
import { useSelector } from 'react-redux';
import MenuItem from 'components/MenuItem/MenuItem';

const MenuList = ({ currentShopId }) => {
    const shopsList = useSelector(state => state.shops.shops);

    const currentMenu = shopsList.find(({ _id }) => _id === currentShopId)?.menu;

    return (
        <MenuListStyled>
            {!currentShopId ? "Choose Shop" :
                currentMenu?.map(dish =>
                    <MenuItem
                        key={dish._id}
                        dish={dish}
                        currentShopId={currentShopId}
                    />
                )}           
        </MenuListStyled>
    )
};

export default MenuList;