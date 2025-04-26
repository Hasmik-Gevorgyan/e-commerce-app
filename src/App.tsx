import {BrowserRouter, Route, Routes} from 'react-router';
import  ProductList from './components/ProductList';
import ContextProvider from './context/CartContext';
import { reducer } from './context/cartReducer';
import Layout from './components/Layout';
import { useEffect, useReducer } from 'react';
import Cart from './pages/Cart';
import './App.css';


function App() {
  const storedCart = JSON.parse(localStorage.getItem("cart") || '[]') || [];

  const [cart, dispatch] = useReducer(reducer, storedCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <ContextProvider value={{cart, dispatch}}>
      <BrowserRouter basename="/e-commerce-app">
      <Routes>
        <Route path="/" element={<Layout><ProductList /></Layout>} />
        <Route path="/cart" element={<Layout><Cart /></Layout>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
    </ContextProvider>
  )
}

export default App;


