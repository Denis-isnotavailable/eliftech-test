import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "components/SharedLayout/SharedLayout";

const ShopPage = lazy(() => import("./pages/ShopPage/ShopPage"));
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));
const HistoryPage = lazy(() => import("./pages/HistoryPage/HistoryPage"));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="*" element={<div>Page not found 404</div>} />
      </Route>
    </Routes>
  );
}

export default App;

