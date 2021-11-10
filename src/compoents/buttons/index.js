import React from "react";
import "./index.css";

const Button=({type,label,onClick})=>{
    return(
        <button className={type} onClick={onClick}>{label}</button>
    );
};
export default Button;