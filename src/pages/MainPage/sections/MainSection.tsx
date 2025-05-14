import styled from "styled-components";
import ContactUsButton from "../../../components/ContactUsButton";
import { Col, Row } from "antd";

const article = {
  title: "Title",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
};

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

const StyledMainTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 100px;
`;

const StyledGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 70px;
`;

const ArticleCard = styled.div`
  max-width: 300px;
  font-family: "Times New Roman", serif;

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
        <Row gutter={[50, 100]} justify="center">
          {[...Array(6)].map((_, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
              <ArticleCard>
                <h3>{article.title}</h3>
                <p>{article.text}</p>
              </ArticleCard>
            </Col>
          ))}
        </Row>
      </StyledGrid>
      <ContactUsButton />
    </StyledSection>
  );
};

export default MainSection;
