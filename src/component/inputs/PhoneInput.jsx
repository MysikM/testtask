import React, {useState} from 'react';
import './input.scss';
import {VARIABLE} from "../../variables/variables";

const PhoneInput = ({phone, setPhone,className, helperText, formFilled, setFormFilled, ...props}) => {

    const [errorText, setErrorText] = useState(helperText);
    const [valid, setValid] = useState(true);

    const isPhone = (regex, phone) => {
        if(!regex.test(phone)) {
            setValid(false);
            setErrorText(VARIABLE.VALIDATION_MESSAGE.PHONE);
            setFormFilled({...formFilled, phone:false})
        } else {
            setValid(true);
            setErrorText(helperText);
            setFormFilled({...formFilled, phone:true})
        }
    }

    const setCode = (e) => {
        if (e.target.value.length === 0) setPhone('+38 (0')
    }
    const setNoCode = (e) => {
        if(e.target.value.length < 7) {
            setPhone('');
        }
    }
    const checkKeyPressAction = (e) => {
        if(e.target.value.length < 6) {setPhone( '+38 (0')};
        if(e.target.value.length < 6) {setPhone( '+38 (0')};
        if(e.target.value.length === 8 ) {setPhone( e.target.value+') ')};
        if (e.key === 'Backspace' && e.target.value.length === 8) {
            setPhone(phone.slice(0, phone.length - 1));
        }
        if(e.target.value.length === 13) {setPhone(e.target.value + ' - ')}
        if(e.key === 'Backspace' && e.target.value.length === 16) {
            setPhone(phone.slice(0, phone.length - 3));
        }
        if(e.target.value.length === 18) {setPhone(e.target.value + ' - ')}
        if(e.key === 'Backspace' && e.target.value.length === 21) {
            setPhone(phone.slice(0, phone.length - 3));
        }
    }
    const setChanges = (e) => {
        if(e.target.value.length <= 23){
            setPhone(e.target.value);
        }
        isPhone(VARIABLE.REGEX.PHONE, e.target.value);

    }
    return (
        <div className={`container-input ${className}`}>
            <input
                value={phone}
                onFocus={setCode}
                onBlur={setNoCode}
                onKeyDown={checkKeyPressAction}
                onChange={setChanges}
                className={`container-input__item ${!valid ? 'container-input__item--error': ''}`}
                {...props}/>
            {errorText && <span className={`container-input__helper ${!valid ? 'container-input__helper--error' : ''}`}>{errorText}</span> }
        </div>
    );
};

export default PhoneInput;