import React from "react";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

import MainContent from "../components/MainContent";

const Main: React.FC = () => {
  const particlesInit = async (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <>
      <Particles
        init={particlesInit}
        style={{
          zIndex: 1,
        }}
        options={{
          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true
              }
            },
            color: {
              value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
            },
            size: {
              value: 10,
              random: true
            },
            move: {
              enable: true,
              direction: "bottom",
              out_mode: "out",
              speed: 2
            },
            line_linked: {
              enable: false
            },
            opacity: {
              value: 0.7,
              anim: {
                enable: true,
                speed: 0.8,
                opacity_min: 0.1,
                sync: false
              },
            }
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
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
      <MainContent />
    </>
  );
};

export default Main;
