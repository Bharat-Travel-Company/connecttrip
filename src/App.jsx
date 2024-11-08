import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";
import WhatsAppButton from "./components/whatsApp";

// Lazy load components
const Home = lazy(() => import("./pages/Kashmir"));
const Tour = lazy(() => import("./pages/tour"));
const SignUpForm = lazy(() => import("./components/form"));
const PrivacyPolicy = lazy(() => import("./components/privacyPolicy"));
const TermsAndConditions = lazy(() => import("./components/termsAndConditions"));
const MainHome = lazy(() => import("./pages/mainHome"));
const Kashmir = lazy(() => import("./pages/Kashmir"));
const Kerala = lazy(() => import("./pages/Kerala"));
const Himachal = lazy(() => import("./pages/Himachal"));
const Andaman = lazy(() => import("./pages/Andaman"));
const Dubai = lazy(() => import("./pages/Dubai"));
const Thailand = lazy(() => import("./pages/Thailand"));

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
          className="absolute top-2 right-2 text-[#FFDA32] bg-[#0F1E32] hover:text-[#0F1E32] hover:bg-[#FFDA32] rounded-full size-8"
        >
          ✕
        </button>
        <section>
          <SignUpForm />
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
      <WhatsAppButton />

      <Router>
        <div className="w-full h-full">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<MainHome />} />
              <Route path="/kashmir" element={<Kashmir />} />
              <Route path="/kerala" element={<Kerala />} />
              <Route path="/himachal" element={<Himachal />} />
              <Route path="/andamanandnikobar" element={<Andaman />} />
              <Route path="/dubai" element={<Dubai />} />
              <Route path="/thailand" element={<Thailand />} />
              <Route path="/tour" element={<Tour />} />
              <Route path="/form" element={<SignUpForm />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
