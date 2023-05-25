import React, { useEffect, useState } from 'react'
import { ShopPageStyled } from './ShopPage.styled';
import ShopsList from 'components/ShopsList/ShopsList';
import MenuList from 'components/MenuList/MenuList';
import { useDispatch, useSelector } from 'react-redux';
import { getShops } from 'redux/operations';

const ShopPage = () => {
  const dispatch = useDispatch();
  const [currentShopId, setCurrentShopId] = useState(null);
  const shopsList = useSelector(state => state.shops.shops);
  const cartShopId = useSelector(state => state.cart.shopId);

  useEffect(() => {       
    dispatch(getShops()); 
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => { 
    if (cartShopId !== "") {
      setCurrentShopId(cartShopId);
    } else {
      setCurrentShopId(shopsList[0]?._id);
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shopsList]);

  return (
    <ShopPageStyled>
      <ShopsList setCurrentShopId={setCurrentShopId} currentShopId={currentShopId} />
      <MenuList currentShopId={currentShopId} />
    </ShopPageStyled>
  )
}

export default ShopPage;