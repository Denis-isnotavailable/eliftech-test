import styled from '@emotion/styled';

export const CartListItemStyled = styled.li`
    position: relative;
    display: flex;
    padding: 16px 16px;

    :not(:last-child) {
        margin-bottom: 12px;
    }

    border: 1px solid #949292;
    border-radius: 5px;

    background-color: #ffffff;

    button {
        position: absolute;
        top: 10px;
        right: 10px;

        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: none;

        background-color: #f1f1f1;
        font-size: 18px;

        cursor: pointer;

        transition: background-color 250ms linear;

        :hover, :focus {
            background-color: #c8c6c6;
        }
    }
`;

export const ImageThumbStyled = styled.div`
    width: 300px;
    height: 150px;
    margin-right: 30px;
    border-radius: 5px;
    
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const TitleThumbStyled = styled.div`
   h3 {
    margin-top: 20px;
    margin-bottom: 20px;
   }

   p {
    margin-bottom: 12px;
   }

   input {
    width: 120px;    
    padding: 5px 0 5px 5px;

    border-radius: 10px;

    text-align: center;

    ::-webkit-inner-spin-button {
        opacity: 1;
        width: 40px;
        height: 30px;
    }
   }
`;