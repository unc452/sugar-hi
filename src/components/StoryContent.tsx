import React from "react";
import { useTranslation } from "react-i18next";
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
    background-color: #333;
    display: inline-block;
		padding: 0.25rem 0.5rem;
`;

const StoryDescription = styled.p`
		color: #333;
		font-size: 1.25rem;
`;

const StoryContent: React.FC = () => {
	const { t } = useTranslation();

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
