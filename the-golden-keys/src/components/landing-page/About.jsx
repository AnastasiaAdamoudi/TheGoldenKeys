import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  floatFromLeftAreas,
  floatFromRightAreas,
} from "../../motion/home-sections";
import { SectionTitle } from "../common/titles";
import { profileLP } from "../../assets/profile";

const About = () => {

  const photoRef = useRef();
  const textRef = useRef();
  const photoInView = useInView(photoRef, { threshold: 0.5 });
  const textInView = useInView(textRef, { threshold: 0.5 });

  return (
    <section
      id="about"
      className="bg-darkish top-0 left-0 right-0 w-screen h-auto mx-auto overflow-hidden pt-20"
    >
      <SectionTitle title="ΠΡΟΦΙΛ" />
      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto mt-2 lg:mt-6 mb-8">
        <motion.div 
          className="w-full lg:w-1/2 h-auto flex flex-col justify-center items-center lg:items-start mx-auto lg:ml-0 drop-shadow-xl"
          style={{ zIndex: 3 }}
          variants={floatFromLeftAreas}
          initial="initial"
          ref={textRef}
          animate={textInView ? "animate" : "initial"}
        >
          <div className="flex flex-col justify-center items-center lg:items-start w-[85%] lg:w-[75%] lg:-mr-40 mx-auto py-4 mt-5 lg:mt-0 bg-light drop-shadow-xl text-darkish font-body text-sm lg:text-lg">
            <motion.div className="flex flex-col items-center text-center mx-auto w-[95%]">
            <p className="">
              Αξιόπιστες υπηρεσίες κλειδαρά σε κατάστημα που λειτουργεί στο ίδιο σημείο από το 1974. Ως η σημερινή κλειδαράς αυτού του καταστήματος, έχω πολύχρονη εμπειρία στο χώρο κι είμαι εξειδικευμένη σε όλες τις υπηρεσίες κλειδαρά που προσφέρω.
            </p>
            <br />
            <p className="">
              Ειδικεύομαι στην αντιγραφή κλειδιών, ανοίγματα κλειδαριών, αλλαγές κλειδαριών, εγκατάσταση κλειδαριών ασφαλείας (δείτε την πλήρη λίστα υπηρεσιών <a href="/services" target="_blank" rel="noreferrer" className="underline text-midGold hover:text-reddish">εδώ</a>). Εξυπηρετώ πελάτες στο κατάστημα, αλλά και στο χώρο τους όταν είναι απαραίτητο (π.χ. σε περίπτωση κλειδώματος εξωτερικών ή εσωτερικών θυρών).
            </p>
            <br />
            <p className="">
              Για οποιαδήποτε πληροφορία ή υπηρεσία, μη διστάσετε να <a href="/contact" target="_blank" rel="noreferrer" className="underline text-midGold hover:text-reddish">επικοινωνήσετε</a> μαζί μου!
            </p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 mx-auto h-auto drop-shadow-xl μχ-αθτο lg:ml-36"
          style={{ zIndex: 2 }}
          variants={floatFromRightAreas}
          initial="initial"
          ref={photoRef}
          animate={photoInView ? "animate" : "initial"}
        >
          <img src={profileLP} alt="profile" className="w-[250px] lg:w-[350px] h-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;