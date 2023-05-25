import React, { useEffect, useState } from 'react'
import { ShopPageStyled } from './ShopPage.styled';
import ShopsList from 'components/ShopsList/ShopsList';
import MenuList from 'components/MenuList/MenuList';
import { useDispatch } from 'react-redux';
import { getShops } from 'redux/operations';

const ShopPage = () => {
  const dispatch = useDispatch();
  const [currentShopId, setCurrentShopId] = useState(null);

  useEffect(() => {       
        dispatch(getShops());        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <ShopPageStyled>
      <ShopsList setCurrentShopId={setCurrentShopId} />
      <MenuList currentShopId={currentShopId} />
    </ShopPageStyled>
  )
}

export default ShopPage;