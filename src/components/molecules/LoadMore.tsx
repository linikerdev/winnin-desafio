import Button from '../atoms/Button';
import styled, { useTheme } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../../state/anime/reducer';
import { RootState } from '../../state';


const LoadMore = () => {
    const dispatch = useDispatch();
    const perPage = useSelector((state: RootState) => state.anime.query.perPage);
    const theme = useTheme();

    const styleButton = {
        backgroundColor: theme.colors.secondary,
        display: 'flex',
        flex: 1,
        border: 'none',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '1.2rem',
        margin: '20px 0',
    };


    const loadMoreFn = () => {

        const args = {
            page: 1,
            perPage: perPage + 12,
            search: undefined,
            format: undefined
        }

        dispatch(setQuery(args));
    };


    return (
        <LoadMoreContainer>
            <Button icon="mdi:plus" css={styleButton} onClick={loadMoreFn} text="Ver mais" />
        </LoadMoreContainer>
    );
};

export default LoadMore;


const LoadMoreContainer = styled.div`
    display: flex;
    justify-content: center;
    flex:1;
    padding: 16px;
`

