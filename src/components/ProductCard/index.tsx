import { useContext, useState } from "react";
import {GenericContext} from "../../context/CartContext";

const ProductCard = ({ product }: { product: any }) => {
    const [count, setCount] = useState(1);
    const { dispatch } = useContext(GenericContext);
    const description = product.description.length > 100 ? product.description.slice(0, 100) + "..." : product.description;
    return (
        <div className="product-card">
            <span className="badge">{product.category}</span>
            <img src={product.image} alt={product.name} width={300} height={350}/>
            <h3 className="font-bold">{product.title}</h3>
            <p>{description}</p>
            <p>${product.price}</p>
            <div className="add-to-cart">
                <div className="quantity">
                    <button
                        onClick={() => setCount(count - 1)}
                        disabled={count <= 0}
                    >
                        -
                    </button>
                    <span>{count}</span>
                    <button
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={() => dispatch({ type: "add-to-cart", payload: {...product, quantity: count} })}
                >
                    Add to Cart
                </button>
            </div>

        </div>
    );
};

export default ProductCard;
