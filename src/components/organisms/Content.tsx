import GridCards from './GridCards';
import { Container } from '../../style/GlobalStyle';
import styled from 'styled-components';

const Content = () => {
  return (
    <ContentMain>
      <Container>
        <GridCards />
      </Container>
    </ContentMain>
  )
};

export default Content;

const ContentMain = styled.div`
  flex:1;
`;
