import styled from 'styled-components';
import ContactUsButton from '../../../components/ContactUsButton';

const StyledSection = styled.div`
  height: 275px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e6e6e6;
`;

const StyledTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 40px;
`;

const LastSection = () => {
  return (
    <StyledSection>
      <StyledTitle>Less important title</StyledTitle>
      <ContactUsButton />
    </StyledSection>
  );
};

export default LastSection;
