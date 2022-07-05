import React from "react";
import {Scrollbar} from "smooth-scrollbar-react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";

import Header from "../components/Header";

import BackgroundImage from "../assets/background.png";
import Character1 from "../assets/character/1.png";
import Character2 from "../assets/character/2.png";

const Container = styled.div`
  display: block;
  background-color: #dfdfdf;

  background-image: url(${BackgroundImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
`;

const Content = styled.div`
  margin: auto;
  max-width: 768px;
  padding: 0px 1.5rem;
`;

const MainSection = styled.div`
  display: flex;

  height: 90vh;

  justify-content: center;
`;

const SecondSection = styled.div`
  display: flex;
  height: 100vh;

  background: #efefef;
`;

const Char1 = styled.img`
  top: 100px;
  margin: 0px 0px 0px -50px;
  position: absolute;

  transition: all 0.3s ease-out;
  
  width: 750px;

  @media (max-width: 768px) {
    top: 100px;
    margin: 0px 0px 0px -10vw;
    width: 500px;
  }
`;

const Char2 = styled.img`
  top: 320px;
  margin: 0px 0px 0px 230px;
  position: absolute;
  overflow: hidden;
  object-fit: cover;

  transition: all 0.3s ease-out;
  
  width: 550px;

  @media (max-width: 768px) {
    top: 250px;
    margin: 0px 0px 0px 40vw;
    width: 380px;
  }
`;

const Main: React.FC = () => {
  const {t} = useTranslation();
  return (
    <Scrollbar>
      <Container>
        <Content>
          <Header />
          <MainSection>
            <Char1 src={Character1} alt="character1" />
            <Char2 src={Character2} alt="character2" />
          </MainSection>
        </Content>
        <SecondSection>
          <Content>
            
          </Content>
        </SecondSection>
      </Container>
    </Scrollbar>
  );
};

export default Main;
