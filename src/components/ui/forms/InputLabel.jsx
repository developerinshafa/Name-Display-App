import { Children } from "react";

export default function InputLabel({htmlFor, children, ...rest}){
    return (
        <label 
        htmlFor={htmlFor} 
        className="font-semibold">
        {children}
        </label>
    )
}