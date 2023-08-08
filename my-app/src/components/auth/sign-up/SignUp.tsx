import React from "react";
import {useForm} from "react-hook-form";
import API from "../../../services/API/API";


export type PropsReg = {
    name: string
    email: string
    password: string
    phone: number
    login: string
}
const SignUp = () => {

    const {
        register,
        formState: {
            errors,
            isValid
        },
        reset,
        handleSubmit,
        watch
    } = useForm<PropsReg>()

    const onSubmit = (data: PropsReg) => {

        let newUser = {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
            login: data.login
        }

        API.post("/register", newUser)
            .then()
            .catch((err) => {
                throw new Error(err.message)
            })

        reset()
    }


    return (
        <div className="flex flex-col">
            <span className="text-start text-[24px] font-bold">Регистрация</span>
            <form
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
            >
                <div className="flex">
                    <div className="flex w-[100px] h-[82px]">
                        <span className="text-[16px] text-[#212529] pt-[7px] pb-[7px] pr-[5px]">Email</span>
                        <span className="font-[500] text-[darkred] pt-[7px] pb-[7px] ">*</span>
                    </div>
                    <div className="flex flex-col w-[300px] h-[82px] pl-[12px]">
                        <input
                            className="w-[272px] h-[32px] border-dashed border-[1px] border-[#CACACA] rounded-[4px]
                           pt-[6px] pb-[6px] pl-[12px] outline-none focus:border-[#86b7fe] focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]"
                            type="email"
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^(([^<>()[\],;:\s@]+(\.[^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i,
                                    message: "Incorrect address email"
                                }
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.email &&
                                <p className="error-message">{errors?.email?.message || "error"}</p>}
                        </div>
                        <span className="text-start tetx-[14px] text-[#212529]">На указанный email придёт письмо со ссылкой для активации.</span>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex w-[100px] h-[82px]">
                        <span className="text-[16px] text-[#212529] pt-[7px] pb-[7px] pr-[5px]">Телефон</span>
                    </div>
                    <div className="flex flex-col w-[300px] h-[82px] pl-[12px]">
                        <input
                            className="w-[272px] h-[32px] border-dashed border-[1px] border-[#CACACA] rounded-[4px]
                           pt-[6px] pb-[6px] pl-[12px] outline-none focus:border-[#86b7fe] focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]"
                            type="phone"
                            {...register("phone", {
                                required: true,
                                pattern: {
                                    value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
                                    message: "Incorrect phone number"
                                }
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.phone &&
                                <p className="error-message">{errors?.phone?.message || "error"}</p>}
                        </div>
                        <span className="text-start tetx-[14px] text-[#212529]">Просто номер вашего сотового телефона.</span>
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
                        <span className="text-start tetx-[14px] text-[#212529] font-[16px]">Вы можете указать свой пароль, или оставить это поле пустым
                            и тогда он будет сгенерирован автоматически.</span>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex w-[100px] h-[107px]">
                        <span className="text-[16px] text-[#212529] pt-[7px] pb-[7px] pr-[5px]">Логин</span>
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
                        <span className="text-start tetx-[14px] text-[#212529]">Вы можете указать отдельный логин,
                            чтобы не использовать email для входа</span>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex w-[100px] h-[82px]">
                        <span className="text-[16px] text-[#212529] pt-[7px] pb-[7px] pr-[5px]">Имя</span>
                    </div>
                    <div className="flex flex-col w-[300px] h-[82px] pl-[12px]">
                        <input
                            className="w-[272px] h-[32px] border-dashed border-[1px] border-[#CACACA] rounded-[4px]
                           pt-[6px] pb-[6px] pl-[12px] outline-none focus:border-[#86b7fe] focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]"
                            type="text"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.name &&
                                <p className="error-message">{errors?.name?.message || "error"}</p>}
                        </div>
                        <span className="text-start tetx-[14px] text-[#212529]">Ваше имя, для отображения на сайте.</span>
                    </div>
                </div>
                <div className="w-[120px] ml-[30px]">
                <button
                    type="submit"
                    className="w-[120px] h-[53px] mt-[38px] bg-[#000000] text-[#FFF] border-[1px]
                    border-[#dc3545] hover:bg-[#dc3545] cursor-pointer active:shadow-[0_0_0_0.25rem_#D785A1]"
                    disabled={!isValid}
                >
                    Регистрация

                </button>
                </div>
            </form>
        </div>
    )
}

export default SignUp