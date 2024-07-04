import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { PageTitle } from "../components/common/titles";
import { galleryImages } from "../assets/image-gallery";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Galleria } from "primereact/galleria";
import "./Gallery.css";

const GalleryPage = () => {

  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const galleria = useRef(null);

  useEffect(() => {
    const formattedImages = galleryImages.map((img) => ({
      itemImageSrc: img.src,
      thumbnailImageSrc: img.src,
      alt: img.alt,
    }));
    setImages(formattedImages);
  }, []);

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "960px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 4,
    },
    {
      breakpoint: "560px",
      numVisible: 3,
    },
  ];

  const itemTemplate = (item) => (
    <div style={{ height: "500px", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={item.itemImageSrc}
          alt={item.alt}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
    </div>
  );

  const thumbnailTemplate = (item) => (
    <div
      style={{
        width: "90px",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );

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

      <div className="flex justify-center items-center mx-auto pt-4 px-10 lg:px-20">
        {images.length === 0 ? (
          <div>No images available</div>
        ) : (
          <>
            <Galleria
              ref={galleria}
              value={images}
              responsiveOptions={responsiveOptions}
              numVisible={5}
              style={{ maxWidth: "640px" }}
              activeIndex={activeIndex}
              onItemChange={(e) => setActiveIndex(e.index)}
              circular
              fullScreen
              showItemNavigators
              showThumbnails={false}
              item={itemTemplate}
              thumbnail={thumbnailTemplate}
            />
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 mt-4">
              {images.map((image, index) => (
                <div className="col-3" key={index}>
                  <img
                    src={image.thumbnailImageSrc}
                    alt={image.alt}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setActiveIndex(index);
                      galleria.current.show();
                    }}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default GalleryPage;
