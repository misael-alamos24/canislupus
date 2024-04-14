import React, { useState, useEffect, useRef } from 'react';
// import './styles.css';

const Resize = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(300); // Ancho inicial del div
  const divRef = useRef(null);

  useEffect(() => {
    const handleResize = (e) => {
      if (isResizing && divRef.current) { // Verificar que divRef.current no sea nulo
        setWidth(e.pageX - divRef.current.offsetLeft);
      }
    };

    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', () => setIsResizing(false));

    return () => {
      document.removeEventListener('mousemove', handleResize);
    };
  }, [isResizing]);

  const startResize = () => {
    setIsResizing(true);
  };

  return (
    <div className="resizable" ref={divRef} style={{ width: `${width}px` }}>
      Contenido expandible
      <div className="handle" onMouseDown={startResize}></div>
    </div>
  );
};

export default Resize;
