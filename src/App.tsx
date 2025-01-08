import React, { useState } from 'react';
import MainLayout from './components/templates/MainLayout';

const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

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
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <MainLayout
      searchValue={searchValue}
      onSearchChange={(e) => setSearchValue(e.target.value)}
      onSearch={handleSearch}
      animes={animes}
      theme={theme}
      onThemeToggle={toggleTheme}
    />
  );
};

export default App;
