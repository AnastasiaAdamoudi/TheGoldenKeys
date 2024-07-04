import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  floatFromLeftAreas,
  floatFromRightAreas,
  staggerContainer,
  staggerItem,
} from "../motion/home-sections";
import { PageTitle } from "../components/common/titles";
import AreasMapDisplay from "../components/areas/AreasMapDisplay";
import { areaData } from "../data/location";
import './Areas.css';


const AreasPage = () => {

  const mapRef = useRef();
  const textRef = useRef();

  const mapInView = useInView(mapRef, { threshold: 0.5 });
  const textInView = useInView(textRef, { threshold: 0.5 });

  const [visibleAreas, setVisibleAreas] = useState({
    Αμπελόκηποι: true,
    Σταυρούπολη: true,
    Εύοσμος: true,
    Πολίχνη: true
  });

  const toggleArea = (areaName) => {
    setVisibleAreas(prev => ({
      ...prev,
      [areaName]: !prev[areaName]
    }));
  };

  return (
    <section
      id="areas"
      className="bg-light top-0 left-0 right-0 w-screen h-auto min-h-screen mx-auto overflow-hidden pt-[200px] lg:pt-[150px] pb-14 lg:pb-28"
      style={{ zIndex: 2 }}
    >
      <PageTitle title="ΠΕΡΙΟΧΕΣ ΕΞΥΠΗΡΕΤΗΣΗΣ" />

      <motion.div className="flex flex-col lg:flex-row items-center justify-center mx-auto lg:ml-48 mt-4 lg:mt-6 mb-8 ">
        <motion.div
          className="flex justify-center items-center w-full lg:w-1/2 lg:items-end mx-auto h-auto drop-shadow-xl"
          variants={floatFromLeftAreas}
          initial="initial"
          ref={mapRef}
          animate={mapInView ? "animate" : "initial"}
        >
          <AreasMapDisplay visibleAreas={visibleAreas} />
        </motion.div>
        <motion.div className="w-full lg:w-1/2 h-auto lg:ml-4 lg:mr-0">
          <motion.div
            className="flex flex-col justify-center items-center lg:items-start w-[85%] lg:w-[75%] lg:-ml-4 lg:-ml-6 mx-auto py-4 mt-2 lg:mt-0 drop-shadow-xl text-darkish font-body text-md lg:text-xl"
            variants={floatFromRightAreas}
            initial="initial"
            ref={textRef}
            animate={textInView ? "animate" : "initial"}
          >
            <motion.div
              className="flex flex-col justify-center items-center mx-auto"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div className="flex flex-col w-full items-center justify-center mt-2 lg:mt-4 mx-auto">
                {areaData.map((areaItem) => (
                  <motion.div
                    className="flex flex-row items-center justify-between mb-2"
                    key={areaItem.id}
                    variants={staggerItem}
                  >
                    <button
                      className={`mr-4 ${visibleAreas[areaItem.area] ? "bg-reddish text-white" : "bg-darkish text-white"} px-3 py-2 cursor-pointer`}
                      onClick={() => toggleArea(areaItem.area)}
                    >
                      {areaItem.area}
                    </button>
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

export default AreasPage;
