import React, { useState } from 'react';
import MainLayout from './components/templates/MainLayout';
import { useGetAnimesQuery } from './services/api';
import { useDispatch } from 'react-redux';
import { changeTheme } from './state/theme/reducer';

const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const { data, isError } = useGetAnimesQuery({ page: 1, per_page: 40, genreIn: ['Drama'], search: 'Naruto' });
  console.log('data', data)


  const animes = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Naruto',
      tags: ['Ação', 'Aventura'],
      rating: 85,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      title: 'One Piece',
      tags: ['Ação', 'Comédia'],
      rating: 95,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      title: 'Attack on Titan',
      tags: ['Drama', 'Ação'],
      rating: 90,
    },
  ];

  const handleSearch = () => {
    console.log('Buscando por:', searchValue);
  };

  const toggleTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <>
      {/* {JSON.stringify(data.Page.media)} */}
      <MainLayout
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
        onSearch={handleSearch}
        animes={animes}
        onThemeToggle={toggleTheme}
        hasError={isError}
      />
    </>

  );
};

export default App;
