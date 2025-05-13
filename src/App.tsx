import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUsPage from './pages/ContactUsPage';
import MainPage from './pages/MainPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Layout>
  );
};

export default App;
