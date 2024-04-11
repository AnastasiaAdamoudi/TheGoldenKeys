import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Header, Navbar, Footer } from "./components/common";
import { LandingPage, Services, ImageGallery, VideoGallery, Contact } from "./pages";

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
    <div className="bg-cover bg-n-repeat bg-center bg-background flex flex-col justify-center items-center h-screen w-screen overflow-hidden">
    <Router>
      <div
        id="scroll-container"
        className="bg-cover bg-n-repeat bg-center overflow-hidden"
      >
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/images" element={<ImageGallery />} />
          <Route path="/videos" element={<VideoGallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer
          modalState={modalState}
          setModalState={setModalState}
          closeModal={closeModal}
        />
      </div>
    </Router>
    </div>
  );
}

export default App;
