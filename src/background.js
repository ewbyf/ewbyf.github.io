const options = {
    background: {
      color: "#000",
    },
    fullScreen: {
      enable: true,
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: true,
            force: 100,
            smooth: 10,
          },
        },
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          opacity: 1,
          size: 6,
        },
      },
    },
    particles: {
      links: {
        enable: true,
        opacity: 0.5,
        distance: 100,
      },
      number: {
        density: {
          enable: true,
        },
        value: 60,
      },
      move: {
        enable: true,
        speed: 2,
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 3,
      },
      color: {
        value: "#fff",
      },
    },
    retina_detect: true,
  };

  tsParticles.load("tsparticles", options);