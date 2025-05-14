import styled from "styled-components";
import ContactUsButton from "./ContactUsButton";
import { useNavigate } from "react-router-dom";

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
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <CompanyName onClick={() => navigate("/")}>Some Company</CompanyName>
      <ContactUsButton />
    </StyledHeader>
  );
};

export default Header;
