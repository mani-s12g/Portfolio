// SpotlightCursor.jsx
import React, { useEffect, useRef } from 'react';
import styles from'./CustomCursor.module.css';

export default function CustomCursor() {
  const spot = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (spot.current) {
        spot.current.style.left = `${e.clientX}px`;
        spot.current.style.top = `${e.clientY}px`;
      }
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return <div className={styles.spotlight} ref={spot}></div>;
}
