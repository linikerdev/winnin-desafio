import React from 'react';
import GridCards from './GridCards';
import { AnimesState } from '../../interfaces/animes.interface';
import { Container } from '../../style/GlobalStyle';
import styled from 'styled-components';


type ContentProps = {
  animes: AnimesState[];
  theme?: 'light' | 'dark';
};


const Content: React.FC<ContentProps> = ({ animes }) => {
  return (

    <ContentMain>
      <Container>
        <GridCards animes={animes} />
      </Container>
    </ContentMain>
  )
};

export default Content;



const ContentMain = styled.div`
  flex:1;
`;
