import React, { useEffect, useState } from 'react'
import { useCurrency } from '../context/CurrencyProvider'
import { useProduct } from '../context/ProductProvider';

const CheckoutCart = () => {
    const {formatPrice, currencyType, changeCurrency} = useCurrency();
    const {cart} = useProduct();
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const total = cart.reduce((price, a) => a + price, 0);
        console.log(total);
        setTotalAmount(changeCurrency(currencyType, total));
    }, [currencyType, cart])
    

    return (
        <article>
            <h3>Checkout Cart</h3>
            <p>{formatPrice(totalAmount)}</p>
        </article>
    )
}

export default CheckoutCart