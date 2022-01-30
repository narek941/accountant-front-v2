import React from 'react';
import Particles from 'react-tsparticles';

const CanvasContainer = () => (
  <Particles
    id="tsparticles"
    options={{
      background: {
        color: {
          value: '#fbfafa',
        },
      },
      fpsLimit: 30,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 140,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#243b98',
        },
        links: {
          color: '#243b98',
          distance: 300,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'destroy',
          random: true,
          speed: 0.6,
          straight: true,
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 50,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          random: true,
          value: 25,
        },
      },
      detectRetina: true,
    }}
  />
);

export default CanvasContainer;
