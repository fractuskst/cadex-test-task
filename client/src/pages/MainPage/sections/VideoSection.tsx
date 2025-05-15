import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 35px 35px 0 50px;
  min-height: 350px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledArticle = styled.article`
  max-width: 365px;
`;

const StyledTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 560px) {
    font-size: 34px;
  }
`;

const Video = styled.div`
  width: 100%;
  max-width: 450px;
  aspect-ratio: 16/9;

  @media (max-width: 900px) {
    margin: 40px 0;
  }
`;

const VideoSection = () => {
  return (
    <>
      <StyledSection>
        <StyledArticle>
          <StyledTitle>Most important title on the page</StyledTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna
            convallis metus, vel suscipit nibh lacus tincidunt ante
          </p>
        </StyledArticle>
        <Video>
          <LiteYouTubeEmbed title="Rick Astley - Never Gonna Give You Up" id="dQw4w9WgXcQ" />
        </Video>
      </StyledSection>
    </>
  );
};

export default VideoSection;
