import { motion } from "framer-motion";
import { mobileNav, linkReveal, listItem } from "../../../motion/navbar";
import { Link } from "react-router-dom";

const MobileMenu = ({ active, setActive, mobile, setMobile, navbarLinks }) => {

  return (
    <motion.div
      className="flex lg:hidden absolute right-0 top-[84px] w-full h-auto mx-0 my-0
        flex-col items-center gap-60 bg-lightGold text-dark"
        style={{ zIndex: 10 }}
      variants={mobileNav}
      initial="initial"
      animate="animate"
      exit="initial"
    >
        <motion.div
        className="flex flex-col justify-center items-center gap-4 px-16 my-5 w-[90%]"
        variants={linkReveal}
        initial="initial"
        animate="animate"
      >
        {navbarLinks.map((link) => (
          <motion.div
            key={link.text}
            className="flex flex-col items-center"
            variants={listItem}
          >
            <Link
              to={link.link}
              key={link.text}
              alt={link.alt}
              className={`${
                  active === link.text ? "text-dark" : ""
                } text-[20px] font-links cursor-pointer hover:bg-dark hover:text-light`}
              onClick={() => {
                setActive(link.text);
                setMobile(false);
                window.scrollTo(0, 0);
              }}
            >
              {link.text}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
