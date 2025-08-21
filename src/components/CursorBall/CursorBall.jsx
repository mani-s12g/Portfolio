import React, { useEffect, useRef } from "react";
import styles from "./CursorBall.module.css";

function CursorBall() {
  const ballRef = useRef();
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (ballRef.current) {
        ballRef.current.style.left = `${e.clientX - 25}px`;
        ballRef.current.style.top = `${e.clientY - 25}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove"), handleMouseMove;
  }, []);

  return <div ref={ballRef} className={styles.cursorBall}></div>;
}

export default CursorBall;


// import React, { useEffect, useRef, useState } from "react";
// import styles from "./CursorBall.module.css";

// function CursorBall() {
//   const [sparks, setSparks] = useState([]);
//   const sparkTimeouts = useRef([]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       // Create several sparks per move for a richer effect
//       const newSparks = Array.from({ length: 3 }).map(() => {
//         const angle = Math.random() * 2 * Math.PI;
//         const radius = Math.random() * 30 + 10; // distance from cursor
//         const size = Math.random() * 8 + 4; // 4px to 12px
//         return {
//           x: e.clientX - size / 2 + Math.cos(angle) * radius,
//           y: e.clientY - size / 2 + Math.sin(angle) * radius,
//           size,
//           id: Date.now() + Math.random(),
//         };
//       });
//       setSparks((prev) => [...prev, ...newSparks]);
//       // Remove sparks after 350ms
//       newSparks.forEach((spark) => {
//         const timeout = setTimeout(() => {
//           setSparks((prev) => prev.filter((s) => s.id !== spark.id));
//         }, 350);
//         sparkTimeouts.current.push(timeout);
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       sparkTimeouts.current.forEach(clearTimeout);
//     };
//   }, []);

//   return (
//     <>
//       {sparks.map((spark) => (
//         <div
//           key={spark.id}
//           className={styles.spark}
//           style={{
//             left: spark.x,
//             top: spark.y,
//             width: spark.size,
//             height: spark.size,
//             opacity: 0.7,
//           }}
//         />
//       ))}
//       <div className={styles.cursorBall}></div>
//     </>
//   );
// }

// export default CursorBall;