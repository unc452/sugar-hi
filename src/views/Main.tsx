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
          emitters: {
            direction: "top",
            life: {
              count: 0,
              duration: 0.08,
              delay: 0.1
            },
            rate: {
              delay: 1,
              quantity: 1
            },
            size: {
              width: 100,
              height: 0
            },
            position: {
              y: 100,
              x: 50
            }
          },
          particles: {
            number: {
              value: 10
            },
            "shadow": {
              blur: 2,
              color: {
                value: ["#FFFFFFAA", "#0000002A"]
              },
              enable: true
              
            },
            line_linked: {
              shadow: {
                enable: true,
                color: "#000",
                blur: 5
              }
            },
            color: {
              value: ["#1A3A4F", "#519FAB", "#8A92A5", "#FFE3A4", "#F5A67F", "#FF6F6E"]
            },
            size: {
              value: 80,
              random: true,
              anim: {
                enable: true,
                speed: 0,
                size_min: 1,
                sync: false
              }
            },
            move: {
              enable: true,
              straight: false,
              direction: "top",
              outModes: {
                default: "destroy",
                top: "none"
              },
              speed: {
                min: 0.5,
                max: 1.5,
              }
            },
            opacity: {
              value: 0.6,
              anim: {
                enable: true,
                speed: 0.1,
                opacity_min: 0.3,
                sync: false
              },
            }
          },
          
        }}
      />
      <MainContent />
    </>
  );
};

export default Main;
