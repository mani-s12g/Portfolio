import React from "react";
// import styles from "./EmphasisText.module.css";

function EmphasisText({ children, color = "var(--colors-cyan)" }) {
  return <span style={{ color, fontWeight: 500 }}>{children}</span>;
}

export default EmphasisText;
