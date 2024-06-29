import {
  Hero,
  About,
  Areas,
  Services,
  Gallery,
  Reviews,
} from "../components/landing-page";
import { FloatingContactIcons } from "../components/common";
import PropTypes from "prop-types";

const LandingPage = ( { isSmallScreen } ) => {

  LandingPage.propTypes = {
    isSmallScreen: PropTypes.bool,
  };
  
  return (
    <div className="bg-cover bg-n-repeat bg-center overflow-hidden">
      <FloatingContactIcons />
      <Hero />
      <About />
      <Areas />
      <Services />
      <Gallery />
      <Reviews />
    </div>
  );
};

export default LandingPage;
