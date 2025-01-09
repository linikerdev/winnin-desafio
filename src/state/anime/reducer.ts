import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnimesProps, AnimeState } from '../../interfaces/animes.interface';


const initialState: AnimeState = {
  search: undefined,
  theme: 'light',
  query: {
    page: 1,
    perPage: 12,
    format: undefined,
    search: undefined,
  }
};

const themeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setQuery(state, action: PayloadAction<AnimesProps>) {
      state.query = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { changeTheme, setQuery, setSearch } = themeSlice.actions;
export default themeSlice.reducer;