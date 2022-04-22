import React, {useState} from 'react';
import './input.scss';

const NameInput = ({className, helperText, ...props}) => {
    const validMessage = 'name should be 2-60 characters';
    const [errorText, setErrorText] = useState(helperText);
    const [valid, setValid] = useState(true);

    const isName = (name) => {
        return /^\w{2,60}$/.test(name);
    }

    const handleChange = (e) => {
        if(!isName(e.target.value)) {
            setErrorText(validMessage);
            setValid(false);
        } else {
            setErrorText('');
            setValid(true);
        }
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
                onBlur={checkEmpty}
                onChange={handleChange}
                className={`container-input__item ${!valid ? 'container-input__item--error': ''}`}
                {...props}

            />
            {errorText && <span className={`container-input__helper ${!valid ? 'container-input__helper--error' : ''}`}>{errorText}</span> }
        </div>
    );
};

export default NameInput;