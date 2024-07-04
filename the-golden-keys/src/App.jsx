import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Header, Navbar, Footer } from "./components/common";
import { LandingPage, ServicesPage, AreasPage, GalleryPage, ContactPage } from "./pages";

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
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/areas" element={<AreasPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
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
