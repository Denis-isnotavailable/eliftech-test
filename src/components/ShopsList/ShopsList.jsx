import { useSelector } from 'react-redux';

import { ShopsListStyled, ShopItemStyled } from './ShopsList.styled';


const ShopsList = ({setCurrentShopId}) => {    
    const shopsList = useSelector(state => state.shops.shops);
    const isLoading = useSelector(state => state.shops.isLoading);

    console.log(shopsList);
    
    return (
        <ShopsListStyled>
            <h2>Shops</h2>
            {
                isLoading ? "Loading shops..." :
                    <ul>
                        {shopsList.map(shop =>
                            <ShopItemStyled key={shop._id} onClick={() => setCurrentShopId(shop._id)}>
                                {shop.shopname}
                            </ShopItemStyled>)}                
                    </ul>
            }                        
        </ShopsListStyled>
    )
};

export default ShopsList;