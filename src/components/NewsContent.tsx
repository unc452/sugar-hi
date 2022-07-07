import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

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

const NewsTitle = styled.h1`
    background-color: #333;
    display: inline-block;
		padding: 0.25rem 0.5rem;
`;

const NewsContent: React.FC = () => {
	const { t } = useTranslation();
	
    return (
        <SecondSection id="news">
            <Content>
							<NewsTitle>{t('news.title')}</NewsTitle>
            </Content>
        </SecondSection>
    );
};

export default NewsContent;