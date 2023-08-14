import React from "react";
import {useForm} from "react-hook-form";
import API from "../../../services/API/API";

export type PropsLog = {
    login: string
    password: string

}
const SignIn = () => {

    const {
        register,
        formState: {
            errors,
            isValid
        },
        reset,
        handleSubmit,
    } = useForm<PropsLog>()

    const onSubmit = (data: PropsLog) => {

        let logUser = {
            login: data.login,
            password: data.password,
        }
        API.post("/login", logUser)
            .then()
            .catch((err) => {
                throw new Error(err.message)
            })

        reset()
    }

    return (
        <>
            <div className="flex flex-col">
                <span className="text-start text-[24px] font-bold">Авторизация</span>
                <form action="">
                    <div className="flex">
                        <div className="flex w-[100px] h-[107px]">
                            <span className="text-[16px] text-[#212529] pt-[7px] pb-[7px] pr-[5px]">Логин</span>
                            <span className="font-[500] text-[darkred] pt-[7px] pb-[7px] ">*</span>
                        </div>
                        <div className="flex flex-col w-[300px] h-[82px] pl-[12px]">
                            <input
                                className="w-[272px] h-[32px] border-dashed border-[1px] border-[#CACACA] rounded-[4px]
                           pt-[6px] pb-[6px] pl-[12px] outline-none focus:border-[#86b7fe] focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]"
                                type="text"
                                {...register("login", {
                                    required: true,
                                })}
                            />
                            <div style={{height: 40}}>
                                {errors?.login &&
                                    <p className="error-message">{errors?.login?.message || "error"}</p>}
                            </div>
                            <span className="text-start tetx-[14px] text-[#212529]">Укажите логин, email или номер телефона,
                                которые вы использовали при регистрации.</span>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex w-[100px] h-[107px]">
                            <span className="text-[16px] text-[#212529] pt-[7px] pb-[7px] pr-[5px]">Пароль</span>
                        </div>
                        <div className="flex flex-col w-[300px] h-[82px] pl-[12px]">
                            <input
                                className="w-[272px] h-[32px] border-dashed border-[1px] border-[#CACACA] rounded-[4px]
                           pt-[6px] pb-[6px] pl-[12px] outline-none focus:border-[#86b7fe] focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]"
                                type="password"
                                {...register("password", {
                                    required: true,
                                })}
                            />
                            <div style={{height: 40}}>
                                {errors?.password &&
                                    <p className="error-message">{errors?.password?.message || "error"}</p>}
                            </div>
                            <span className="text-start tetx-[0.875em] text-[#212529]">Если вы не помните свой пароль - просто оставьте это поле
                                пустым и вы получите новый,вместе со ссылкой на активацию.</span>
                        </div>
                    </div>

                    <div className="w-[120px] ml-[30px]">
                        <button
                            type="submit"
                            className="w-[100px] h-[53px] mt-[78px] bg-[#000000] text-[#FFF] border-[1px]
                    border-[#0d6efd] hover:bg-[#0d6efd] cursor-pointer active:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]"
                            disabled={!isValid}
                        >
                          Вход
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default SignIn