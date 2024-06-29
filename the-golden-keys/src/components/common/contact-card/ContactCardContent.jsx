import { motion } from "framer-motion";
import { facebookIcon, emailIcon } from "../../../assets/contact";
import { footerNav } from "../../../data/footer-nav";

const ContactCardContent = () => {
  const textShadowStyle = {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
  };

  return (
    <motion.div 
      className="flex flex-col justify-center mx-auto w-full h-full text-light"
      style={{ 
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        ...textShadowStyle
      }}
    >
      <h1 className="text-2xl lg:text-4xl text-center font-title font-bold tracking-wider mx-auto">
        Κ Λ Ε Ι Δ Α Ρ Α Σ
      </h1>
      <div className="flex w-full justify-start -mb-8 lg:-mb-14">
        <h4 className="text-xs lg:text-lg font-title font-bold tracking-wide pl-12 lg:pl-14 italic">
          2310
        </h4>
      </div>
      <a href={footerNav.find((item) => item.text === "2310 787777").link} className="no-underline cursor-pointer">
      <h2 className="text-5xl sm:text-6xl lg:text-7xl text-center font-title font-bold tracking-wider mx-auto italic">
        7<span className="text-[80px] lg:text-[120px] relative top-2 lg:top-4">8</span>.77.77
      </h2>
      </a>
      <div className="flex w-full justify-end">
      <a href={footerNav.find((item) => item.text === "6987 787777").link} className="no-underline cursor-pointer">
        <h4 className="text-xs lg:text-[15px] font-title font-bold tracking-wide pr-8 lg:pr-10 -mt-1 sm:-mt-2">
          ΛΕΒΕΝΤΕΛΗ Α. 6987 78.77.77
        </h4>
      </a>
      </div>
      <hr className="w-full my-1 border-1 border-midGold" />
      <a href={footerNav.find((item) => item.text === "Χρήστου Ράπτη 47, Αμπελόκηποι, Θεσσαλονίκη, 561 23").link} className="no-underline cursor-pointer">
      <h4 className="text-xs lg:text-lg text-center font-title font-bold tracking-normal mx-auto">
        Χρήστου Ράπτη 47 - Αμπελόκηποι - Θεσσαλονίκη
      </h4>
      </a>
      <hr className="w-full my-1 border-1 border-midGold" />
      <a href={footerNav.find((item) => item.text === "ΚΛΕΙΔΑΡΑΣ ΑΜΠΕΛΟΚΗΠΟΙ ΘΕΣΣΑΛΟΝΙΚΗΣ").link} className="no-underline cursor-pointer">
      <motion.div className="flex flex-row justify-center items-center w-full h-auto gap-2">
        <motion.img
          className="w-4 lg:w-6 h-auto"
          src={facebookIcon}
          alt="facebook icon"
        />
      <h4 className="text-xs lg:text-[16px] text-center font-body tracking-normal">
        ΚΛΕΙΔΑΡΑΣ ΑΜΠΕΛΟΚΗΠΟΙ ΘΕΣΣΑΛΟΝΙΚΗΣ
      </h4>
      </motion.div>
      </a>
      <a href={footerNav.find((item) => item.text === "kleidaroy81@gmail.com").link} className="no-underline cursor-pointer">
      <motion.div className="flex flex-row justify-center items-center w-full h-auto gap-2">
        <motion.img
          className="w-4 lg:w-6 h-auto"
          src={emailIcon}
          alt="email icon"
        />
      <h4 className="text-xs lg:text-[16px] text-center font-body tracking-normal">
        kleidaroy81@gmail.com
      </h4>
      </motion.div>
      </a>
    </motion.div>
  );
};

export default ContactCardContent;