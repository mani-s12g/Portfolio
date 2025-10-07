import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";

import styles from "./ResumeButton.module.css";

function ResumeButton() {
  return (
    <button
      className={styles.aboutBtn}
      onClick={() => window.open("/FinalManiResume.pdf", "_blank")}
    >
      <motion.div
        whileHover={{ y: [0, 6, 0] }} // 👈 down & up effect
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <DownloadIcon fontSize="small" />
      </motion.div>
      View Resume
    </button>
  );
}

export default ResumeButton;
