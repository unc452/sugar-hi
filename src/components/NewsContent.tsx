import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {TwitterTimelineEmbed} from 'react-twitter-embed';

const SecondSection = styled.div`
  position: relative;
  display: flex;
  text-align: center;

  background: #efefef;
  z-index: 6;
`;

const Content = styled.div`
  margin: auto;
  max-width: 768px;
  padding: 0px 1.5rem;
  overflow: hidden;
  align-items: center;
`;

const NewsTitle = styled.h1`
  background-color: #333;
  display: inline-block;
  padding: 0.25rem 0.5rem;
`;

type NewsProps = {
  isMobile: boolean;
}

const NewsContent: React.FC<NewsProps> = ({isMobile}) => {
	const { t } = useTranslation();
	
    return (
        <SecondSection id="news">
            <Content>
							<NewsTitle>{t('news.title')}</NewsTitle>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="SGH__Official"
                autoHeight={false}
                noHeader={false}
                noFooter={true}
                lang={'ko'}
                options={{height: isMobile ? '73vh' : '58vh', width: 768}}
              />
            </Content>
        </SecondSection>
    );
};

export default NewsContent;