import styled from "styled-components";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const StyledButton = styled(Button)`
  width: 180px;
  font-size: 16px;
  font-family: "Times New Roman", serif;
`;

const ContactUsButton = () => {
  const navigate = useNavigate();

  return (
    <StyledButton
      onClick={() => navigate("/contactus")}
      color="default"
      variant="solid"
    >
      Contact us
    </StyledButton>
  );
};

export default ContactUsButton;
