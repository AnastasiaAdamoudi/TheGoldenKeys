import { useState } from "react";
import { Link } from "react-router-dom";
import { footerNav } from "../../../data/footer-nav";
import { openingTimes } from "../../../data/opening-times";
import { kleidiLogo, policeLogo } from "../../../assets/footer";
import AccessibilityModal from "./AccessibilityModal";

const Footer = () => {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  const toggleAccessibilityModal = () => {
    setAccessibilityOpen(!accessibilityOpen);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full h-auto z-30 text-light flex flex-col items-center justify-center overflow-hidden">
      {/* Gray row */}
      <div className="bg-darkish w-full p-6 h-[350px] flex flex-row justify-center items-center">
        {/* Footer Navigation */}
        <div className="flex flex-col items-start mx-6 w-1/3 gap-4">
          <h2 className="text-light font-title font-bold text-xl uppercase mb-2">
            Βρειτε μας εδω:
          </h2>
          <div className="flex flex-col w-full items-start gap-4">
            {footerNav.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-wrap justify-start items-center gap-2 w-[75%]"
              >
                <div className="flex flex-row justify-start items-center gap-2">
                  <img src={item.icon} alt={item.alt} className="w-6 h-6" />
                  <p className="text-light font-body font-bold text-md">
                    {item.text}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Review button & logos */}

        <div className="flex flex-col w-1/3 mx-6 justify-center items-center my-auto">
          {/* Write a review button */}
          <a
            href="https://www.google.com/maps/place/%CE%9A%CE%9B%CE%95%CE%99%CE%94%CE%91%CE%A1%CE%91%CE%A3+%CE%91%CE%9C%CE%A0%CE%95%CE%9B%CE%9F%CE%9A%CE%97%CE%A0%CE%9F%CE%99+%CE%98%CE%95%CE%A3%CE%A3%CE%91%CE%9B%CE%9F%CE%9D%CE%99%CE%9A%CE%97%CE%A3/@40.6519085,22.9217313,17z/data=!4m8!3m7!1s0x14a83989b9482943:0xae905e9f718fd3e5!8m2!3d40.6519085!4d22.9243062!9m1!1b1!16s%2Fg%2F11gj6_x7q4?entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-midGold text-dark hover:bg-lightGold hover:text-dark font-links font-bold text-md no-underline cursor-pointer py-2 px-4 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-midGold focus:ring-opacity-50 transition duration-300 ease-in-out">
              Αξιολογήστε μας
            </button>
          </a>

          {/* Logos */}
          <div className="flex flex-row justify-center items-start gap-2">
            <div className="flex flex-col justify-center items-center gap-2 w-1/2">
              <img src={policeLogo} alt="police logo" className="h-32 w-auto" />
              <p className="text-light font-body font-bold text-md w-[90%] text-center mx-auto">
                ΚΑΤΑΣΤΗΜΑ ΑΝΑΓΝΩΡΙΣΜΕΝΟ ΑΠΟ ΤΗΝ ΕΛΛΗΝΙΚΗ ΑΣΤΥΝΟΜΙΑ ΜΕ ΑΡ. ΠΡ.:
                2558270498/2018
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 w-1/2">
              <img src={kleidiLogo} alt="kleidi logo" className="h-32 w-auto" />
              <p className="text-light font-body font-bold text-md w-[90%] text-center mx-auto">
                ΜΕΛΟΣ ΤΟΥ ΔΙΚΤΥΟΥ ΚΛΕΙΘΡΟΠΟΙΩΝ ΚΛΕΙ.ΔΙ.
              </p>
            </div>
          </div>
        </div>

        {/* Opening Times */}
        <div className="flex flex-col w-1/3 justify-center items-center mx-6 my-auto">
          <div className="flex flex-col gap-2">
            <h2 className="text-light font-title font-bold text-xl uppercase mb-2">
              Ωραριο Λειτουργιας:
            </h2>
            {openingTimes.map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-start items-center gap-2"
              >
                <img
                  src={item.icon}
                  alt="key bullet point"
                  className="w-4 h-4"
                />
                <p className="text-light font-body font-bold text-md">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Black row */}
      <div className="bg-dark w-full h-[100px] flex flex-col lg:flex-row justify-between p-6 items-center">
        {/* Accessibility Modal */}
        <div className="mx-2">  
          <button
            type="button"
            onClick={toggleAccessibilityModal}
            className="bg-midGold text-dark hover:bg-lightGold hover:text-dark font-links font-bold text-sm no-underline cursor-pointer py-2 px-4 
            rounded-lg focus:outline-none focus:ring-2 focus:ring-midGold focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Δήλωση Διαδικτυακής Προσβασιμότητας
          </button>
          <AccessibilityModal
            isOpen={accessibilityOpen}
            onClose={toggleAccessibilityModal}
          />
        </div>

        {/* Copyright */}
        <div className="flex flex-row justify-center items-center">
          <p className="text-light font-body font-bold text-lg">
            Copyright
            <span className="text-secondary font-links font-bold text-lg mx-2">
              ©
            </span>
            2024
            <Link
              to="/"
              className="cursor-pointer text-midGold hover:text-lightGold font-links underline ml-2"
            >
              Τα Χρυσά Κλειδιά
            </Link>
          </p>
        </div>

        {/* Developer */}
        <div className="flex flex-col justify-end items-end mb-2 mx-2">
          <p className="text-light font-body font-bold text-md">
            Σχεδιασμός και κατασκευή ιστότοπου:
            </p>
            <a
              href="https://anastasiaadamoudi.com/"
              target="_blank"
              rel="noreferrer"
              className="text-midGold hover:text-lightGold font-links underline ml-2"
            >
              Anastasia Adamoudi
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
