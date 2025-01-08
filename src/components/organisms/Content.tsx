import React from 'react';
import GridCards from './GridCards';
import { AnimesState } from '../../interfaces/animes.interface';


type ContentProps = {
  animes: AnimesState[];
  theme?: 'light' | 'dark';
};


const Content: React.FC<ContentProps> = ({ animes }) => {
  return (
    <GridCards animes={animes} />
  )
};

export default Content;
