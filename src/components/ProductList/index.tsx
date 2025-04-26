import { useEffect, useState } from "react";
import { fetchProducts } from "../../api/api";
import ProductCard from "../ProductCard";
import Loading from "../Loading";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts().then((data) => {
            setProducts(data);
            setLoading(false);
        }).catch((error) => {
            console.error("Error fetching products:", error);
        });
    }, []);

    return (
        <div className="product-list">
            {loading ? (
                <Loading />
            ) : products.length > 0 ? (
                products.map((product: any) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <div>No products available</div>
            )}
        </div>
    );
}

export default ProductList;