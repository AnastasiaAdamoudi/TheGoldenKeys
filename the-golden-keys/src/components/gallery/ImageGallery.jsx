import { useState, useEffect, useRef } from "react";
import { galleryImages } from "../../assets/image-gallery";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Galleria } from "primereact/galleria";
import { Paginator } from "primereact/paginator";
import "../../pages/Gallery.css";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const galleria = useRef(null);
  const imagesPerPage = 21;

  useEffect(() => {
    const formattedImages = galleryImages.map((img) => ({
      itemImageSrc: img.src,
      thumbnailImageSrc: img.src,
      alt: img.alt,
    }));
    setImages(formattedImages);
  }, []);

  const onPageChange = (event) => {
    setPage(event.page);
  };

  const displayedImages = images.slice(
    page * imagesPerPage,
    (page + 1) * imagesPerPage
  );

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

  return (
    <div className="flex flex-col justify-center items-center mx-auto my-2 px-10 lg:px-20">
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
            {displayedImages.map((image, index) => (
              <div className="col-3" key={index}>
                <img
                  src={image.thumbnailImageSrc}
                  alt={image.alt}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setActiveIndex(page * imagesPerPage + index);
                    galleria.current.show();
                  }}
                />
              </div>
            ))}
          </div>
          <Paginator
            first={page * imagesPerPage}
            rows={imagesPerPage}
            totalRecords={images.length}
            onPageChange={onPageChange}
            className="mt-10"
          />
        </>
      )}
    </div>
  );
};

export default ImageGallery;
