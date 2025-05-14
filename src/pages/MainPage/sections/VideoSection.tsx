import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import styled from "styled-components";

const StyledSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 35px 35px 0 50px;
  height: 350px;
  background-color: #f6f6f6;
`;

const Text = styled.div`
  width: 365px;
`;

const StyledTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Video = styled.div`
  width: 100%;
  max-width: 450px;
  aspect-ratio: 16/9;
`;

const VideoSection = () => {
  return (
    <>
      <StyledSection>
        <Text>
          <StyledTitle>Most important title on the page</StyledTitle>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum ultricies, sem urna convallis metus, vel
            suscipit nibh lacus tincidunt ante
          </span>
        </Text>
        <Video>
          <LiteYouTubeEmbed
            title="Демонстрация"
            id="dQw4w9WgXcQ"
            wrapperClass="yt-lite"
          />
        </Video>
      </StyledSection>
    </>
  );
};

export default VideoSection;
