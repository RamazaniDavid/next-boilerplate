import React, { useState } from 'react';

export const useRefDimensions = (ref: any) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2 });

  const getDimensions = () => {
    if (ref.current) {
      const { current } = ref;
      const boundingRect = current.getBoundingClientRect();
      const { width, height } = boundingRect;
      setDimensions({ width: Math.round(width), height: Math.round(height) });
    }
  };
  React.useEffect(() => {
    getDimensions();

    window.addEventListener('resize', getDimensions);

    return () => {
      window.removeEventListener('resize', getDimensions);
    };
  }, [ref]);
  return dimensions;
};
