import styled from '@emotion/styled';

export const HistoryItemStyled = styled.li`
    display: flex;
    width: 500px;
    padding: 16px 16px;

    :not(:last-child) {
        margin-bottom: 12px;
    }

    border: 1px solid #949292;
    border-radius: 5px;

    background-color: #ffffff;
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
    margin-top: 10px;
    margin-bottom: 10px;
   }
`;