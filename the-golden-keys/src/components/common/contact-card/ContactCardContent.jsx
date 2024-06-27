import { motion } from "framer-motion";

const ContactCardContent = () => {
  return (
    <motion.div className="flex flex-col justify-center mx-auto w-full h-full">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-title font-bold tracking-wider mx-auto">
        Κ Λ Ε Ι Δ Α Ρ Α Σ
      </h1>
      <div className="flex w-full justify-start -mb-8 sm:-mb-10 lg:-mb-14">
        <h4 className="text-xs sm:text-sm lg:text-lg font-title font-bold tracking-wide pl-12 sm:pl-16 lg:pl-14 italic">
          2310
        </h4>
      </div>
      <h2 className="text-5xl sm:text-6xl lg:text-7xl text-center font-title font-bold tracking-wider mx-auto italic">
        7<span className="text-[80px] sm:text-[100px] lg:text-[120px] relative top-2 sm:top-3 lg:top-4">8</span>.77.77
      </h2>
      <div className="flex w-full justify-end">
        <h4 className="text-xs sm:text-sm lg:text-md font-title font-bold tracking-wide pr-8 sm:pr-10 lg:pr-10 -mt-1 sm:-mt-2">
          ΛΕΒΕΝΤΕΛΗ Α. 6987 78.77.77
        </h4>
      </div>
      <hr className="w-full my-1 border-1 border-midGold" />
      <h4 className="text-xs sm:text-sm lg:text-md text-center font-title font-bold tracking-normal mx-auto">
        Χρήστου Ράπτη 47 - Αμπελόκηποι - Θεσσαλονίκη
      </h4>
      <hr className="w-full my-1 border-1 border-midGold" />
      <h4 className="text-xs sm:text-sm lg:text-md text-center font-body tracking-normal mx-auto">
        ΚΛΕΙΔΑΡΑΣ ΑΜΠΕΛΟΚΗΠΟΙ ΘΕΣΣΑΛΟΝΙΚΗΣ
      </h4>
      <h4 className="text-xs sm:text-sm lg:text-md text-center font-body tracking-normal mx-auto">
        kleidaroy81@gmail.com
      </h4>
    </motion.div>
  );
};

export default ContactCardContent;
