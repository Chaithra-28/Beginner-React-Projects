import React, { useState } from 'react';
import "../style.css";

const Calculator = () => {
    const [inputValue, setInputValue] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setInputValue(String(Function(`"use strict"; return (${inputValue})`)())); // Safe alternative to eval
            } catch {
                setInputValue('Error');
            }
        } else if (value === 'C') {
            setInputValue('');
        } else {
            setInputValue((prev) => prev + value);
        }
    };

    const buttons = [
        'C', '/', '*', '7', '8', '9', '-', 
        '4', '5', '6', '+', '1', '2', '3', 
        '0', '00', '.', '='
    ];

    return (
        <form className='calculator' name='calci'>
            <input 
                type="text" 
                className="value" 
                value={inputValue}
                readOnly
            />
            
            <div className="buttons-grid"> 
                {buttons.map((btn) => (
                    <span 
                        key={btn}
                        className={btn === 'C' ? "num clear" : btn === '=' ? "num equal" : btn === '+' ? "plus" : ""}
                        onClick={() => handleClick(btn)}
                    >
                        {btn}
                    </span>
                ))}
            </div>

        </form>
    );
}

export default Calculator;
