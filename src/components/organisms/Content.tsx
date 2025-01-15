import GridCards from './GridCards';
import { Container } from '../../style/GlobalStyle';
import styled from 'styled-components';
import LoadMore from '../molecules/LoadMore';

const Content = () => {
  return (
    <ContentMain>
      <Container>
        <GridCards />
        <LoadMore />
      </Container>
    </ContentMain>
  )
};

export default Content;

const ContentMain = styled.div`
  flex:1;
`;
