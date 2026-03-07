import { motion } from "framer-motion";

const DownloadButton = () => {
  return (
    <motion.a
      href="/cv.pdf"
      download
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 gap-2 inline-flex items-center"
    >
      Download CV
      <iconify-icon
        icon="material-symbols:download-sharp"
        width="24"
        height="24"
        style={{ color: "var(--primary)" }}
      ></iconify-icon>
    </motion.a>
  );
};

export default DownloadButton;