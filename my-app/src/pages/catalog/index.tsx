import React from "react";
import useGetProduct from "../../services/hooks/useGetProduct";
import {Ages, Brands, Effects, Filtration, Sales, SkinsTypes} from "../../utils/filtreProducts";
import {useLocation} from "react-router";

export type ProductProps = {
    "id": number,
    "name": string,
    "price": number,
    "totalPrice": number,
    "quantity": number,
    "img": string,
    "sales": [],
    "effect": [],
    "skinType": [],
    "age": [],
    "weight": string,
    "volume": string,
    "manufacturerCountry": string,
    "compound": string,
    "description": string,
    "brand": [],
    "modeOfApplication": string
}[]

const CatalogPage = () => {

    const {data: products, isLoading, isError, error} = useGetProduct()

    const paramValue = useLocation()
    


    let content;
    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isError) {
        content = <p>{(error as any).message}</p>;
    } else {
        content = products.map((el, index) => {
            return <div className="flex justify-center w-[350px] " key={index}>
                <div className=" flex w-[350px] h-[500px] flex-col justify-center items-center">
                    <div className="h-[370px]">
                        <img src={el.img} alt="" width={230} height={230} className="pt-[70px] pb-[70px]"/>
                    </div>
                    <span
                        className="flex h-[60px] w-[300px] text-[17px] font-normal mt-[24px] text-[#1A1A1A] leading-[20px]">{el.name}</span>
                    <span className="text-[#D785A1] text-[24px] font-bold">{el.price} руб</span>
                </div>
            </div>
        })
    }


    return (
        <>
            <div className="flex justify-center ">
                <div className="flex  w-[1466px]  h-[1000%] justify-center flex-wrap">
                    <div className="flex flex-col">
                        <a className="font-bold text-black text-start mt-[50px]" href={`${paramValue}`}>{paramValue.pathname}</a>
                        <div className="flex mt-[42px]">
                            <div className="w-[200px] justify-center">
                                <select className="w-[185px] h-[42px] outline-none border-[1px] border-[#dee2e6] rounded-[4px]
                             appearance-none p-[8px] cursor-pointer text-[16px] hover:bg-[#eff1f3]
                              focus:shadow-[0_0_0_4px_rgba(13,110,253,.25)] transition-[.3s]">
                                    {Filtration.map((item, index) =>
                                        <option value={item} key={index}>{item}</option>
                                    )}</select>
                            </div>
                            <div className="w-[200px] justify-center">
                                <select className="w-[185px] h-[42px] outline-none border-[1px] border-[#dee2e6] rounded-[4px]
                             appearance-none p-[8px] cursor-pointer text-[16px] hover:bg-[#eff1f3]
                              focus:shadow-[0_0_0_4px_rgba(13,110,253,.25)] transition-[.3s]">
                                    {Brands.map((item, index) =>
                                        <option value={item} key={index}>{item}</option>
                                    )}</select>
                            </div>
                            <div className="w-[200px] justify-center">
                                <select className="w-[185px] h-[42px] outline-none border-[1px] border-[#dee2e6] rounded-[4px]
                             appearance-none p-[8px] cursor-pointer text-[16px] hover:bg-[#eff1f3]
                              focus:shadow-[0_0_0_4px_rgba(13,110,253,.25)] transition-[.3s]">
                                    {Sales.map((item, index) =>
                                        <option value={item} key={index}>{item}</option>
                                    )}</select>
                            </div>
                            <div className="w-[200px] justify-center">
                                <select className="w-[185px] h-[42px] outline-none border-[1px] border-[#dee2e6] rounded-[4px]
                             appearance-none p-[8px] cursor-pointer text-[16px] hover:bg-[#eff1f3]
                              focus:shadow-[0_0_0_4px_rgba(13,110,253,.25)] transition-[.3s]">
                                    {Effects.map((item, index) =>
                                        <option value={item} key={index}>{item}</option>
                                    )}</select>
                            </div>
                            <div className="w-[200px] justify-center">
                                <select className="w-[185px] h-[42px] outline-none border-[1px] border-[#dee2e6] rounded-[4px]
                             appearance-none p-[8px] cursor-pointer text-[16px] hover:bg-[#eff1f3]
                              focus:shadow-[0_0_0_4px_rgba(13,110,253,.25)] transition-[.3s]">
                                    {SkinsTypes.map((item, index) =>
                                        <option value={item} key={index}>{item}</option>
                                    )}</select>
                            </div>
                            <div className="w-[200px] justify-center">
                                <select className="w-[185px] h-[42px] outline-none border-[1px] border-[#dee2e6] rounded-[4px]
                             appearance-none p-[8px] cursor-pointer text-[16px] hover:bg-[#eff1f3]
                              focus:shadow-[0_0_0_4px_rgba(13,110,253,.25)] transition-[.3s]">
                                    {Ages.map((item, index) =>
                                        <option value={item} key={index}>{item}</option>
                                    )}</select>
                            </div>
                        </div>

                        <div className="flex">{content}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogPage