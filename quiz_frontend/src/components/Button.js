import React from 'react';
import './Button.css';

const Button = ({ text, onClick, type = 'button', variant = 'primary', className = '' }) => {
    return (
        <button 
            className={`button button-${variant} ${className}`} 
            onClick={onClick} 
            type={type}
        >
            {text}
        </button>
    );
};

export default Button;

