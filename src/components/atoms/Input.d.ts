import React from 'react';
import { CSSObject } from 'styled-components';
type InputProps = {
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    css?: CSSObject;
};
export declare const Input: React.FC<InputProps>;
export {};
