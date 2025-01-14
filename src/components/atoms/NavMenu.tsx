import { useState } from 'react';
import Button from './Button';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setQuery, setSearch } from '../../state/anime/reducer';
import { FormatMedia } from '../../interfaces/animes.interface';

const formatList = [
    { label: 'All Formats', value: undefined },
    { label: 'TV', value: 'TV' },
    { label: 'TV Short', value: 'TV_SHORT' },
    { label: 'Movie', value: 'MOVIE' },
    { label: 'Special', value: 'SPECIAL' },
    { label: 'OVA', value: 'OVA' },
    { label: 'ONA', value: 'ONA' },
    { label: 'Music', value: 'MUSIC' },
    // { label: 'Manga', value: 'MANGA' },
    // { label: 'Novel', value: 'NOVEL' },
    // { label: 'One Shot', value: 'ONE_SHOT' },
]

const NavMenu = () => {
    const dispatch = useDispatch();
    const [activeFormat, setActiveFormat] = useState<FormatMedia | undefined>(undefined);

    const handleFormat = (format: FormatMedia) => {
        setActiveFormat(format)
        const args = {
            page: 1,
            perPage: 12,
            search: undefined,
            format: format
        }

        dispatch(setQuery(args));
        dispatch(setSearch(""))
    }

    return (
        <Nav>
            {formatList.map((item, index) => (
                <li key={index}>
                    <Button
                        isActive={activeFormat === item.value}
                        text={item.label}
                        onClick={() => handleFormat(item.value as FormatMedia)}
                    />
                </li>
            ))}
        </Nav>
    );
};

export default NavMenu;


const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding: 1rem;
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 24px;
    padding: 0;
    max-width: 100%; 
    overflow: hidden;
    
    li{
        white-space: nowrap;
    }
  
    @media (max-width: 768px) {
    margin: 24px auto;
    padding: 0;
    padding-left: 4rem;
    overflow-x: auto;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */

&::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
}
}
`;