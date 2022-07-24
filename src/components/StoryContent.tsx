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
  padding: 70px 1.5rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 30px 1.5rem;
  }
`;

const StoryTitle = styled.h1`
	flex: 1;
  background-color: #333;
  display: inline-block;
  padding: 0.25rem 1rem;
  white-space: pre-wrap;
  line-height: 5.8rem;

	font-size: 4.6rem;
	font-weight: bold;
	
	transition: all 0.3s ease;

	@media (max-width: 768px) {
    line-height: 2.6rem;
		font-size: 1.7rem;
    padding: 0.25rem 0.7rem;
	}
`;

const StoryDescription = styled.p`
  color: #333;
  font-size: 1.25rem;
  white-space: pre-wrap;
  line-height: 1.7rem;
  margin: 3rem 0px;

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
