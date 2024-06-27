import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Header, Navbar, Footer } from "./components/common";
import { LandingPage, About, Services, Areas, Gallery, Contact } from "./pages";

const App = () => {

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
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
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
