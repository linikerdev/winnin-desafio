import React from 'react';
import Button from '../atoms/Button';

type FilterButtonsProps = {
    filters: string[];
    activeFilter: string;
    onFilterChange: (filter: string) => void;
};

const FilterButtons: React.FC<FilterButtonsProps> = ({ filters, activeFilter, onFilterChange }) => {
    return (
        <div className="filters">
            {filters.map((filter) => (
                <Button
                    key={filter}
                    text={filter}
                    onClick={() => onFilterChange(filter)}
                    isActive={filter === activeFilter}
                />
            ))}
        </div>
    );
};

export default FilterButtons;
