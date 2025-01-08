import { createSlice } from '@reduxjs/toolkit';

type initialStateProps = {
  theme: 'light' | 'dark'
};


const initialState: initialStateProps = {
  theme: 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {},
});

// export const { } = someSlice.actions;
export default themeSlice.reducer;