import { useContext } from "react";
import { GenericContext } from "../../context/CartContext";


const Cart = () => {
    const { cart, dispatch } = useContext(GenericContext);
    
    return (
        <>
            {cart.length > 0 ? (
                <div>
                    <h1 className="text-2xl font-bold">Your Cart</h1>
                    <div className="product-cart-items">
                        {cart.map((product: any) => (
                            <div key={product.id} className="product-cart-item">
                                <div>
                                    <div>
                                        <img src={product.image} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold">{product.title}</h2>
                                        <p>Quantity: {product.quantity}</p>
                                        <p>${product.price}</p>
                                        <div className="quantity">
                                            <button
                                                onClick={() => dispatch({ type: 'quantity-adjustment', payload: { id: product.id, quantity: -1 } })}
                                                disabled={product.quantity <= 0}
                                            >
                                                -
                                            </button>
                                            <span>{product.quantity}</span>
                                            <button
                                                onClick={() => dispatch({ type: 'quantity-adjustment', payload: { id: product.id, quantity: + 1 } })}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
    
                                <button
                                    onClick={() => dispatch({ type: "remove-from-cart", payload: {id: product.id} })}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Total: ${cart.reduce((acc: number, product: any) => acc + product.price * product.quantity, 0).toFixed(2)}</h2>
                        <button
                            onClick={() => dispatch({ type: "clear-cart" })}
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                        >
                            Clear Cart
                        </button>   
                    </div>
                </div>
            ) : (
                <div>
                    <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
                    <p>Add some products to your cart!</p>
                </div>
            )}
        </>
    );
};

export default Cart;
  