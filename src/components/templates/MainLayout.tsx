import Header from '../organisms/Header';
import Content from '../organisms/Content';
import Footer from '../organisms/Footer';
import styled from 'styled-components';

const MainLayout = () => {
    return (
        <Layout>
            <Header />
            <Content />
            <Footer />
        </Layout>
    );
};

export default MainLayout;


const Layout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;