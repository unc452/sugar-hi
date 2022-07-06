import React, { useRef, useState } from "react";
import { Scrollbar } from "smooth-scrollbar-react";
import { useTranslation } from "react-i18next";
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

type CharacterProps = {
  mask: {
    x: number;
    y: number;
  };
};

const MainSection = styled.div`
  display: flex;
  position: relative;
  z-index: 1;

  height: 100vh;
  min-height: 800px;
  max-height: 1100px;

  justify-content: center;

  @media (max-width: 768px) {
    min-height: 660px;
    max-height: 850px;
    height: 90vh;
  }
`;

const SecondSection = styled.div`
  position: relative;
  display: flex;
  height: 100vh;

  background: #efefef;
  z-index: 3;
`;

const Char1 = styled.img<CharacterProps>`
  top: 20px;
  margin: 0px 0px 0px -50px;
  position: absolute;
  display: flex;
  
  transition: all 0.3s ease-out;
  
  width: 750px;

  @media (max-width: 768px) {
    top: 20px;
    margin: 0px 0px 0px -10vw;
    width: 500px;
  }

`;

const Char2 = styled.img<CharacterProps>`
  top: 240px;
  margin: 0px 0px 0px 230px;
  position: absolute;

  transform: ${({ mask }) => `translate(${mask.x}px, ${mask.y}px)`};

  transition: all 0.3s ease-out;
  
  width: 550px;

  @media (max-width: 768px) {
    top: 170px;
    margin: 0px 0px 0px 35vw;
    width: 380px;
  }
`;

const Main: React.FC = () => {
  const { t } = useTranslation();

  const containerRef = useRef<HTMLDivElement>(null);
  const [mask, setMask] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

  const _onMouseMove = (e: { nativeEvent: { offsetX: number; offsetY: number; }; }) => {
    const width = containerRef.current?.clientWidth;
    const height = containerRef.current?.clientHeight;

    if (width && height) {
      const x = -(e.nativeEvent.offsetX / width * 10 - 20);
      const y = -(e.nativeEvent.offsetY / height * 10 - 20);

      setMask({ x, y });
    }
  }

  return (
    <Container onMouseMove={_onMouseMove} ref={containerRef}>
      <Content >
        <Header />
        <MainSection>
          <Char1 src={Character1} alt="character1" mask={mask} />
          <Char2 src={Character2} alt="character2" mask={mask} />
        </MainSection>
      </Content>
      <SecondSection>
        <Content>

        </Content>
      </SecondSection>
    </Container>
  );
};

export default Main;
