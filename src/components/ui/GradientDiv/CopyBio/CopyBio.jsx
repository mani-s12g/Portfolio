import { useState } from "react";
import styles from "./CopyBio.module.css";

function CopyBio({bioText}) {
//   const bioText = `Passionate about building fast, accessible, & visually striking web applications.`;

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bioText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      {/* <p>{bioText}</p> */}
      <button className={styles.aboutBtn} onClick={handleCopy}>
        {copied ? "✅ Copied!" : "📋 Copy Bio"}
      </button>
    </>
  );
}

export default CopyBio;
