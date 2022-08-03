import React, {useEffect, useRef} from "react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {animated, useSpring} from "react-spring";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Header from "../components/Header";
import NewsContent from "../components/NewsContent";
import CharacterContainer from "../components/CharacterContent";

import BackgroundImage from "../assets/background.png";
import Character1 from "../assets/character/1.png";
import Character2 from "../assets/character/2.png";
import {IParallax, Parallax, ParallaxLayer} from "@react-spring/parallax";

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
  opacity: 0.7;
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
    line-height: 1.3rem;
    margin: 0.5rem 0px;
	}
`;

const SecondaryStoryTitle = styled(StoryDescription)`
  color: #8D53A1;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  word-break: keep-all;

  line-height: 1.6rem;
  
  padding: 2rem 0px;
`;

const FadeInSubTitle = styled(StoryDescription)`
  padding: 1rem 0px;
  color: #FC9BC9;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  word-break: keep-all;
  line-height: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 2rem;
  }
`;


const Main: React.FC = () => {
  const {t} = useTranslation();
  const parallax = useRef<IParallax>(null!);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = () => {
      return window.innerWidth < 768;
  };
  const [{opacity}, fadeInApi] = useSpring(() => ({opacity: 0}));
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
      const px = (e.clientX / width);
      const py = (e.clientY / height);

      api.start({ x: px, y: py });
    }
  };

  const scrollHandler = () => {
    if(isMobile()) {
      fadeInApi.start({
        opacity: parallax.current.current / parallax.current.space >= 1 ? 1 : 0
      });
    }
    else {
      fadeInApi.start({
        opacity: parallax.current.current / parallax.current.space >= 1.05 ? 1 : 0
      });
    }
  };

  return (
    <Parallax ref={parallax} pages={3.5} onScrollCapture={() => {
      scrollHandler();
    }}>
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
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'max(105vw, 105vh) max(105vw, 105vh)',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Content
          ref={containerRef}
          onMouseMove={handleMouseMove}
          style={{
            height: '100vh',
          }}
        >
          <Header parallax={parallax} isMobile={isMobile()}/>
          <ParallaxLayer offset={0.1} speed={-0.2}
            style={{
              display: 'block',
              minHeight: '800px',
            }}
          >
          <animated.div
            style={{
              display: 'flex',
              position: 'relative',
              zIndex: 2,

              justifyContent: 'center',

              rotateX: y.interpolate({
                range: [0, 1],
                output: [-7, 0]
              }),
              rotateY: x.interpolate({
                range: [0, 1],
                output: [10, 0]
              }),
              translateX: x.interpolate({
                range: [0, 1],
                output: [-5, 5]
              }),
              translateY: y.interpolate({
                range: [0, 1],
                output: [-5, 5]
              }),
            }}
          >
            <Char1 src={Character1} alt="character1" />
            <Char2 src={Character2} alt="character2" />
          </animated.div>
          </ParallaxLayer>
        </Content>

        <ParallaxLayer factor={1.7} offset={0.99} speed={0.5} style={{
          zIndex: 2,
        }}>
          <animated.div id="story"
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              background: '#efefef',
              justifyContent: 'space-around',
              height: isMobile() ? `${(768 / (window.innerWidth)) * 30}em` : `130vh`,
            }}
          >
            <Content>
              <StoryTitle>{t("story.title")}</StoryTitle>
              <StoryDescription>{t("story.description")}</StoryDescription>
              <SecondaryStoryTitle>{t("story.secondary_title")}</SecondaryStoryTitle>
            </Content>
            <animated.div
              style={{opacity, flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <FadeInSubTitle>{t("story.fadein_subtitle")}</FadeInSubTitle>
            </animated.div>
          </animated.div>
        </ParallaxLayer>

        <ParallaxLayer factor={isMobile() ? 2 : 1} offset={isMobile() ? 1.64 : 1.52} speed={0} style={{
          zIndex: 1
        }}>
          <MemberSection id="member">
              <CharacterContainer characterImg={Character1} name={t('member.character1.name')}/>
          </MemberSection>
        </ParallaxLayer>

        {/*<ParallaxLayer factor={isMobile() ? 2 : 1} offset={isMobile() ? 1.5 : 1.7} speed={0.5}>*/}
        {/*  <MemberSection id="member">*/}
        {/*    <CharacterContainer characterImg={Character2} name={t('member.character2.name')}/>*/}
        {/*  </MemberSection>*/}
        {/*</ParallaxLayer>*/}

      <ParallaxLayer offset={3} speed={-0.005}>
        <NewsContent />
      </ParallaxLayer>
      </animated.div>
    </Parallax>
  );
};

export default Main;
