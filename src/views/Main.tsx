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

const Char1 = styled.img`
  top: 20px;
  margin: 0px 0px 0px -40px;
  position: absolute;
  display: flex;

  width: 750px;

  @media (max-width: 768px) {
    top: 20px;
    margin: 0px 0px 0px -10vw;
    width: 500px;
  }

`;

const Char2 = styled.img`
  top: 240px;
  margin: 0px 0px 0px 290px;
  position: absolute;
  display: flex;
  
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

  const _onMouseMove = (e: any) => {
    const width = containerRef.current?.clientWidth;
    const height = containerRef.current?.clientHeight;

    if (width && height) {
      const x = -(e.screenX / width * 20 - 10);
      const y = -(e.screenY / height * 20 - 10);

      setMask({ x, y });
    }
  }

  window.addEventListener('mousemove', _onMouseMove);

  return (
    <Container ref={containerRef}>
      <Content>
        <Header />
        <MainSection style={{
          transform: `translate(${mask.x}px, ${mask.y}px)`,
        }}>
          <Char1 src={Character1} alt="character1" />
          <Char2 src={Character2} alt="character2" />
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
