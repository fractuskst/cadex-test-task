import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 197px;
  border-top: 2px solid #e6e6e6;
  position: sticky;
  margin-top: auto;
`;

const FooterText = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>Some Company 2024</FooterText>
    </StyledFooter>
  );
};

export default Footer;
