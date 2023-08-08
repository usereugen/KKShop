import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";


const BonusesPage = () => {


    return (
        <>
            <Header/>
            <div className="flex justify-center">
                <div className="flex w-[1466px] flex-col mt-[70px]">
                    <div className="flex items-start">
                        <span className="font-bold text-start text-[50px]">Бонусы</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src={require("../../img/бонусы.jpg")} alt="" width={900} height={300}/>
                    </div>
                    <span className="text-[28px] font-bold mt-[30px]">КАК ЭТО РАБОТАЕТ?</span>
                    <span className="mt-[30px]">- Чтобы накапливать и тратить бонусы вы должны быть авторизованы на сайте;</span>
                    <span>- Сумма бонусного балла рассчитывается в размере 5% от стоимости товара;</span>
                    <span>- Бонусные баллы не начисляются за товары со скидкой;</span>
                    <span>- Бонусные баллы начисляются только за оплаченные заказы;</span>
                    <span>- Бонусами можно оплатить только товары без скидки.</span>

                    <span className="border-[0.7px] w-[1466px] border-[#212529] mt-[20px] mb-[30px] opacity-20"></span>

                    <span className="text-[28px] font-bold mt-[30px]">СКОЛЬКО БОНУСОВ Я ПОЛУЧУ?</span>
                    <div className="flex-col">
                        <span className="text-[#990066] text-[18px] font-bold">5%</span>
                        <span>- от 25 000 руб.</span>
                    </div>
                    <div className="flex-col">
                        <span className="text-[#990066] text-[18px] font-bold">10%</span>
                        <span> - от 50 000 руб.</span>
                    </div>
                    <div className="flex-col">
                        <span className="text-[#990066] text-[18px] font-bold">15%</span>
                        <span> - от 75 000 руб.</span>
                    </div>
                    <div className="flex-col">
                        <span className="text-[#990066] text-[18px] font-bold">20%</span>
                        <span> - от 100 000 руб.</span>
                    </div>

                    <span className="border-[0.7px] w-[1466px] border-[#212529] mt-[20px] mb-[30px] opacity-20"></span>

                    <span className="text-[28px] font-bold mt-[30px]">КАК ВОСПОЛЬЗОВАТЬСЯ МОИМИ БОНУСАМИ?</span>
                    <span className="mt-[25px]">- Количество доступных бонусов отображается в личном кабинете;</span>
                    <span>- При оформлении заказа введите необходимое количество бонусов в специальное поле для их списания;</span>
                    <span>- После изменения итоговой суммы продолжите оформление заказа.</span>

                    <span className="border-[0.7px] w-[1466px] border-[#212529] mt-[20px] mb-[30px] opacity-20"></span>

                    <span className="text-[28px] font-bold mt-[30px]">КАК ПРИМЕНИТЬ ПРОМОКОД?</span>
                    <span className="mt-[25px]">- Авторизуйтесь на сайте;</span>
                    <span>- Добавьте нужные товары в корзину;</span>
                    <span>- Перейдите в корзину и введите промокод в специальное поле.</span>

                    <span className="border-[0.7px] w-[1466px] border-[#212529] mt-[20px] mb-[30px] opacity-20"></span>

                    <div className="flex  justify-center">
                        <img src={require("../../img/bonuses-padarok.png")} alt="" width={100} height={100}/>
                    </div>
                    <span className="mt-[20px]">При покупке от 3500 руб. доставка БЕСПЛАТНО!</span>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default BonusesPage