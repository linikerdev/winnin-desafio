import React from 'react';
type FilterButtonsProps = {
    filters: string[];
    activeFilter: string;
    onFilterChange: (filter: string) => void;
};
declare const FilterButtons: React.FC<FilterButtonsProps>;
export default FilterButtons;
