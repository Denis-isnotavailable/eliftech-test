import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "components/Header/Header";
import { SharedLayoutStyled } from "./SharedLayout.styled";


export const SharedLayout = () => {
    return (
        <SharedLayoutStyled>
            <Header />            
            <Suspense fallback={<div>Loading...</div>} >
                <Outlet />
            </Suspense>
        </SharedLayoutStyled>
    );
}