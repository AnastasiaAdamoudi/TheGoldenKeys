import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Header, Navbar, Footer } from "./components/common";
import { LandingPage, About, Services, Areas, Gallery, Contact } from "./pages";
import MediaQuery from "react-responsive";

const App = () => {

  const isSmallScreen = MediaQuery({ query: "(max-width: 768px)" });

  const [modalState, setModalState] = useState({
    accessibilityOpen: false,
  });

  const closeModal = () => {
    setModalState({
      accessibilityOpen: false,
    });
  };

  return (
    <Router>
      <div
        id="scroll-container"
        className="bg-cover bg-n-repeat bg-center overflow-hidden"
      >
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} isSmallScreen={isSmallScreen} />
          <Route path="/about" element={<About />} isSmallScreen={isSmallScreen} />
          <Route path="/services" element={<Services />} isSmallScreen={isSmallScreen} />
          <Route path="/areas" element={<Areas />} isSmallScreen={isSmallScreen} />
          <Route path="/gallery" element={<Gallery />} isSmallScreen={isSmallScreen} />
          <Route path="/contact" element={<Contact />} isSmallScreen={isSmallScreen} />
        </Routes>
        <Footer
          modalState={modalState}
          setModalState={setModalState}
          closeModal={closeModal}
        />
      </div>
    </Router>
  );
}

export default App;
