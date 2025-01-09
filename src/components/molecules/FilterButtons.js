import { jsx as _jsx } from "react/jsx-runtime";
import Button from '../atoms/Button';
const FilterButtons = ({ filters, activeFilter, onFilterChange }) => {
    return (_jsx("div", { className: "filters", children: filters.map((filter) => (_jsx(Button, { text: filter, onClick: () => onFilterChange(filter), isActive: filter === activeFilter }, filter))) }));
};
export default FilterButtons;
