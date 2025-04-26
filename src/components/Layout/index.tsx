import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { GenericContext } from "../../context/CartContext";

const Layout = ({children}: any) => {
    const { cart } = useContext(GenericContext);
    
    const totalItems = cart.reduce((acc: number, item: any) => acc + item.quantity, 0);
    return (
        <>
            <div className="header">
                <NavLink to="/" className="text-white hover:text-gray-300">
                    Home
                </NavLink>
                <NavLink to="/cart" className="text-white hover:text-gray-300">
                    <div className="cart-link">
                        <span className="count">
                            {totalItems}
                        </span>
                         <span className="ml-2">Cart</span>
                    </div>
                </NavLink>
            </div>
            <div className="container">
                {children}
            </div>
        </>
    )
}
export default Layout