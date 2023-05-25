import styled from '@emotion/styled';

export const CartFormStyled = styled.form`  
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: calc(100vh - 240px);

    margin-bottom: 20px;
`;

export const InputThumb = styled.div`
    width: calc(100% - 690px);
    padding: 24px 40px;
    border: 1px solid #949292;
    border-radius: 10px;
    background-color: #f3f3f3;
`;

export const InputStyled = styled.input`
    width: 70%;
    height: 15px;
    margin-top: 12px;
    margin-bottom: 12px;
    padding: 5px 5px;

    border-radius: 5px;
    border: 1px solid #c6c4c4;
`;

export const PriceContainer = styled.p`
    width: 200px;
    margin-left: auto;
    margin-bottom: 20px;

    font-size: 18px;
`;

export const SubmitButton = styled.button`
    display: block;
    width: 200px;        
    margin-left: auto;
    
    padding: 12px 0;

    border-radius: 10px;
    border: none;
    background-color: #e1dede;

    font-size: 20px;
    color: #ffffff;
    cursor: pointer;

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {   
        background-color: #aeacac;     
        transform: scale(1.05);
    }
`;