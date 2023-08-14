import API from "./API";

export const getProducts = async () => {
    const response = await API.get("/products")
    return response.data
}