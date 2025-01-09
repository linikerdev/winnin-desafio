import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    theme: 'light',
    query: {
        page: 1,
        perPage: 12,
        format: null,
        search: null,
    }
};
const themeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {
        changeTheme(state) {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        setQuery(state, action) {
            state.query = action.payload;
        },
    },
});
export const { changeTheme, setQuery } = themeSlice.actions;
export default themeSlice.reducer;
