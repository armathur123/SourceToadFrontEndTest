import NumberHolder from "./NumberHolder";
import Button from "./Button";
import React, { useState, useEffect } from 'react';

const Calculator = () => {

    const [value, setValue] = useState("0");

    return (
        <div style={{display:'flex', flexDirection: 'column', width: '60%',border:'1px solid black'}}>
            <NumberHolder value={value}></NumberHolder>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center',flex:'1 1 auto'}}>
                <Button symbol={'A\C'} setValue={setValue}/>
                <Button symbol={'+/-'} setValue={setValue}/>
                <Button symbol={'%'} setValue={setValue}/>
                <Button symbol={'/'} setValue={setValue}/>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center',flex:'1 1 auto'}}>
                <Button symbol={'7'} setValue={setValue} />
                <Button symbol={'8'} setValue={setValue}/>
                <Button symbol={'9'} setValue={setValue}/>
                <Button symbol={'X'} setValue={setValue}/>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Button symbol={'4'} setValue={setValue}/>
                <Button symbol={'5'} setValue={setValue}/>
                <Button symbol={'6'} setValue={setValue}/>
                <Button symbol={'-'} setValue={setValue}/>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Button symbol={'1'} setValue={setValue}/>
                <Button symbol={'2'} setValue={setValue}/>
                <Button symbol={'3'} setValue={setValue}/>
                <Button symbol={'+'} setValue={setValue}/>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Button symbol={'0'} customStyle={{flex:2}} setValue={setValue}/>
                <Button symbol={'.'} setValue={setValue}/>
                <Button symbol={'='} setValue={setValue}/>
            </div>
        </div>
    );
}
 
export default Calculator;