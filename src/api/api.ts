import { API_URL, ROUTES } from "./constants.ts";

const fetchProducts = async () => {
    return fetch(`${API_URL}/${ROUTES.PRODUCTS}`, )
        .then(response => response.json())
        .then(data => data);
}

export { fetchProducts };