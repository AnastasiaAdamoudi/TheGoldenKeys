import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const LargeServicesCard = ({ title, description }) => {

  LargeServicesCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };

  return (
    <motion.div
      className="flex flex-col mx-auto gap-1 justify-start text-start my-auto w-[270px] lg:w-[350px] xl:w-[400px] h-auto px-2 bg-light m-2 overflow-hidden"
      style={{ zIndex: 2 }}
    >
      <div className="px-2 flex flex-col justify-start text-start">
        <p className="text-primary font-subtitle font-bold text-start text-[14px] md:text-[16px] pb-1">
          {title}
        </p>
        <p className="text-primary font-body text-start text-[14px] py-1 italic">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default LargeServicesCard;
