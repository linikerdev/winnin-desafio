import React from 'react';
type SearchBarProps = {
    placeholder: string;
    value: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
};
declare const SearchBar: React.FC<SearchBarProps>;
export default SearchBar;
