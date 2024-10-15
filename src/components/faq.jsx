import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-2 border-gray-100 rounded-lg overflow-hidden">
      <button
        className="flex items-center justify-between w-full p-4"
        onClick={onClick}
      >
        <h1 className="font-semibold text-gray-700 text-start">{question}</h1>
        <span
          className={`text-white rounded-full p-1 transition-colors duration-300 ${
            isOpen ? "bg-[#FFDA32]" : "bg-[#0F1E32]"
          }`}
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="p-8 text-sm text-gray-500">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a tour?",
      answer:
        "Booking a tour is easy! Simply give us a call at our dedicated booking hotline. Our friendly tour specialists will assist you in selecting your desired destination, date, and package, ensuring a personalized experience tailored to your preferences.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, PayPal, and bank transfers for tour bookings.",
    },
    {
      question: "Can I customize my tour itinerary?",
      answer:
        "Yes, we offer customizable tour packages. Please contact our team to discuss your specific requirements.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Our cancellation policy varies depending on the tour package and how far in advance you cancel. Please refer to the specific tour details for more information.",
    },
    {
      question: "Do you offer group discounts?",
      answer:
        "Yes, we offer discounts for group bookings. The discount amount depends on the group size and tour package.",
    },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white">
      <div className="container max-w-4xl px-6 py-10 mx-auto">
        <h1 className="md:text-5xl text-3xl font-semibold pb-8 text-[#0F1E32] text-center">
          Frequently Asked Questions
        </h1>
        <div className="mt-12 space-y-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
