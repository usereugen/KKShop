import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";


const DeliveryPage = () => {

    return (
        <>
            <Header/>
            <div className="flex justify-center">
                <div className="flex w-[1466px] flex-col mt-[70px]">
                    <div className="flex items-start">
                        <span className="font-bold text-start text-[50px]">Доставка и Оплата</span>
                    </div>
                    <div className="flex flex-col items-center mt-[100px]">
                        <img src={require("../../img/доставка.jpg")} alt="" width={900} height={200}/>
                    </div>
                    <span className="mt-[20px]">- Заказы формируются и отправляются в течение 1 рабочего дня после их оформления;</span>
                    <span>- В случае оформления заказа в выходные и праздничные дни, заказ будет обработан в ближайший рабочий день.</span>

                    <span className="border-[0.7px] w-[1466px] border-[#212529] mt-[20px] mb-[30px] opacity-20"></span>

                    <span className="text-[28px] font-bold">МОСКВА</span>
                    <div className="flex justify-center items-center mt-[25px]">
                        <img src="https://saint-petersburg.kkshop.ru/assets/images/dostavka/sdek.png" alt="" width={110} height={25}/>
                        <img src="https://saint-petersburg.kkshop.ru/assets/images/dostavka/kuryer.png" alt="" width={39} height={47}/>
                        <span className="font-bold pl-[10px]">Курьером СДЭК до вашего адреса.</span>
                        <span>Согласно тарифам транспортной компании.</span>
                    </div>
                    <div className="flex justify-center items-center mt-[25px]">
                        <img src="https://saint-petersburg.kkshop.ru/assets/images/dostavka/sdek.png" alt="" width={110} height={25}/>
                        <span className="font-bold pl-[10px]">Доставка до пункта выдачи СДЭК.</span>
                        <span>Согласно тарифам транспортной компании.</span>
                    </div>
                    <span className="font-bold mt-[30px]">При покупке от 3500 руб. действует бесплатная доставка по Москве.</span>
                    <div className="flex justify-center  mt-[30px]">
                        <img src="https://saint-petersburg.kkshop.ru/assets/images/dostavka/samovivoz.png" alt="" width={47} height={47}/>
                        <span className="font-bold whitespace-nowrap">Самовывоз из нашего офиса.</span>
                        <span className="">При оформлении и оплате заказа на сайте возможен самовывоз по адресу:
                            г. Москва, ул. Шаболовка, д. 34, стр. 6. Время забора заказа согласовывается </span>
                    </div>
                    <span className="mb-[20px]">предварительно.</span>

                    <span className="border-[0.7px] w-[1466px] border-[#212529] mt-[20px] mb-[30px] opacity-20"></span>

                    <span className="text-[28px] font-bold">ДРУГИЕ ГОРОДА</span>
                    <div className="flex justify-center items-center mt-[25px] ">
                        <img src="https://saint-petersburg.kkshop.ru/assets/images/dostavka/sdek.png" alt="" width={110} height={25}/>
                        <span className="font-bold pl-[10px]">Доставка курьером или до пункта выдачи СДЭК.</span>
                        <span>Стоимость и сроки доставки вы можете узнать на странице оформления заказа.</span>
                    </div>
                    <span className="font-bold mt-[30px] mb-[20px]">При покупке от 3500 руб. действует бесплатная доставка.</span>

                    <span className="border-[0.7px] w-[1466px] border-[#212529] mt-[20px] mb-[30px] opacity-20"></span>

                    <span className="text-[28px] font-bold">ОПЛАТА</span>
                    <div className="flex justify-center items-center mt-[25px]">
                        <span className="font-bold pl-[10px]">При получении:</span>
                        <span>Наличными и банковской картой - курьеру и в пункте выдачи СДЭК.</span>
                    </div>
                    <div className="flex justify-center items-center mt-[25px] mb-[20px]">
                        <span className="font-bold pl-[10px]">Предоплата:</span>
                        <span className="mr-[5px]">Банковской картой</span>
                        <img src="https://saint-petersburg.kkshop.ru/assets/images/dostavka/karti.jpg" alt="" width={192} height={28}/>
                    </div>

                    <span className="border-[0.7px] w-[1466px] border-[#212529] mt-[20px] mb-[30px] opacity-20"></span>
                    <div className="flex justify-center items-center mt-[25px]">
                        <span className="font-bold mr-[5px]">Внимание!</span>
                        <span >Внешний вид товара, включая цвет и упаковку, может отличаться от представленных фотографий на сайте.</span>
                    </div>


                </div>
            </div>
            <Footer/>
        </>
    )
}

export default DeliveryPage