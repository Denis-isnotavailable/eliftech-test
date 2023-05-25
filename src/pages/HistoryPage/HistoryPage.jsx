import React, { useEffect, useState } from 'react'
import { HistoryPageStyled } from './HistoryPage.styled'
import HistoryForm from 'components/HistoryForm/HistoryForm';
import HistoryList from 'components/HistoryList/HistoryList';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, getShops } from 'redux/operations';

const HistoryPage = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [filteredOrders, setFilteredOrders] = useState([]);
    const orders = useSelector(state => state.orders.orders);
    const shopsList = useSelector(state => state.shops.shops);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders());
        dispatch(getShops())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const userOrder = orders.reduce((acc, order) => {
            if (order.requisites.email === email || order.requisites.phone === phone) {
                acc.push(order);
            }
            return acc;
        }, []);

        const res = userOrder?.map(order => {
            const i = shopsList.findIndex(({ _id }) => order.dishList.shopId === _id);           
            const menu = shopsList[i]?.menu;

            console.log('order', order)

            const items = order.dishList.dishes?.map(dish => {
                const d = menu?.find(({ _id }) => _id === dish.dishId);
                return { ...d, quantity: dish.quantity }
            });

            return items;
        })

        setFilteredOrders(res);

    }, [email, orders, phone, shopsList]);

   

    return (
        <HistoryPageStyled>
            <HistoryForm email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} />
            {filteredOrders?.map((order, i) => <HistoryList key={i} order={order} />)}            
        </HistoryPageStyled>
    )
};

export default HistoryPage