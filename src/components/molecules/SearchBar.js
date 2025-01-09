import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '../atoms/Button';
import { Input } from '../atoms/Input';
import styled from 'styled-components';
const SearchBar = ({ placeholder, value, onChange, onSearch }) => {
    return (_jsxs(SearchBarContainer, { children: [_jsx(Input, { css: { flex: 1 }, placeholder: placeholder, value: value || "", onChange: onChange }), _jsx(Button, { isActive: true, text: "Buscar", onClick: onSearch })] }));
};
export default SearchBar;
const SearchBarContainer = styled.div `
    display:flex;
    gap: 10px;
    margin: 24px 152px;
    @media (max-width: 768px) {
        margin: 24px 16px;
    }
`;
