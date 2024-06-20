import {
  Hero,
  About,
  Areas,
  Services,
  Gallery,
  Reviews
} from '../components/landing-page';

const LandingPage = () => {
  return (
    <div className="bg-cover bg-n-repeat bg-center overflow-hidden">
      <Hero />
      <About />  
      <Areas />
      <Services />
      <Gallery />  
      <Reviews /> 
    </div>
  )
}

export default LandingPage;
