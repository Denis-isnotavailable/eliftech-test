
import styled from '@emotion/styled';

export const MenuItemStyled = styled.li`
    /* height: 100%; */
    padding: 16px 16px;

    border: 1px solid #949292;
    border-radius: 5px;

    background-color: #ffffff;

    button {
        display: block;
        width: 200px;        
        margin-left: auto;
        
        padding: 12px 0;

        border-radius: 10px;
        border: none;
        background-color: #939191;

        font-size: 20px;
        color: #ffffff;
        cursor: pointer;

        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

        :hover,
        :focus {        
            transform: scale(1.05);
        }
    }
`;

export const ImageThumbStyled = styled.div`
    width: 350px;
    height: 200px;
    margin-bottom: 16px;
    border-radius: 5px;
    
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const TitleThumbStyled = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 16px;
`;