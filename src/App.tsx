import React, { useState } from 'react';
import MainLayout from './components/templates/MainLayout';
import { useGetAnimesQuery } from './services/api';
import { useDispatch } from 'react-redux';
import { changeTheme } from './state/theme/reducer';
import { AnimesProps } from './interfaces/animes.interface';

const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);
  const [genreList, setGenreList] = useState<string[] | null>(null);
  const [args, setArgs] = useState<AnimesProps>({
    page: 1,
    perPage: 4,
  });
  const dispatch = useDispatch();

  const { data, isError, isLoading } = useGetAnimesQuery(args);

  const animes = data?.Page.media


  const handleSearch = () => {
    setGenreList([])
    setArgs({
      page: 1,
      perPage: 12,
      search: searchValue?.length === 0 ? null : searchValue
    })
  };

  const toggleTheme = () => {
    dispatch(changeTheme());
  };
  if (isLoading) {
    return 'carregando...'
  } else {
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
}
export default App;
