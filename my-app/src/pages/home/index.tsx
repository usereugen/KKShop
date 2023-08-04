import React from "react";
import Header from "../../components/header/Header";
import ButtonHeader from "../../components/customeButtonHeader/ButtonHeader";
import "./style.css"
import Footer from "../../components/footer/Footer";


const HomePage = () => {

    return (
        <>
            <Header/>
            <div className="relative h-[700px]">
                <img src={require("../../img/Rectangle 5.png")} alt="" className="w-[1680px] h-[625px]"/>
                <span className="home-top-title">SKINDOM</span>
                <span className="home-top-body">Специальные цены только до 30 апреля</span>
                <ButtonHeader text={"Перейти в каталог"} to={"/catalog"} classNameNavigate={"home-top-navigate "}
                              classNameButton={"home-top-button"}/>
            </div>

            <div className="flex justify-center">
                <div className="flex flex-col w-[1466px] h-[444px]  justify-between">
                    <div className="flex justify-between h-[317px]">
                        <div className="flex w-[697px] h-[317px] ">
                            <img src={require("../../img/Rectangle 7.png")} alt=""/>
                        </div>
                        <div className="flex w-[697px] h-[317px] flex-col">
                        <span
                            className="text-[#000] text-[32px] text-start font-[400]"
                        >Ведущий эксперт на российском рынке профессиональной косметики из Кореи—ККshop™
                        </span>
                            <span
                                className="text-[#000] text-[16px] text-start font-[400]"
                            >
                            Мы делаем мир профессиональной корейской косметики доступным для каждого косметолога в России,
                            предоставляя возможность работать с лучшими достижениями корейских учёных и
                            специалистов в области сохранения здоровья и ухода за кожей
                        </span>
                            <div className="flex">
                                <a href="/" className="text-[#CC4C6E] text-[16px] font-[400] text-start mt-[24px]">
                                    Подробнее</a>
                                <svg className="mt-[24px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M16 15L19 12L16 9L15.293 9.707L17.086 11.5H5V12.5H17.086L15.293 14.293L16 15Z"
                                        fill="#CC4C6E"/>
                                </svg>
                            </div>

                        </div>
                    </div>
                    <div className=" flex  relative  items-center justify-between">
                        <div
                            className="w-[347px] h-[90px] border-[1px] border-[#f1f1f1]  flex items-center justify-center text-[#464646] font-normal">
                            БЕЗУПРЕЧНЫЙ СОСТАВ И ЭФФЕКТИВНОСТЬ
                        </div>
                        <div
                            className="w-[347px] h-[90px] border-[1px]  border-[#f1f1f1]  flex items-center justify-center text-[#464646] font-normal">
                            НАТУРАЛЬНОСТЬ И ЭКОЛОГИЧНОСТЬ
                        </div>
                        <div
                            className="w-[347px] h-[90px] border-[1px]  border-[#f1f1f1]  flex items-center justify-center text-[#464646] font-normal">
                            НАЛИЧНЫЙ И БЕЗНАЛИЧНЫЙ РАСЧЕТ
                        </div>
                        <div
                            className="w-[347px] h-[90px] border-[1px]  border-[#f1f1f1]  flex items-center justify-center text-[#464646] font-normal">
                            ДОСТАВКА ПО ВСЕЙ РОССИИ
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-32px relative top-[40px]">
                <div className="flex flex-col w-[1466px] ">
                    <div className="flex justify-between">
                        <div className="">
                            <h2 className="text-[28px] font-normal text-start">Новинки</h2>
                        </div>
                        <div className="flex">
                            <svg width="27" height="13" viewBox="0 0 20 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.83 4L6.41 1.41L5 0L0 5L5 10L6.41 8.59L3.83 6H20V4H3.83Z"
                                      fill="#000000"></path>
                            </svg>

                            <svg width="27" height="13" viewBox="0 0 20 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.17 6L13.59 8.59L15 10L20 5L15 0L13.59 1.41L16.17 4H0V6H16.17Z"
                                      fill="black">

                                </path>
                            </svg>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex">
                            <div className="mb-32px ">
                                <h2 className="text-[28px] font-normal text-start">Акционные товары</h2>
                            </div>
                        </div>
                        <div className="flex">
                            <svg width="27" height="13" viewBox="0 0 20 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.83 4L6.41 1.41L5 0L0 5L5 10L6.41 8.59L3.83 6H20V4H3.83Z"
                                      fill="#000000"></path>
                            </svg>

                            <svg width="27" height="13" viewBox="0 0 20 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.17 6L13.59 8.59L15 10L20 5L15 0L13.59 1.41L16.17 4H0V6H16.17Z"
                                      fill="black">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
                <Footer/>

        </>
    )
}

export default HomePage