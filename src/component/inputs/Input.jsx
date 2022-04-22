import React, {useState} from 'react';
import './input.scss';

const Input = ({fieldName, value, setValue, className, helperText, validMessage, regex = /^.*$/ ,formFilled, setFormFilled,  ...props}) => {

    const [errorText, setErrorText] = useState(helperText);
    const [valid, setValid] = useState(true);

    const validateFunc = (regularExpression,item) => {
        return regularExpression.test(item);
    }

    const handleChange = (e) => {
        if(!validateFunc( regex,e.target.value)) {
            setErrorText(validMessage);
            setValid(false);
            setFormFilled({...formFilled, [`${fieldName}`]:false})
        } else {
            setErrorText('');
            setValid(true);
            setFormFilled({...formFilled, [`${fieldName}`]:true})
        }
        setValue(e.target.value);
    }

    const checkEmpty = (e) => {
        if(e.target.value.length === 0) {
            setValid(true);
            setErrorText('');
        }
    }

    return (
        <div className={`container-input ${className}`}>
            <input
                value={value}
                onBlur={checkEmpty}
                onChange={handleChange}
                className={`container-input__item ${!valid ? 'container-input__item--error': ''}`}
                {...props}

            />
            {errorText && <span className={`container-input__helper ${!valid ? 'container-input__helper--error' : ''}`}>{errorText}</span> }
        </div>
    );
};

export default Input;