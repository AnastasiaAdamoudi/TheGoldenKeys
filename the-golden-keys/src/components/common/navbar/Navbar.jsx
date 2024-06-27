import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { navbarLinks } from "../../../data/navbar";
import { goldenKeysLogo, menuOpen, menuClose } from "../../../assets";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [mobile, setMobile] = useState(false);

  const handleLinkClick = (link) => {
    setActive(link.title);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed w-full top-[96px] lg:top-[48px] left-0 bg-dark text-light shadow-xl px-6 py-2 h-[84px]"
    style={{ zIndex: 10 }}>
      <div className="flex w-full h-full mx-auto justify-between text-center gap-20">
        <div className="flex justify-start">
          <Link
            to="/"
            className="flex flex-row items-center text-center justify-start gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={goldenKeysLogo}
              alt="logo"
              className="h-[75px] w-auto cursor-pointer object-contain"
            />
            <p className="text-primary text-[28px] cursor-pointer lg:block hidden text-midGold font-bold font-title">
              Τα Χρυσά Κλειδιά
            </p>
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <div className="hidden lg:flex flex-row items-center justify-end gap-10">
            {navbarLinks.map((link) => (
              <Link
                to={link.link}
                key={link.text}
                alt={link.alt}
                className={`${
                  active === link.text ? "text-dark" : ""
                } text-[20px] text-midGold cursor-pointer hover:text-reddish hover:text-[22px] font-bold font-links`}
                onClick={() => handleLinkClick(link)}
              >
                {link.text}
              </Link>
            ))}
          </div>

          <div className="lg:hidden flex flex-1 justify-end items-center">
            <img
              src={mobile ? menuClose : menuOpen}
              alt="menu"
              className="h-[60px] w-auto cursor-pointer object-contain z-30"
              onClick={() => setMobile(!mobile)}
            />
          </div>
          <motion.div>
            <AnimatePresence>
              {mobile && (
                <MobileMenu
                  key="mobile-menu-animation"
                  active={active}
                  setActive={setActive}
                  mobile={mobile}
                  setMobile={setMobile}
                  navbarLinks={navbarLinks}
                  handleLinkClick={handleLinkClick}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
