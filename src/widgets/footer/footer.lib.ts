import { useState, useEffect } from 'react';

export const useSmallScreen = () => {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)');
    setSmallScreen(mql.matches);

    function isSmallScreen() {
      setSmallScreen(mql.matches);
    }

    mql.addEventListener('change', isSmallScreen);
    return () => mql.removeEventListener('change', isSmallScreen);
  }, []);

  return smallScreen;
};
