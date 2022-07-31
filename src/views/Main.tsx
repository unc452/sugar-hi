import React, {useEffect, useRef} from "react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {animated, useSpring} from "react-spring";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Header from "../components/Header";
import StoryContent from "../components/StoryContent";
import NewsContent from "../components/NewsContent";
import CharacterContainer from "../components/CharacterContent";

import BackgroundImage from "../assets/background.png";
import Character1 from "../assets/character/1.png";
import Character2 from "../assets/character/2.png";

const Content = styled.div`
  margin: auto;
  max-width: 768px;
  padding: 0px 1.5rem;
  overflow: hidden;
`;

const MainSection = styled.div`
  display: flex;
  position: relative;
  z-index: 2;

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
  top: calc(-30px + 5vh);
  margin: 0px 0px 0px -80px;
  position: absolute;
  display: flex;

	width: 70vw;
  max-width: 750px;

  @media (max-width: 768px) {
    top: 20px;
    margin: 0px 0px 0px calc(1.5em - 10vw);
    width: 500px;
  }
`;

const Char2 = styled.img`
  top: calc(210px + 5vh);
  margin: 0px 0px 0px calc(220px + 5vw);
  position: absolute;
  display: flex;

	width: 50vw;
  max-width: 550px;

  @media (max-width: 768px) {
    top: 170px;
    margin: 0px 0px 0px calc(8em + 14vw);
    width: 380px;
  }
`;

const MemberSection = styled(SecondSection)`
  display: flex;
  flex-direction: column;
`;


const Main: React.FC = () => {
  const {t} = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [{ x, y }, api] = useSpring(
    () => ({
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  )

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  const handleMouseMove = (e: any) => {
    const width = containerRef.current?.clientWidth;
    const height = containerRef.current?.clientHeight;

    if (width && height) {
      const px = (e.clientX / width) * 2 - 1;
      const py = (e.clientY / height) * 2 - 1;

      api.start({ x: px, y: py });
    }
  };

  return (
    <>
      <Particles
        init={particlesInit}
        options={{
          detectRetina: true,
          particles: {
            number: {
              value: 25,
              density: {
                enable: true
              }
            },
            color: {
              value: ["#1A3A4F", "#519FAB", "#8A92A5", "#FFE3A4", "#F5A67F", "#FF6F6E"]
            },
            size: {
              value: 70,
              random: true,
            },
            move: {
              enable: true,
              direction: "top",
              out_mode: "out",
              speed: {
                min: 0.5,
                max: 1.5,
              }
            },
            line_linked: {
              enable: false
            },
            opacity: {
              value: 0.8,
              anim: {
                enable: true,
                speed: 0.1,
                opacity_min: 0.4,
                sync: false
              },
            }
          },
          interactivity: {
            events: {
              onclick: {
                enable: false,
                mode: "repulse"
              }
            },
            modes: {
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          }
        }}
      />
      <animated.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        style={{
          display: 'block',

          backgroundImage: `${BackgroundImage}`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'max(105vw, 105vh) max(105vw, 105vh)',
          backgroundAttachment: 'fixed'
        }}
      >
        <Content>
          <Header />
          <animated.div
            style={{
              display: 'flex',
              position: 'relative',
              zIndex: 2,

              height: '100vh',
              minHeight: '800px',
              maxHeight: '1100px',

              justifyContent: 'center',

              rotateX: y.interpolate({
                range: [0, 1],
                output: [0, -15]
              }),
              rotateY: x.interpolate({
                range: [0, 1],
                output: [0, 15]
              })
            }}
          >
            <Char1 src={Character1} alt="character1" />
            <Char2 src={Character2} alt="character2" />
          </animated.div>
        </Content>

        <StoryContent />
        <MemberSection id="member">
          <CharacterContainer characterImg={Character1} name={t('member.character1.name')}/>
          <CharacterContainer characterImg={Character2} name={t('member.character2.name')}/>
        </MemberSection>
        <NewsContent />
      </animated.div>
    </>
  );
};

export default Main;
