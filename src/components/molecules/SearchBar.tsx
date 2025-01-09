import React from 'react';
import Button from '../atoms/Button';
import { Input } from '../atoms/Input';
import styled from 'styled-components';

type SearchBarProps = {
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, value, onChange, onSearch }) => {
    return (
        <SearchBarContainer>
            <Input css={{ flex: 1 }} placeholder={placeholder} value={value} onChange={onChange} />
            <Button isActive text="Buscar" onClick={onSearch} />
        </SearchBarContainer>
    );
};

export default SearchBar;


const SearchBarContainer = styled.div`
    display:flex;
    gap: 10px;
    margin: 24px 152px;
    @media (max-width: 768px) {
        margin: 24px 16px;
    }
`                  