import React, { useState } from 'react';
import MainLayout from './components/templates/MainLayout';
import { useGetAnimesQuery } from './services/api';
import { useDispatch } from 'react-redux';
import { changeTheme } from './state/theme/reducer';

const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const { data, isError } = useGetAnimesQuery({
    page: 1,
    perPage: 12,
    genreIn: null,
    search: null
  });

  const animes = data?.Page.media


  const handleSearch = () => {
    console.log('Buscando por:', searchValue);
  };

  const toggleTheme = () => {
    dispatch(changeTheme());
  };

  return (

    <MainLayout
      searchValue={searchValue}
      onSearchChange={(e) => setSearchValue(e.target.value)}
      onSearch={handleSearch}
      animes={animes}
      onThemeToggle={toggleTheme}
      hasError={isError}
    />

  );
};

export default App;
