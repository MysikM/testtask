import React from 'react';

import './button.scss';
const Button = React.forwardRef(({children, className, ...props}, ref) => {
    return (
        <button ref={ref} className={`btn ${className}`} {...props}>
            {children}
        </button>
    );
});

export default Button;