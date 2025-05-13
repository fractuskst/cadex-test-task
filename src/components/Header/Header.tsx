import styled from 'styled-components';
import ContactUsButton from '../ContactUsButton/ContactUsButton';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  border-bottom: 2px solid #e6e6e6;
  padding: 0 50px 0 25px;
  position: sticky;
  z-index: 100;
`;

const CompanyName = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const Header = () => {
  return (
    <StyledHeader>
      <CompanyName>Some Company</CompanyName>
      <ContactUsButton />
    </StyledHeader>
  );
};

export default Header;
