import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SignUp from "../../components/auth/sign-up/SignUp";
import SignIn from "../../components/auth/sign-in/SignIn";

const AuthorizationPage = () => {
    return (
        <>
            <Header/>
            <div className="flex justify-center mt-[70px]">
                <div className="flex w-[1490px]">
                    <div className="flex w-[745px] h-[600px] p-[20px] mb-[20px]">
                        <SignIn/>
                    </div>
                    <div
                        className="flex w-[745px] h-[630px] p-[20px] mb-[20px] bg-[#f5f5f5] border-[#e3e3e3] border-[1px] rounded-[4px]">
                        <SignUp/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AuthorizationPage