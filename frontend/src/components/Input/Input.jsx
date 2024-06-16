import React from "react"
import "./Input.css"
import { useFormContext } from "react-hook-form"
import { findInputError } from "../../utils/findInputError";
import { isFormInvalid } from "../../utils/isFormInvalid";

const Input = ( {type, id, placeholder, label, inputName, validation} ) => {

    const { register, formState: { errors }, } = useFormContext();
    
    const inputError = findInputError(errors, inputName);
    const isInvalid = isFormInvalid(inputError);

    return (
        <div className="input-component">
            <div className="input-label-error">
                <label htmlFor={id}>{label}</label>
                {isInvalid && (<InputError message={inputError.error.message} key={inputError.error.message} />)}   
            </div>    
            <input id={id} type={type} placeholder={placeholder} {...register(inputName, validation)}/>
        </div>
    )
}

const InputError = ({ message }) => {
    return (
        <div className="input-error">{message}</div>
    )
}

export default Input