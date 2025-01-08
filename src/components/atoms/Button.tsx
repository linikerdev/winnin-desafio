import React from 'react';

type ButtonProps = {
    text: string;
    onClick: () => void;
    isActive?: boolean;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, isActive }) => {
    return (
        <button className={isActive ? 'active' : ''} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button