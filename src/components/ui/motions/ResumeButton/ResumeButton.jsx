import { motion } from "framer-motion";
import DescriptionIcon from "@mui/icons-material/Description";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
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
    // <motion.button
    //   className={styles.aboutBtn}
    //   onClick={() => window.open("/FinalManiResume.pdf", "_blank")}
    //   whileHover="hover"
    //   whileTap={{ scale: 0.95 }} // click down effect
    // >
    //   <motion.div
    //     variants={{
    //       hover: { y: -3, rotate: -3 },  // icon moves up slightly + rotate
    //     }}
    //     transition={{ type: "spring", stiffness: 300 }}
    //     className={styles.iconWrapper}
    //   >
    //     <DownloadIcon fontSize="small" />
    //   </motion.div>
    //   <span className={styles.buttonText}>Download Resume</span>
    // </motion.button>
    // <motion.button
    //   className={styles.aboutBtn}
    //   onClick={() => window.open("/FinalManiResume.pdf", "_blank")}
    //   whileHover={{ scale: 1.05 }}
    //   whileTap={{ scale: 0.95 }}
    //   style={{ display: "flex", alignItems: "center", gap: "8px" }}
    // >
    //   <motion.div
    //     whileHover={{ y: [0, 4, 0] }} // 👇 small bounce effect
    //     transition={{ duration: 0.6, repeat: Infinity }}
    //   >
    //     <DownloadIcon fontSize="small" />
    //   </motion.div>
    //   Download Resume
    // </motion.button>
    //     <motion.div
    //   whileHover={{ y: 6 }} // arrow moves down on hover
    //   transition={{ type: "spring", stiffness: 300 }}
    // >
    //   <DownloadIcon fontSize="small" />
    //   View Resume
    // </motion.div>

    // <motion.button
    //   className={styles.aboutBtn}
    //   onClick={() => window.open("/FinalManiResume.pdf", "_blank")}
    //   whileHover="hover"
    // >
    //   <motion.div
    //     variants={{
    //       hover: { scale: 1.2, rotate: -5 },
    //     }}
    //     transition={{ type: "spring", stiffness: 300 }}
    //   >
    //     <SystemUpdateAltIcon fontSize="small" />
    //   </motion.div>
    //   View Resume
    // </motion.button>
  );
}

export default ResumeButton;
