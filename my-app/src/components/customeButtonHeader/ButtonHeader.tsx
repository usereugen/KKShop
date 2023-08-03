import React from "react";
import {NavLink} from "react-router-dom";


type PropsButton = {
    text: string
    to: string
    classNameButton?: string
    classNameNavigate?: string
}
const ButtonHeader = (props: PropsButton) => {
    const {
        text,
        to,
        classNameButton,
        classNameNavigate
    } = props
    return (
        <button className={classNameButton}>
            <NavLink to={to} className={classNameNavigate}>
                {text}
            </NavLink>
        </button>
    )
}

export default ButtonHeader