import { useEffect, useState } from 'react';

export type WindowSettings = {
  size: { width: number; height: number };
  orientation: 'portrait' | 'landscape';
};

function getWindowSettings(): WindowSettings {
  const { innerWidth: width, innerHeight: height } = window;

  const { matches } = window.matchMedia('(orientation: portrait)');

  return {
    size: { width, height },
    orientation: matches ? 'portrait' : 'landscape',
  };
}

export default function useWindowSettings(): WindowSettings {
  const [windowSettings, setWindowSettings] = useState(getWindowSettings());

  useEffect(() => {
    function handleResize() {
      setWindowSettings(getWindowSettings());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSettings;
}
