import { motion, useInView } from "framer-motion";
import { PageTitle } from "../components/common/titles";
import ContactCardContent from "../components/common/contact-card/ContactCardContent";

const Contact = () => {

  return (
    <motion.div className="bg-light top-0 left-0 right-0 w-screen h-auto min-h-screen mx-auto overflow-hidden pt-[190px] lg:pt-[140px]" style={{ zIndex: 2 }}>
      <PageTitle title="ΕΠΙΚΟΙΝΩΝΙΑ" />

      <motion.div className="flex flex-row justify-center items-center w-full h-auto mt-28 relative lg:justify-center">
        <motion.div className="w-[300px] h-[190px] lg:w-[400px] lg:h-[250px] bg-[#4d0000] text-gray-400 -rotate-[28deg] drop-shadow-xl hidden lg:block" style={{ zIndex: 3, marginLeft: '-23%' }}>
          <ContactCardContent />
        </motion.div>

        <motion.div className="w-[300px] h-[190px] lg:w-[400px] lg:h-[250px] bg-[#660000] text-gray-300 -rotate-[21deg] drop-shadow-xl hidden lg:block" style={{ zIndex: 4, marginLeft: '-23%' }}>
          <ContactCardContent />
        </motion.div>

        <motion.div className="w-[300px] h-[190px] lg:w-[400px] lg:h-[250px] bg-[#800000] text-gray-200 -rotate-[14deg] drop-shadow-xl hidden lg:block" style={{ zIndex: 5, marginLeft: '-23%' }}>
          <ContactCardContent />
        </motion.div>

        <motion.div className="w-[300px] h-[190px] lg:w-[400px] lg:h-[250px] bg-[#b30000] text-gray-100 -rotate-[7deg] drop-shadow-xl hidden lg:block" style={{ zIndex: 6, marginLeft: '-23%' }}>
          <ContactCardContent />
        </motion.div>

        <motion.div className="w-[300px] h-[190px] lg:w-[400px] lg:h-[250px] bg-reddish text-light -rotate-0 mx-auto lg:mx-0 drop-shadow-xl" style={{ zIndex: 7, marginLeft: '-23%' }}>
          <ContactCardContent />
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Contact;
