import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Kashmir";
import Tour from "./pages/tour";
import SignUpForm from "./components/form";
import WhatsAppButton from "./components/whatsApp";

import PrivacyPolicy from "./components/privacyPolicy";
import TermsAndConditions from "./components/termsAndConditions";
import MainHome from "./pages/mainHome";
import Kashmir from "./pages/Kashmir";
import Kerala from "./pages/Kerala";
import Himachal from "./pages/Himachal";
import Andaman from "./pages/Andaman";
import Dubai from "./pages/Dubai";
import Thailand from "./pages/Thailand";
const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 50000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg relative md:max-w-md max-w-sm w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[#FFDA32] bg-[#0F1E32] hover:text-[#0F1E32]  hover:bg-[#FFDA32] rounded-full size-8"
        >
          ✕
        </button>
        <section>
          <SignUpForm></SignUpForm>
        </section>
      </div>
    </div>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);



  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* <TruecallerButton></TruecallerButton> */}

      <WhatsAppButton></WhatsAppButton>

      <Router>
        <div className="w-full h-full">
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/kashmir" element={<Kashmir />} />
            <Route path="/kerala" element={<Kerala />} />
            <Route path="/himachal" element={<Himachal />} />
            <Route path="/andamanandnikobar" element={<Andaman />} />
            <Route path="/dubai" element={<Dubai />} />
            <Route path="/thailand" element={<Thailand />} />

            <Route path="/tour" element={<Tour />} />
            <Route path="/form" element={<SignUpForm/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
          </Routes>
        </div>
      </Router>
    
    </>
  );
}

export default App;
