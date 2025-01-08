import React from 'react';

type InputProps = {
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
    return <input type="text" placeholder={placeholder} value={value} onChange={onChange} />;
};