import React, { useEffect, useRef } from "react";
import styles from "./CursorBall.module.css";

function CursorBall() {
  const outerBallRef = useRef();
  const innerBallRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 }); // lag position for outer ball
  const rafId = useRef(null);

  useEffect(() => {
    const outerBall = outerBallRef.current;
    const innerBall = innerBallRef.current;
    if (!outerBall || !innerBall) return;

    // update loop (~60fps)
    const update = () => {
      const { x, y } = mousePos.current;

      // Inner ball follows cursor directly
      innerBall.style.left = `${x}px`;
      innerBall.style.top = `${y}px`;

      // Outer ball lags (lerp)
      outerPos.current.x += (x - outerPos.current.x) * 0.1; // 0.1 = smoothing factor
      outerPos.current.y += (y - outerPos.current.y) * 0.1;
      outerBall.style.left = `${outerPos.current.x}px`;
      outerBall.style.top = `${outerPos.current.y}px`;

      rafId.current = requestAnimationFrame(update);
    };

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    // Grow only the outer ball
    const handleEnter = () => outerBall.classList.add(styles.big);
    const handleLeave = () => outerBall.classList.remove(styles.big);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const growElements = document.querySelectorAll(".cursor-grow");
    growElements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter, { passive: true });
      el.addEventListener("mouseleave", handleLeave, { passive: true });
    });

    rafId.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      growElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div ref={outerBallRef} className={styles.cursorBall}></div>
      <div ref={innerBallRef} className={styles.innerCursorBall}></div>
    </>
  );
}

export default CursorBall;