import { motion, AnimatePresence } from "framer-motion";
import DescriptionIcon from "@mui/icons-material/Description";

import { useState } from "react";
import styles from "./CopyBio.module.css";

function CopyBio({ bioText }) {
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
      <div className={styles.container}>
        <motion.button
          className={styles.aboutBtn}
          whileHover="hover"
          onClick={handleCopy}
        >
          <motion.div
            variants={{
              hover: { scale: 1.2, rotate: -5 },
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <DescriptionIcon fontSize="small" />
          </motion.div>
          Copy Bio
        </motion.button>

        <AnimatePresence>
          {copied && (
            <motion.div
              className={styles.notification}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              Copied :D <br />
              You can now paste it anywhere.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default CopyBio;

{
  /* <button className={styles.aboutBtn} onClick={handleCopy}>
  {copied ? "✅ Copied!" : "📋 Copy Bio"}
</button> */
}
