import React from 'react';
import './success-popup.scss';
import successImage from '../../assets/success-image.svg';
const SuccessPopup = () => {
    return (
        <div className="popup">
            <div className="popup__content">
                <h3 className="popup__content-title">User successfully registered</h3>
                <img className="popup__content-img" src={successImage} alt="User successfully registered"/>
            </div>
        </div>
    );
};

export default SuccessPopup;