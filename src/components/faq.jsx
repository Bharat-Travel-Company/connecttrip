import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
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
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="" onClick={onClick}>
      <button className="flex items-center gap-1 w-full p-2" onClick={onClick}>
        <span className="text-[#F37002] rounded-full  transition-colors duration-300 ">
          {!isOpen ? <FaPlus /> : <FaMinus />}
        </span>
        <h1 className="font-semibold text-gray-700 text-start">{question}</h1>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 py-2 text-sm text-gray-500">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="">
      <div className="container w-full px-4 py-10 mx-auto">
        <h1 className="text-2xl  font-semibold  text-[#fcaf17] w-full text-start flex ">
          Frequently Asked Questions
        </h1>
        <div className="w-full ">
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
