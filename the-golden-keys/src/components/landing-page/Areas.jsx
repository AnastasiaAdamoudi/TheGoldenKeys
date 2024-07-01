import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  floatFromLeftAreas,
  floatFromRightAreas,
} from "../../motion/home-sections";
import { SectionTitle } from "../common/titles";
import LocationMapDisplay from "./LocationMapDisplay";
import { keyBulletPoint } from "../../assets/footer";
import { areaData } from "../../data/location";
import PropTypes from "prop-types";

const Areas = ({ isSmallScreen }) => {
  Areas.propTypes = {
    isSmallScreen: PropTypes.bool,
  };

  const mapRef = useRef();
  const textRef = useRef();

  const mapInView = useInView(mapRef, { threshold: 0.5 });
  const textInView = useInView(textRef, { threshold: 0.5 });

  return (
    <section
      id="areas"
      className="bg-darkish top-0 left-0 right-0 w-screen h-auto min-h-screen mx-auto overflow-hidden pt-[130px] lg:pt-[80px]"
    >
      <SectionTitle title="ΤΟΠΟΘΕΣΙΑ" />

      <motion.div className="flex flex-col lg:flex-row items-center justify-center mx-auto lg:ml-48 mt-2 lg:mt-6 mb-8 ">
        <motion.div
          className="flex justify-center items-center w-full lg:w-1/2 lg:items-end mx-auto h-auto drop-shadow-xl"
          variants={floatFromLeftAreas}
          initial="initial"
          ref={mapRef}
          animate={mapInView ? "animate" : "initial"}
        >
          <LocationMapDisplay />
        </motion.div>
        <motion.div className="w-full lg:w-1/2 h-auto lg:ml-4 lg:mr-0">
        <motion.div
          className="flex flex-col justify-center items-center lg:items-start w-[85%] lg:w-[75%] lg:-ml-40 mx-auto py-4 mt-5 lg:mt-0 bg-white drop-shadow-xl text-darkish font-body text-md lg:text-xl"
          variants={floatFromRightAreas}
          initial="initial"
          ref={textRef}
          animate={textInView ? "animate" : "initial"}
        >
          <motion.p className="w-full flex flex-col items-center text-center mx-auto w-[95%]">
            <span className="font-bold">Διεύθυνση καταστήματος:</span> Χρήστου
            Ράπτη 47, Αμπελόκηποι Θεσσαλονίκης, 561 23
          </motion.p>
          <motion.a href="https://maps.app.goo.gl/ZCEkW4MfQ5H1cAL97" target="_blank" rel="noreferrer" className="w-full flex flex-col items-center text-center font-links underline text-sm lg:text-md text-midGold hover:text-reddish mx-auto mt-2">
          Κάντε κλικ εδώ για να οδηγειθείτε στους χάρτες Google
          </motion.a>
          <motion.p className="w-full mt-2 lg:mt-4 text-center">
            <span className="font-bold">Περιοχές εξυπηρέτησης:</span>
          </motion.p>
          <motion.div className="flex flex-col justify-center items-center mx-auto">
            <motion.div className="w-full items-start mt-2 lg:mt-4">
              {areaData.map((areaItem) => (
                <motion.div
                  className="flex flex-row items-center"
                  key={areaItem.id}
                >
                  <img
                    src={keyBulletPoint}
                    alt="key bullet point"
                    className="w-4 h-4 mr-2"
                  />
                  <p>{areaItem.area}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.p className="w-full mt-2 lg:mt-4 text-center font-bold">
            Βρίσκομαι ένα τηλεφώνημα μακριά!
          </motion.p>
        </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Areas;
