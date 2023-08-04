import React from "react";
import "./style.css"
import ButtonHeader from "../customeButtonHeader/ButtonHeader";

const Header = () => {

    return (
        <>
            <div className="header-top"></div>
            <div className="header-bottom">
                <div className="container-header-top">
                    <div className="flex items-center">
                        <div>
                            <a href="/">
                                <img src={require("../../img/logo.png")}
                                     className="logo"
                                     alt={""}/>
                            </a>
                        </div>
                        <div>
                            <ButtonHeader text={"Каталог"} to={"/catalog"} classNameButton={"button-header"}
                                          classNameNavigate={"button-navigate"}/>
                            <ButtonHeader text={"Бренды"} to={"/brands"} classNameButton={"button-header"}
                                          classNameNavigate={"button-navigate"}/>
                            <ButtonHeader text={"Клуб косметологов"} to={"/club"} classNameButton={"button-header"}
                                          classNameNavigate={"button-navigate"}/>
                            <ButtonHeader text={"Бонусы"} to={"/bonuses"} classNameButton={"button-header"}
                                          classNameNavigate={"button-navigate"}/>
                            <ButtonHeader text={"Доставка"} to={"/delivery"} classNameButton={"button-header"}
                                          classNameNavigate={"button-navigate"}/>
                            <ButtonHeader text={"Контакты"} to={"/contacts"} classNameButton={"button-header"}
                                          classNameNavigate={"button-navigate"}/>
                            <ButtonHeader text={"Партнёры"} to={"/partners"} classNameButton={"button-header"}
                                          classNameNavigate={"button-navigate"}/>
                            <ButtonHeader text={"Блог"} to={"/blog"} classNameButton={"button-header"}
                                          classNameNavigate={"button-navigate"}/>
                        </div>
                    </div>
                    <div className="flex">
                        <svg className="mr-[20px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M16.687 15.9171C15.3399 17.2073 13.5125 18 11.5 18C7.35786 18 4 14.6421 4 10.5C4 6.35786 7.35786 3 11.5 3C15.6421 3 19 6.35786 19 10.5C19 12.5124 18.2074 14.3397 16.9174 15.6867C16.8738 15.718 16.8321 15.7533 16.7929 15.7925C16.7537 15.8318 16.7184 15.8735 16.687 15.9171ZM17.4735 17.8874C15.8416 19.2086 13.7632 20 11.5 20C6.25329 20 2 15.7467 2 10.5C2 5.25329 6.25329 1 11.5 1C16.7467 1 21 5.25329 21 10.5C21 12.7631 20.2087 14.8413 18.8877 16.4731L22.7071 20.2929C23.0976 20.6835 23.0976 21.3166 22.7071 21.7071C22.3165 22.0976 21.6834 22.0976 21.2929 21.7071L17.4735 17.8874Z"
                                  fill="black" fillOpacity="0.8"/>
                        </svg>
                        <svg className="mr-[20px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.01" width="24" height="24" fill="#D8D8D8"/>
                            <path opacity="0.8"
                                  d="M11.3268 4.85063L11.9795 5.42024L12.6363 4.85535C14.7874 3.00538 17.9238 3.1242 19.908 5.19867C21.9004 7.28175 22.028 10.5988 20.2783 12.8382L12.6984 20.2404C12.3105 20.6192 11.6913 20.6199 11.3026 20.2419L3.7109 12.8595C1.97472 10.5978 2.10707 7.27956 4.09739 5.19867C6.08439 3.12127 9.21735 3.00987 11.3268 4.85063Z"
                                  stroke="black" strokeWidth="2"/>
                            <mask id="mask0_13720_479" maskUnits="userSpaceOnUse" x="1" y="2" width="22"
                                  height="20">
                                <path
                                    d="M11.3268 4.85063L11.9795 5.42024L12.6363 4.85535C14.7874 3.00538 17.9238 3.1242 19.908 5.19867C21.9004 7.28175 22.028 10.5988 20.2783 12.8382L12.6984 20.2404C12.3105 20.6192 11.6913 20.6199 11.3026 20.2419L3.7109 12.8595C1.97472 10.5978 2.10707 7.27956 4.09739 5.19867C6.08439 3.12127 9.21735 3.00987 11.3268 4.85063Z"
                                    fill="white" stroke="white" strokeWidth="2"/>
                            </mask>
                            <g mask="url(#mask0_13720_479)">
                            </g>
                        </svg>
                        <svg className="mr-[20px]" xmlns="http://www.w3.org/2000/svg" width="18" height="21"
                             viewBox="0 0 18 21" fill="none">
                            <path opacity="0.8" fillRule="evenodd" clipRule="evenodd"
                                  d="M6.99996 5V4C6.99996 2.89543 7.89539 2 8.99996 2C10.1045 2 11 2.89543 11 4V5H6.99996ZM4.99996 5V4C4.99996 1.79086 6.79082 0 8.99996 0C11.2091 0 13 1.79086 13 4V5H15.3308C15.849 5 16.2813 5.39576 16.3269 5.91187L17.373 17.7356C17.5282 19.49 16.1459 21 14.3847 21H3.61449C1.85328 21 0.47095 19.49 0.626162 17.7356L1.67224 5.91187C1.7179 5.39576 2.15022 5 2.66835 5H4.99996ZM13 7H11H6.99996H4.99996H3.58378L2.61838 17.9119C2.56664 18.4967 3.02742 19 3.61449 19H14.3847C14.9718 19 15.4325 18.4967 15.3808 17.9119L14.4154 7H13Z"
                                  fill="black"/>
                        </svg>
                        <svg className="mr-[20px]" xmlns="http://www.w3.org/2000/svg" width="21" height="22"
                             viewBox="0 0 21 22" fill="black" fillOpacity="0.8">
                            <path
                                d="M2.21106 20.8724C2.21106 22.3759 0 22.3759 0 20.8724C0 16.4503 2.74171 12.7357 6.54472 11.1437C5.12965 9.99397 4.24523 8.22513 4.24523 6.2794C4.24523 2.83015 6.98693 0 10.5246 0C13.9739 0 16.7156 2.83015 16.7156 6.2794C16.7156 8.22513 15.8312 9.99397 14.4161 11.1437C18.2191 12.7357 20.9608 16.4503 20.9608 20.8724C20.9608 22.3759 18.7498 22.3759 18.7498 20.8724C18.7498 16.3618 15.0352 12.6472 10.5246 12.6472C5.92563 12.6472 2.21106 16.3618 2.21106 20.8724ZM10.5246 2.21106C8.22513 2.21106 6.45628 4.06834 6.45628 6.2794C6.45628 8.49045 8.22513 10.2593 10.5246 10.2593C12.7357 10.2593 14.5045 8.49045 14.5045 6.2794C14.5045 4.06834 12.7357 2.21106 10.5246 2.21106Z"
                                fill="black" fillOpacity="0.8"/>
                        </svg>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header