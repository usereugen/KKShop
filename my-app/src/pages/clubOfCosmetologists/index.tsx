import React from "react";

const ClubPage = () => {

    return (
        <>
            <div className="flex justify-center mt-[70px]">
                <div className="w-[1466px] flex">
                    <div className="flex">
                        <img src={require("../../img/club.jpg")} alt="" width={657} height={693} className="mr-[70px]"/>
                    </div>
                    <div className="flex flex-col relative bottom-[40px] text-start w-[739px]">
                        <span className="font-bold text-[70px]">Клуб косметологов</span>
                        <span className="text-[22px] font-bold mb-[20px]">Как вступить в клуб косметологов?</span>

                        <span
                            className="mb-[20px]"
                        >Вступить в клуб косметологов могут только специалисты индустрии красоты.
                        Участникам клуба доступны профессиональные объёмы на продукцию.
                        Вступление в клуб остается на усмотрение администрации.</span>
                        <span
                            className="text-[22px] font-bold mb-[20px]">Для регистрации косметологов необходимо</span>
                        <div className="flex">
                            <div className="flex flex-col">
                                <span className="text-[16px]">Москва и Московская обл.:</span>
                                <span
                                    className="text-[#828282]"
                                >Приехать к нам в офис по адресу: г. Москва, ул. Шаболовка, д. 34, стр. 6 и предъявить документ
                                о профессиональном образовании и паспорт.</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[16px]">Регионы:</span>
                                <span
                                    className="text-[#828282]"
                                >Прислать сканы документа о профессиональном образовании и паспорт на электронную почту sale@kkshop.ru</span>
                            </div>
                        </div>
                        <span className="text-[22px]  mb-[20px] mt-[30px] font-bold">Для вступления в клуб косметологов послепредоставления
                                документов вам необходимо</span>
                        <span className="text-[#828282] mb-[50px]">Пройти регистрацию на нашем сайте.</span>
                        <span className="text-[#828282]">После регистрации Вам будет дана возможность совершать покупки в нашем интернет-магазине
                            с выбором профессиональных объёмов на продукцию.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClubPage