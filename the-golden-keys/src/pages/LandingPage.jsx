import {
  Hero,
  About,
  Areas,
  Services,
  Gallery,
  Reviews,
} from "../components/landing-page";
import { FloatingContactIcons } from "../components/common";

const LandingPage = () => {
  
  return (
    <div className="bg-cover bg-n-repeat bg-center overflow-hidden top-0 left-0 right-0 w-full h-auto min-h-screen mx-auto">
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
