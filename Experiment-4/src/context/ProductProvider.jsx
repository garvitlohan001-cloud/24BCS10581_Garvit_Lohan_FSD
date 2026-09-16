import { createContext, useCallback, useContext, useState } from "react";
import { initialProducts } from "../data/products";

const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(initialProducts);
    const [cart, setCart] = useState([]);

    const addToCart = (amount) => {
        setCart(prev => ([...prev, amount]));
    }

    const value = {
        products,
        cart,
        addToCart
    }
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;

export const useProduct = () => useContext(ProductContext);