import React from "react";
import {ProductProps} from "../../pages/catalog";
import {QueryConstKey} from "../../utils";
import {getProducts} from "../API/product";
import {useQuery} from "react-query";


interface returnTypeProduct{
    data: ProductProps;
    isLoading: boolean;
    isError: boolean;
    error: string | unknown | Error;
    refetch: any
}

const useGetProduct = (): returnTypeProduct => {

    const queryKey = QueryConstKey.product();

    const queryFn = async () => {
        return await getProducts();
    };

    const {
        data,
        isLoading,
        isError,
        error,
        refetch
    } = useQuery(queryKey, queryFn);


    return {
        data,
        isLoading,
        isError,
        error,
        refetch
    }
}

export default useGetProduct