import {
  Hero,
  About,
} from '../components/landing-page';

const LandingPage = () => {
  return (
    <div className="bg-cover bg-n-repeat bg-center overflow-hidden">
      <Hero />
      <About />      
    </div>
  )
}

export default LandingPage;
