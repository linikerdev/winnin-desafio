import React from 'react';
type ButtonProps = {
    text: string;
    onClick: () => void;
    isActive?: boolean;
    disabled?: boolean;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
