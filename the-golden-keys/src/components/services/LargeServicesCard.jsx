import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const LargeServicesCard = ({ title, description }) => {

  LargeServicesCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };

  return (
    <motion.div
      className="flex flex-row mx-auto gap-1 justify-center text-center my-auto w-[250px] h-[240px] px-2 bg-light m-2 shadow-lg overflow-hidden"
      style={{ zIndex: 2 }}
      >
        <div className="px-2 flex flex-col justify-start text-center mx-auto">
          <p className="text-primary font-body text-center text-[14px] md:text-[16px] pb-2">
            {title}
          </p>
          <p className="text-primary font-subtitle text-center text-[14px] font-bold py-1 italic">
            {description}
          </p>
        </div>
      </motion.div>
  );
};

export default LargeServicesCard;
