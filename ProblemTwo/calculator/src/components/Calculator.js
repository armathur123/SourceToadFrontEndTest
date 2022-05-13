import NumberHolder from "./NumberHolder";
import Button from "./Button";
import React, { useState, useEffect } from 'react';

const Calculator = () => {

    const [value, setValue] = useState({
        a: 0,
        sign: undefined,
        b: 0
    });

    const buttonVals = [
        ["A/C", "+/-", "%", "/"],
        [7, 8, 9, "X"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
      ];
      
    const handleInteger = (integer) => {
        if (value.sign === undefined) {
            setValue(previous => ({
                a: '' + previous.a + integer,
                sign:previous.sign,
                b:previous.b,
            }))
        }else {
            setValue(previous => ({
                a:previous.a,
                sign:previous.sign,
                b: '' + previous.b + integer,
            }))
        }
    }

    const handleSign = (sign) => {
        if (value.a != undefined && value.b != undefined && value.sign != undefined) {
            handleEquals()
        }
        if (value.a != undefined) {
            setValue(previous => ({
                a: previous.a,
                sign: sign,
                b:previous.b,
            }))
        }
    }

    const handleNegativePos = () => {
        if (value.sign === undefined) {
            if (String(value.a).charAt() === '-') {
                setValue(previous => ({
                    a:String(previous.a).substring(1),
                    sign:previous.sign,
                    b:previous.b
                }))
            }
            else {
                setValue(previous => ({
                    a:'-'+previous.a,
                    sign:previous.sign,
                    b:previous.b
                }))
            }
        }
        if (value.sign !== undefined) {
            if (String(value.b).charAt(0) === '-') {
                setValue(previous => ({
                    a:previous.a,
                    sign:previous.sign,
                    b: String(previous.b).substring(1)
                }))
            }
            else {
                setValue(previous => ({
                    a:previous.a,
                    sign:previous.sign,
                    b: '-'+previous.b
                }))
            }
        }
    }

    const handleClear = () => {
        setValue({
            a:0,
            sign: undefined,
            b:0
        })
    }

    const handleDecimal = () => {
        if (value.sign === undefined && !String(value.a).includes('.')) {
            setValue(previous => ({
                a:''+previous.a+'.',
                sign:previous.sign,
                b:previous.b
            }))
        }
        if (value.sign !== undefined && !String(value.b).includes('.')) {
            setValue(previous => ({
                a:previous.a,
                sign:previous.sign,
                b: ''+previous.b+'.'
            }))
        }
    }


    const handleEquals = () => {
        let total = 0;
        let a = parseFloat(value.a)
        let b = parseFloat(value.b)
        if (value.sign === '+'){
            total = a + b;
        }
        else if (value.sign === '-'){
            total = a - b;
        }
        else if (value.sign === 'X'){
            total = a * b;
        }
        else if (value.sign === '/'){
            total = a / b;
        }
        else if (value.sign === '%'){
            total = a % b;
        }
        else {
            total = a
        }
        setValue({
            a:total,
            sign:undefined,
            b: 0,
        })
    }

    return (
        <div style={{display:'flex', flexDirection: 'column', width: '60%'}}>
            <NumberHolder value={value}></NumberHolder>
            <div style={{display:'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(5, 1fr)'}}>
                {buttonVals.flat().map((button, i) => {
                    return(
                        <Button
                            key={i}
                            symbol={button}
                            style={{gridColumn: button===0? '1/3' : ''}}
                            clickHandler={() => {
                                if (!isNaN(button)) {
                                    handleInteger(button)
                                }
                                else if (button === 'A/C') {
                                    handleClear()
                                }
                                else if (button === '=') {
                                    handleEquals()
                                }
                                else if (button === '+/-') {
                                    handleNegativePos()
                                }
                                else if (button === '+') {
                                    handleSign('+')
                                }
                                else if (button === '-') {
                                    handleSign('-')
                                }
                                else if (button ==='X'){
                                    handleSign('X')
                                }
                                else if (button === '/') {
                                    handleSign('/')
                                }
                                else if (button === '%') {
                                    handleSign('%')
                                }
                                else if (button === '.'){
                                    handleDecimal()
                                }
                                else {
                                    console.log('else')
                                }
                            }}
                        />
                    )
                })
                }
            </div>
        </div>
    );
}
 
export default Calculator;