import React from 'react'
import { MenuItemStyled, ImageThumbStyled, TitleThumbStyled } from './MenuItem.styled'

const MenuItem = ({ dish }) => {
  
  const { dishName, price, img} = dish;
  return (
    <MenuItemStyled>
      <ImageThumbStyled>
        <img src={img} alt="burger" width={200} height={150} />
      </ImageThumbStyled>

      <TitleThumbStyled>
        <h3>{dishName}</h3>
        <p>{price}</p>
      </TitleThumbStyled>
      
      <button type='button'>add to Cart</button>
      
    </MenuItemStyled>
  )
}

export default MenuItem