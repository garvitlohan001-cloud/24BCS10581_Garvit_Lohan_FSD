import React from 'react'
import StoreHeader from './components/StoreHeader'
import ProductList from './components/ProductList'
import CheckoutCart from './components/CheckoutCart'

const App = () => {
  return (
    <main>
      <StoreHeader />
      <ProductList />
      <CheckoutCart />
    </main>
  )
}

export default App