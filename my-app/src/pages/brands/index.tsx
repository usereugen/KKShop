import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";


const BrandsPage = () => {


    return (
        <>
            <div className="flex justify-center h-[198px] pt-[50px] ">
                <div className="flex-col w-[1466px] h-[100px]">
                    <h1 className="text-[50px] font-bold  text-start">Бренды</h1>

                <div className="flex items-center justify-center">
                    <img src={require("../../img/Skindom logo.jpg")} alt="" width={200} height={61}/>
                    <img src={require("../../img/R&B logo.jpg")} alt="" width={98} height={98}/>
                </div>
                </div>

            </div>
        </>
    )
}
export default BrandsPage