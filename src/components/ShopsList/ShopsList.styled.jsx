import styled from '@emotion/styled';

export const ShopsListStyled = styled.div`
    min-width: 182px;
    height: calc(100vh - 140px);

    padding: 24px 40px;
    border: 1px solid #949292;
    border-radius: 10px;

    h2 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

export const ShopItemStyled = styled.li`

    padding: 16px 30px;
    border: 1px solid #949292;
    border-radius: 5px;

    text-align: center;
    font-size: 20px;
    cursor: pointer;

    :not(:last-child) {
        margin-bottom: 16px;
    }

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1); 

    :hover:not(.active),
    :focus:not(.active) {        
        background-color: #d1d0d5;
    }
`;