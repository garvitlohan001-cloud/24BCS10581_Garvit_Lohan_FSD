import React from 'react'
import { useCurrency } from '../context/CurrencyProvider'
import { useProduct } from '../context/ProductProvider';

const CURRENCIES = [
    "USD", "EUR", "GBP", "JPY"
]

const StoreHeader = () => {
    const { changeCurrency } = useCurrency();
    const {products, cart} = useProduct();

    const onCurrencyChange = (currencyTo) => {
        products.map(product => {
            product.originalPrice = changeCurrency(currencyTo, product.usdPrice);
            return product;
        })
        changeCurrency(currencyTo, cart);
    }

    return (
        <header>
            <h2>Store</h2>
            <nav style={{ display: "flex", gap: "5px" }}>
                {CURRENCIES.map((currency, ind) => (
                    <button key={ind} onClick={() => onCurrencyChange(currency)}>{currency}</button>
                ))}
            </nav>
        </header>
    )
}

export default StoreHeader