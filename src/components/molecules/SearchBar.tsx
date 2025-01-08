import React from 'react';
import Button from '../atoms/Button';
import { Input } from '../atoms/Input';

type SearchBarProps = {
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, value, onChange, onSearch }) => {
    return (
        <div className="search-bar">
            <Input placeholder={placeholder} value={value} onChange={onChange} />
            <Button text="Buscar" onClick={onSearch} />
        </div>
    );
};

export default SearchBar;
