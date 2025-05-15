import styled from 'styled-components';
import ContactUsButton from './ContactUsButton';
import { useNavigate } from 'react-router-dom';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  border-bottom: 2px solid #e6e6e6;
  padding: 0 50px 0 25px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;

  @media (max-width: 460px) {
    padding: 0 25px;
  }
`;

const CompanyName = styled.span`
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 400px) {
    width: 150px;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <CompanyName onClick={() => navigate('/')}>Some Company</CompanyName>
      <ContactUsButton />
    </StyledHeader>
  );
};

export default Header;
