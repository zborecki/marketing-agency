export const onAnimate = (slider: any) => {
  let isActivated: boolean = false;
  let timeout: NodeJS.Timeout;

  const handleNextTimeout = () => {
    clearTimeout(timeout);
    if (isActivated) return;

    timeout = setTimeout(() => {
      slider.next();
    }, 1500);
  };

  slider.on('created', () => {
    slider.container.addEventListener('mouseover', () => {
      isActivated = true;
      clearTimeout(timeout);
    });

    slider.container.addEventListener('mouseout', () => {
      isActivated = false;
      handleNextTimeout();
    });

    handleNextTimeout();
  });

  slider.on('dragStarted', () => clearTimeout(timeout));
  slider.on('animationEnded', handleNextTimeout);
  slider.on('updated', handleNextTimeout);
};
