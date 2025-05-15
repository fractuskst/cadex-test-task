import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border-top: 2px solid #e6e6e6;
  position: sticky;
  bottom: 0;
  margin-top: auto;
  background-color: #fff;
  z-index: 100;
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
