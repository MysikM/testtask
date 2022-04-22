import React from 'react';
import './radio-btn.scss';

const RadioBtn = ({children, value, setPosition, position, className, formFilled, setFormFilled, ...props}) => {
    const handleRadioClick = (e) => {
        setPosition(e.currentTarget.value)
        setFormFilled({...formFilled, position: true});
    }

    return (
        <label className={`radio ${className}`}>
            <input className="radio__input"
                   value={value}
                   type="radio"
                   name="position_id"
                   onChange={handleRadioClick}
                   {...props}/>
            <span className="radio__custom" />
            {children}
        </label>
    );
};

export default RadioBtn;