import { motion } from "framer-motion";
import { mobileNav, linkReveal, listItem } from "../../../motion/navbar";
import { Link } from "react-router-dom";

const MobileMenu = ({ active, setActive, mobile, setMobile, navbarLinks }) => {

  return (
    <motion.div
      className="flex lg:hidden absolute right-0 top-[74px] w-full h-auto mx-0 my-0
        z-10 flex-col items-end gap-60 bg-lightGold text-dark"
      variants={mobileNav}
      initial="initial"
      animate="animate"
      exit="initial"
    >
        <motion.div
        className="flex flex-col justify-center items-center gap-4 px-16 w-[90%]"
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
              } text-[20px] cursor-pointer`}
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
