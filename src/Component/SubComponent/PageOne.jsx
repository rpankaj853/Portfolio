import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Button } from "primereact/button";

const PageOne = (props) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // eslint-disable-next-line
    console.log(container, init);
  };

  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight * 1,
      behavior: "smooth",
    });
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#252934",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="particle-container absolute top-0 left-0 w-full h-full">
        <Particles id={props.id} init={particlesLoaded} options={options} />
      </div>
      <div>
        <h1 className=" text-white text-4xl font-mono font-semibold w-full text-center">
          Hello, I'm <span className=" text-customPink">Pankaj Rana</span>,
        </h1>
        <p className="text-white text-4xl py-1 font-mono font-semibold">
          I'm a Full Stack Engineer{" "}
        </p>
        <div className="flex justify-center">
          <Button
            className=" text-2xl font-thin border-white mt-3 text-white p-3 rounded-none border-2"
            label={
              <>
                View My Work
                <span className="ml-4">
                  <i
                    className=" pi pi-arrow-right"
                    style={{ color: "white" }}
                  ></i>
                </span>
              </>
            }
            onClick={() => handleScroll()}
            outlined
            onMouseEnter={(e) => {
              e.target.querySelector("i").style.transform = "rotate(90deg)";
            }}
            onMouseLeave={(e) => {
              e.target.querySelector("i").style.transform = "rotate(0deg)";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PageOne;
