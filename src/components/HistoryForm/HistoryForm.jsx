import React from 'react'
import { HistoryFormStyled, InputStyled } from './HistoryForm.styled'

const HistoryForm = ({email, setEmail, phone, setPhone}) => {

  return (
    <HistoryFormStyled>
      <label>
        <p>Emale</p>
        <InputStyled
            type='email'
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            // required
        />
      </label>

      <label>
          <p>Phone</p>
          <InputStyled
              type='tel'
              value={phone}
              onChange={e => setPhone(e.currentTarget.value)}
              // required
          />
      </label>
    </HistoryFormStyled>
  )
};

export default HistoryForm