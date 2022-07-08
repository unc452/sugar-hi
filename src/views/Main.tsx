import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import MainContent from "../components/MainContent";

const Main: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <>
      <Particles
        init={particlesInit}
        options={{
          fpsLimit: 120,
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
      <MainContent />
    </>
  );
};

export default Main;
