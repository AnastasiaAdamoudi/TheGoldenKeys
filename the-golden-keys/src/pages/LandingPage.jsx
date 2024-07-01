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
      <FloatingContactIcons isSmallScreen={isSmallScreen} />
      <Hero isSmallScreen={isSmallScreen} />
      <About isSmallScreen={isSmallScreen} />
      <Areas isSmallScreen={isSmallScreen} />
      <Services isSmallScreen={isSmallScreen} />
      <Gallery isSmallScreen={isSmallScreen} />
      <Reviews isSmallScreen={isSmallScreen} />
    </div>
  );
};

export default LandingPage;
