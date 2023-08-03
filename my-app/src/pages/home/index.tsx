import React from "react";
import Header from "../../components/header/Header";
import ButtonHeader from "../../components/customeButtonHeader/ButtonHeader";
import "./style.css"


const HomePage = () => {

    return (
        <>
            <Header/>
            <div className="home-top">
                <img src={require("../../img/Rectangle 5.png")} alt="" className="w-[1680px] h-[698px]"/>
                <span className="home-top-title">SKINDOM</span>
                <span className="home-top-body">Специальные цены только до 30 апреля</span>
                <ButtonHeader text={"Перейти в каталог"} to={"/catalog"} classNameNavigate={"home-top-navigate "}
                              classNameButton={"home-top-button"}/>
            </div>
            <div className="flex flex-col w-[1680px] h-[500px] relative top-[768px] font-bold">
                <div className="flex justify-around">
                    <div className="flex w-[750px] h-[357px] ">
                        <img src={require("../../img/Rectangle 7.png")} alt="" className="w-[784px] h-[357px]"/>
                    </div>
                    <div className="flex w-[750px] h-[357px] flex-col">
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
                            <svg className="mt-[24px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16 15L19 12L16 9L15.293 9.707L17.086 11.5H5V12.5H17.086L15.293 14.293L16 15Z" fill="#CC4C6E"/>
                            </svg>
                        </div>

                    </div>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default HomePage