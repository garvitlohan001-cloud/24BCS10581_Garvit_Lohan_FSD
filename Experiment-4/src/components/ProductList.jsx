import React, { useEffect, useState } from 'react'
import { initialProducts } from '../data/products'
import { useCurrency } from '../context/CurrencyProvider'
import { useProduct } from '../context/ProductProvider';

const ProductList = () => {
    const {formatPrice, currencyType} = useCurrency();
    const {products, addToCart} = useProduct();

    return (
        <article>
            <h3>Products</h3>
            <div>
                {products.map((product, ind) => (
                    <div key={ind}>
                        <h4>{product.name}</h4>
                        <p>Price: {formatPrice(product.originalPrice)}</p>
                        <button onClick={() => addToCart(product.usdPrice)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </article>
    )
}

export default ProductList