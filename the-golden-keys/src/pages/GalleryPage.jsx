import { motion } from "framer-motion";
import { PageTitle } from "../components/common/titles";
import { ImageGallery, VideoGallery } from "../components/gallery";
import "./Gallery.css";

const GalleryPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, delay: 0.5 } },
  };

  return (
    <motion.div
      className="bg-light top-0 left-0 right-0 w-screen h-auto min-h-screen mx-auto overflow-hidden pt-[200px] lg:pt-[150px] pb-14 lg:pb-28"
      style={{ zIndex: 2 }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <PageTitle title="ΣΥΛΛΟΓΗ ΦΩΤΟΓΡΑΦΙΩΝ" />

      <ImageGallery />

      <div className="mt-20">
      <PageTitle title="ΣΥΛΛΟΓΗ ΒΙΝΤΕΟ" />
      </div>

<VideoGallery />

    </motion.div>
  );
};

export default GalleryPage;
