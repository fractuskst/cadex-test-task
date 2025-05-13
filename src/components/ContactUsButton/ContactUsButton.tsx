import styled from 'styled-components';
import { Button } from 'antd';

const StyledButton = styled(Button)`
  width: 180px;
  font-size: 18px;
  font-family: 'Times New Roman', serif;
`;

const ContactUsButton = () => {
  return (
    <StyledButton color="default" variant="solid">
      Contact us
    </StyledButton>
  );
};

export default ContactUsButton;
