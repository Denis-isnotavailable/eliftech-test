import React, { useEffect, useState } from 'react'
import { CartFormStyled, InputThumb, InputStyled, FormContainer, SubmitButton, PriceContainer } from './CartForm.styled'
import CartList from 'components/CartList/CartList';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, cleanCart, setShopId } from 'redux/operations';

const CartForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch()

    const cartShopId = useSelector(state => state.cart.shopId);
    const dishesFromCart = useSelector(state => state.cart.dishes);

    useEffect(() => {
        const total = dishesFromCart.reduce((acc, dish) => acc += dish.quantity * dish.price, 0);
        setTotalPrice(total)
    }, [dishesFromCart]);

    // dispatch(setShopId(""));

    const handleSubmit = e => {
        e.preventDefault();

        const requisites = { name, email, phone, address };

        const dishes = dishesFromCart.map(({ _id, quantity }) => { return { dishId: _id, quantity: parseInt(quantity) } });
        const dishList = { shopId: cartShopId, totalPrice, dishes };
        
        dispatch(addOrder({ requisites, dishList }));

        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        dispatch(setShopId(""));
        dispatch(cleanCart())
    }

    

    return (
        <CartFormStyled onSubmit={e => handleSubmit(e)}>
            <FormContainer>
                <InputThumb>
                    <label>
                        <p>Name</p>
                        <InputStyled
                            type='text'
                            value={name}
                            onChange={e => setName(e.currentTarget.value)}
                            required
                        />
                    </label>

                    <label>
                        <p>Emale</p>
                        <InputStyled
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.currentTarget.value)}
                            required
                        />
                    </label>

                    <label>
                        <p>Phone</p>
                        <InputStyled
                            type='tel'
                            value={phone}
                            onChange={e => setPhone(e.currentTarget.value)}
                            required
                        />
                    </label>

                    <label>
                        <p>Adress</p>
                        <InputStyled
                            type='text'
                            value={address}
                            onChange={e => setAddress(e.currentTarget.value)}
                            required
                        />
                    </label>

                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d43949.48968436685!2d30.707044249999996!3d46.49141905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1685013829508!5m2!1sru!2sua" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </InputThumb>

                <CartList />
            </FormContainer>
            
            <PriceContainer>Total price: <strong>{totalPrice}</strong> $ </PriceContainer>

            <SubmitButton type='submit'>Submit</SubmitButton>

        </CartFormStyled>
    )
};

export default CartForm