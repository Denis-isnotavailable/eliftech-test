import React from 'react'
import { HistoryItemStyled, ImageThumbStyled, TitleThumbStyled } from './HistoryItem.styled'

const HistoryItem = ({dish}) => {

  const { dishName, price, img, quantity} = dish;
  return (
    <HistoryItemStyled>
      <ImageThumbStyled>
          <img src={img} alt="burger" width={200} height={100} />
      </ImageThumbStyled>

      <TitleThumbStyled>
          <h3>{dishName} <span>({quantity} pcs)</span></h3>
          <p>Price: <strong>{price} $</strong></p>
      </TitleThumbStyled>      
    </HistoryItemStyled>
  )
}

export default HistoryItem