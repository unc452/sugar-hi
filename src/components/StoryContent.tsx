import React from "react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";

const SecondSection = styled.div`
  position: relative;
  display: flex;

  background: #efefef;
  z-index: 3;
`;

const Content = styled.div`
  margin: auto;
  max-width: 768px;
  padding: 0px 1.5rem;
  overflow: hidden;
`;

const StoryTitle = styled.h1`
	flex: 1;
  background-color: #333;
  display: inline-block;
  padding: 0.25rem 0.5rem;

	font-size: 1.7rem;
	font-weight: bold;
	
	transition: all 0.3s ease;

	@media (max-width: 768px) {
		font-size: 1.4rem;
	}
`;

const StoryDescription = styled.p`
  color: #333;
  font-size: 1.25rem;
  white-space: pre-wrap;
	padding: 0px 0px 0px 7vw;

	transition: all 0.3s ease;

	@media (max-width: 768px) {
		padding: 0px;
		font-size: 1rem;
	}
`;

const StoryContent: React.FC = () => {
  const {t} = useTranslation();

  return (
    <SecondSection id="story">
      <Content>
        <StoryTitle>{t("story.title")}</StoryTitle>
        <StoryDescription>{t("story.description")}</StoryDescription>
      </Content>
    </SecondSection>
  );
};

export default StoryContent;
