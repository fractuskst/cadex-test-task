import styled from 'styled-components';
import ContactUsButton from '../../../components/ContactUsButton';
import { Col, Row } from 'antd';

const article = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 25px;
  background-color: #fff;
`;

const StyledMainTitle = styled.h2`
  font-size: 48px;
  margin-bottom: 100px;
  text-align: center;

  @media (max-width: 560px) {
    font-size: 34px;
    margin-bottom: 50px;
  }
`;

const StyledGrid = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-bottom: 70px;
`;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const StyledArticle = styled.article`
  max-width: 280px;

  & > h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  & > p {
    font-size: 16px;
    color: #8e8e8e;
  }
`;

const MainSection = () => {
  return (
    <StyledSection>
      <StyledMainTitle>Also very important title</StyledMainTitle>
      <StyledGrid>
        <Row gutter={[20, 100]} justify="center">
          {[...Array(6)].map((_, index) => (
            <StyledCol key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
              <StyledArticle>
                <h3>{article.title}</h3>
                <p>{article.text}</p>
              </StyledArticle>
            </StyledCol>
          ))}
        </Row>
      </StyledGrid>
      <ContactUsButton />
    </StyledSection>
  );
};

export default MainSection;
