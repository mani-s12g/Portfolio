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


// import React, { useEffect, useRef } from "react";
// import styles from "./CursorBall.module.css";

// function CursorBall() {
//   const ballRef = useRef();
//   const innerBallRef = useRef();
//   const mousePos = useRef({ x: 0, y: 0 });
//   const rafId = useRef(null);

//   useEffect(() => {
//     const ball = ballRef.current;
//     const innerball = innerBallRef.current;
//     if (!ball && !innerball) return;

//     // update loop (runs ~60fps max)
//     const update = () => {
//       ball.style.left = `${mousePos.current.x}px`;
//       ball.style.top = `${mousePos.current.y}px`;
//       innerball.style.left = `${mousePos.current.x}px`;
//       innerball.style.top = `${mousePos.current.y}px`;
//       rafId.current = requestAnimationFrame(update);
//     };

//     const handleMouseMove = (e) => {
//       mousePos.current.x = e.clientX;
//       mousePos.current.y = e.clientY;
//     };

//     // grow/shrink handlers
//     const handleEnter = () => ball.classList.add(styles.big);
//     const handleLeave = () => ball.classList.remove(styles.big);

//     // attach events
//     window.addEventListener("mousemove", handleMouseMove, { passive: true });

//     const growElements = document.querySelectorAll(".cursor-grow");
//     growElements.forEach((el) => {
//       el.addEventListener("mouseenter", handleEnter, { passive: true });
//       el.addEventListener("mouseleave", handleLeave, { passive: true });
//     });

//     rafId.current = requestAnimationFrame(update);

//     // cleanup
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       growElements.forEach((el) => {
//         el.removeEventListener("mouseenter", handleEnter);
//         el.removeEventListener("mouseleave", handleLeave);
//       });
//       cancelAnimationFrame(rafId.current);
//     };
//   }, []);

//   return (
//     <>
//       <div ref={innerBallRef} className={styles.innerCursorBall}></div>
//       <div ref={ballRef} className={styles.cursorBall}></div>
//     </>
//   );
// }

// export default CursorBall;

// import React, { useEffect, useRef } from "react";
// import styles from "./CursorBall.module.css";

// function CursorBall({ navRef }) {
//   const ballRef = useRef();

//   useEffect(() => {
//     const ball = ballRef.current;

//     // Follow mouse
//     const handleMouseMove = (e) => {
//       if (ball) {
//         ball.style.left = `${e.clientX}px`;
//         ball.style.top = `${e.clientY}px`;
//       }
//     };

//     // Elements that should trigger the cursor grow
//     const globalTextElements = document.querySelectorAll(
//       "a, p, h1, h2, h3, h4, h5, h6, button, strong, em"
//     );

//     // Function to handle hover
//     const handleEnter = (e) => {
//       const linkRect = e.target.getBoundingClientRect();

//       // If inside element's bounding box
//       if (
//         e.clientX >= linkRect.left &&
//         e.clientX <= linkRect.right &&
//         e.clientY >= linkRect.top &&
//         e.clientY <= linkRect.bottom
//       ) {
//         ball?.classList.add(styles.big);
//       }
//     };

//     const handleLeave = () => {
//       ball?.classList.remove(styles.big);
//     };

//     // Attach events globally
//     globalTextElements.forEach((el) => {
//       el.addEventListener("mouseenter", handleEnter);
//       el.addEventListener("mouseleave", handleLeave);
//     });

//     // If navRef exists, also attach to nav children
//     if (navRef?.current) {
//       const navElements = navRef.current.querySelectorAll("a, button, span, li");
//       navElements.forEach((el) => {
//         el.addEventListener("mouseenter", handleEnter);
//         el.addEventListener("mouseleave", handleLeave);
//       });
//     }

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);

//       globalTextElements.forEach((el) => {
//         el.removeEventListener("mouseenter", handleEnter);
//         el.removeEventListener("mouseleave", handleLeave);
//       });

//       if (navRef?.current) {
//         const navElements = navRef.current.querySelectorAll("a, button, span, li");
//         navElements.forEach((el) => {
//           el.removeEventListener("mouseenter", handleEnter);
//           el.removeEventListener("mouseleave", handleLeave);
//         });
//       }
//     };
//   }, [navRef]);

//   return <div ref={ballRef} className={styles.cursorBall}></div>;
// }

// export default CursorBall;

// import React, { useEffect, useRef } from "react";
// import styles from "./CursorBall.module.css";

// function CursorBall() {
//   const innerBallRef = useRef();
//   const outerBallRef = useRef();
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (innerBallRef.current) {
//         innerBallRef.current.style.left = `${e.clientX}px`;
//         innerBallRef.current.style.top = `${e.clientY}px`;

//         outerBallRef.current.style.left = `${e.clientX}px`;
//         outerBallRef.current.style.top = `${e.clientY}px`;
//       }
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove"), handleMouseMove;
//   }, []);

//   return (
//     <>
//       <div ref={innerBallRef} className={styles.innerCursorBall}></div>
//       <div ref={outerBallRef} className={styles.outerCursorBall}></div>
//     </>
//   );
// }

// export default CursorBall;
