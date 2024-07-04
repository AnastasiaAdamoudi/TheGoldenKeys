import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const SmallServicesCard = ({ title, img, alt }) => {

  SmallServicesCard.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string,
  };

  return (
    <motion.div
    className="w-[250px] h-[300px] bg-darkish overflow-hidden"
    style={{ zIndex: 2 }}
    >
      <img
        src={img}
        alt={alt}
        className="w-44 object-cover h-44 flex justify-center text-center mx-auto pt-4 pb-1"
      />
      <div className="px-6 pt-3 pb-1 flex flex-col mx-auto">
        <h2 className="text-light font-subtitle text-center text-[18px] font-bold max-w-6xl pt-1 pb-1">
          {title}
        </h2>
      </div>
    </motion.div>
  );
};

export default SmallServicesCard;
