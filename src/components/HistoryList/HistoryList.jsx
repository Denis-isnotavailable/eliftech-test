import React from 'react'
import { HistoryListStyled, ListThumbStyled, TotalPrice } from './HistoryList.styled'
import HistoryItem from 'components/HistoryItem/HistoryItem'

const HistoryList = ({ order }) => {
  
  const total = order.reduce((acc, dish) =>  acc += (dish.price * dish.quantity), 0)
  return (
    <HistoryListStyled>
      <h2>Your order</h2>
      <ListThumbStyled>
        <ul>
          {order?.map(dish => <HistoryItem key={dish._id} dish={dish} />)}
        </ul>    
        <TotalPrice>Total price: {total} $</TotalPrice>
      </ListThumbStyled>
      
    </HistoryListStyled>
  )
}

export default HistoryList