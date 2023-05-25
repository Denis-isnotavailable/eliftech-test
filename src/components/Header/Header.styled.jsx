import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
    padding: 18px 50px;

    background-color: #cccaca;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);

    ul {
        display: flex;
    }

    li {
        padding: 0 20px;
        :not(:last-child) {
            border-right: 1px solid #000000;
        }
    }
`;

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;    

    font-size: 18px;
    color: #383d96;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);     

    &.active {
        color: #080b4e;   
    }

    :hover:not(.active),
    :focus:not(.active) {        
        color: #7f3df3;
    }
`;