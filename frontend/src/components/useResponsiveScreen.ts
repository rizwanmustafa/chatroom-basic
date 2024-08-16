import { useState, useEffect } from 'react';

const smallScreenSize = 600;
const mediumScreenSize = 900;

export type ScreenSize = "small" | "medium" | "large";

export type ScreenBreakpoints = {
  small: number;
  medium: number;
};

const useResponsiveValue = (breakpoints: ScreenBreakpoints = { small: smallScreenSize, medium: mediumScreenSize }) => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize());

  function getScreenSize(): ScreenSize {
    const width = window.innerWidth;
    if (width < breakpoints.small)
      return 'small';
    else if (width < breakpoints.medium)
      return 'medium';
    else
      return 'large';
  }

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize());

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoints]);

  return screenSize;
};

export default useResponsiveValue;
