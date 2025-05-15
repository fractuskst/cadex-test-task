import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f6f6f6;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
