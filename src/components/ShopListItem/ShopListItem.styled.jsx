import styled from '@emotion/styled';

export const ShopItemStyled = styled.li`
    border: 1px solid #949292;
    border-radius: 5px;

    overflow: hidden;

    :not(:last-child) {
        margin-bottom: 16px;
    }

    
`;

export const ButtonStyled = styled.button`
    width: 100%;
    height: 100%;
    padding: 16px 30px;
    border: none;
    background-color: ${p => p.isActive ? "#d1d0d5" : "#ffffff"};

    font-size: 20px;
    cursor: pointer;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1); 

    :hover:not(.active),
    :focus:not(.active) {        
        background-color: #d1d0d5;
    }
`;