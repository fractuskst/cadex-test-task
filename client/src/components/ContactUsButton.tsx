import styled from 'styled-components';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled(Button)`
  width: 180px;
  font-size: 16px;

  @media (max-width: 460px) {
    width: 140px;
  }
`;

const ContactUsButton = () => {
  const navigate = useNavigate();

  return (
    <StyledButton aria-label="Contact us page" onClick={() => navigate('/contact-us')} color="default" variant="solid">
      Contact us
    </StyledButton>
  );
};

export default ContactUsButton;
