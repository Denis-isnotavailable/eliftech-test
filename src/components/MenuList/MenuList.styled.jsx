
import styled from '@emotion/styled';

export const MenuListStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    width: calc(100% - 360px);
    height: calc(100vh - 140px);

    padding: 24px 40px;
    border: 1px solid #949292;
    border-radius: 10px;

    background-color: #f3f3f3;

    overflow-y: scroll;
`;