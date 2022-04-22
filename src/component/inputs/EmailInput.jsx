import React, {useState} from 'react';

const EmailInput = ({className, helperText, ...props}) => {
    {/*user email, must be a valid email according to RFC2822*/}
    const validMessage = 'email must be a valid email according to RFC2822';
    const [errorText, setErrorText] = useState(helperText);
    const [valid, setValid] = useState(true);

    function isEmail(email){
        return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test( email );
    }

    const handleChange = (e) => {
        if(!isEmail(e.target.value)) {
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

export default EmailInput;