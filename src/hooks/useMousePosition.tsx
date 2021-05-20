import React, {useState, useEffect} from 'react';

function useMousePosition() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMouse = (e: MouseEvent): void => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    document.addEventListener('mousemove', updateMouse);

    return () => {
      document.removeEventListener('mousemove', updateMouse);
    };
  }, []);
  return position;
}

export default useMousePosition;
