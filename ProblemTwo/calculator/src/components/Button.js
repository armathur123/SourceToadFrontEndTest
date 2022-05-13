import React from "react";
import { useState } from "react";

const Button = ({symbol, clickHandler, style}) => {
    return (
        <div style={{...style, display:'flex', justifyContent:'center', alignItems:'center',backgroundColor:'#D3D3D3', border:'1px solid black'}}
            onClick={() =>{
                clickHandler();
            }}
        >
            <h3 style={{color:'black'}}>{symbol}</h3>
        </div>
    );
}
 
export default Button;