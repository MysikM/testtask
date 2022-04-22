import React from 'react';
import logo from '../../../src/assets/Logo.svg';

import './header.scss';
import Button from "../button/Button";

const Header = () => {
    return (
        <header className="header">
            <nav className="container header__nav">
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="testtask logo"/>
                    </a>
                </div>
                <div className="header__btns">
                    <Button>Users</Button>
                    <Button>Sign in</Button>
                </div>
            </nav>
        </header>
    );
};

export default Header;