import {createBrowserRouter, RouterProvider} from 'react-router';
import  ProductList from './components/ProductList';
import ContextProvider from './context/CartContext';
import { reducer } from './context/cartReducer';
import Layout from './components/Layout';
import { useEffect, useReducer } from 'react';
import Cart from './pages/Cart';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><ProductList /></Layout>,
  },
  {
    path: '/cart',
    element:<Layout><Cart /></Layout>,
  },
  {
    path: '*',
    element: <div>404 Not Found</div>,
  }
]);


function App() {
  const storedCart = JSON.parse(localStorage.getItem("cart") || '[]') || [];

  const [cart, dispatch] = useReducer(reducer, storedCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <ContextProvider value={{cart, dispatch}}>
      <RouterProvider router={router} />
    </ContextProvider>
  )
}

export default App;


