import { motion } from 'framer-motion';
import fiveStars from '../../assets/reviews/five-stars.svg';
import PropTypes from 'prop-types';

const ReviewCard = ({ name, review }) => {

  ReviewCard.propTypes = {
    id: PropTypes.number,
    index: PropTypes.number,
    name: PropTypes.string,
    review: PropTypes.string,
  };

  return (
    <motion.div
      className="flex flex-row mx-auto gap-1 justify-center text-center my-auto w-[250px] h-[240px] px-2 bg-light m-2 shadow-lg overflow-hidden"
      style={{ zIndex: 2 }}
      >
        <div className="px-2 flex flex-col justify-start text-center mx-auto">
        <img src={fiveStars} alt="five stars" className="w-auto h-20 mx-auto -mt-3 -mb-4" />
          <p className="text-primary font-body text-center text-[14px] md:text-[16px] pb-2">
            {review}
          </p>
          <p className="text-primary font-subtitle text-center text-[14px] font-bold py-1 italic">
            {name}
          </p>
        </div>
      </motion.div>
  );
};

export default ReviewCard;
