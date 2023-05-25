import { useSelector } from 'react-redux';

import { ShopsListStyled } from './ShopsList.styled';
import ShopListItem from 'components/ShopListItem/ShopListItem';


const ShopsList = ({setCurrentShopId, currentShopId}) => {    
    const shopsList = useSelector(state => state.shops.shops);
    const isLoading = useSelector(state => state.shops.isLoading);

    // console.log(shopsList);
    
    return (
        <ShopsListStyled>
            <h2>Shops</h2>
            {
                isLoading ? "Loading shops..." :
                    <ul>
                        {shopsList?.map(shop =>
                            <ShopListItem
                                key={shop._id}
                                shop={shop}
                                currentShopId={currentShopId}
                                setCurrentShopId={setCurrentShopId}
                            />                            
                        )}                
                    </ul>
            }                        
        </ShopsListStyled>
    )
};

export default ShopsList;