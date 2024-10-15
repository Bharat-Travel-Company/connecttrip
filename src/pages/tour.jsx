import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaClock, FaBus, FaUtensils, FaSuitcaseRolling } from "react-icons/fa6";
import Navbar from "../components/navbar";  
import Footer from "../components/footer";
import TourContact from "../components/tourContact"

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 50000);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gradient-to-br from-[#13253F] to-[#0F1E32] w-96 h-56 rounded-lg overflow-hidden my-2 flex ">
        <div className="w-2/5 h-full  relative flex justify-between">
          <span className="rounded-full size-8 bg-gray-200 absolute z-10 -right-4 -top-4 mask"></span>
          <div className="relative h-full flex flex-col  border-dashed justify-between border-r-2  border-[#FFDA32] items-center">
            <div className="h-full flex items-center justify-center w-full flex-col text-[#FFDA32]">
              <FaSuitcaseRolling className="  size-28" />
              <a href="#" className="pl-1  font-semibold">
                TourPlanner
              </a>
            </div>
          </div>

          <span className="rounded-full size-8 bg-gray-200 absolute z-10 -right-4 -bottom-4"></span>
        </div>
        <div className="w-full h-full  relative flex justify-center items-start ">
          <div className="relative h-full flex flex-col justify-center items-start">
            <h1 className="text-[#FFDA32] text-lg">Submitted Successfully</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

// const SignUpForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phoneNumber: "",
//     email: "",
//     date: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-4 bg-gray-200 p-4  rounded-xl shadow-md "
//     >
//       {["name", "phoneNumber", "email", "date"].map((field) => (
//         <div key={field} className="w-full">
//           <label className="block mb-2 text-sm text-[#0F1E32]" htmlFor={field}>
//             {field.charAt(0).toUpperCase() +
//               field.slice(1).replace(/([A-Z])/g, " $1")}
//           </label>
//           <input
//             type={
//               field === "date" ? "date" : field === "email" ? "email" : "text"
//             }
//             id={field}
//             name={field}
//             value={formData[field]}
//             onChange={handleChange}
//             className="w-full bg-white text-[#0F1E32] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#7BBCB0] focus:ring-1 focus:ring-[#7BBCB0]"
//             placeholder={`Your ${
//               field.charAt(0).toUpperCase() +
//               field.slice(1).replace(/([A-Z])/g, " $1")
//             }`}
//             required
//           />
//         </div>
//       ))}
//       <button
//         className="mt-4 w-full rounded-md bg-[#FFDA32] py-2 px-4 text-[#1C2B38] font-medium transition-all hover:bg-[#FFE566] focus:bg-[#FFE566] focus:outline-none focus:ring-2 focus:ring-[#FFDA32] focus:ring-offset-2"
//         type="submit"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

const Tour = () => {
  const location = useLocation();
  const { package: tourPackage } = location.state || {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="relative w-full md:h-[calc(100vh-8rem)] h-[380px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={tourPackage?.imgSrc}
            alt="Tour"
          />
        </div>
      </div>

      {tourPackage && (
        <section className="w-full p-8 bg-gray-100 flex flex-col md:flex-row gap-8">
          <section className="w-full bg-gray-200 rounded-xl shadow-md p-6">
            <h1 className="text-5xl font-semibold text-[#0F1E32] mb-4">
              {tourPackage.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center bg-[#FFDA32] text-[#0F1E32] rounded-full px-3 py-1">
                <FaClock className="h-4 w-4 mr-1" />
                {tourPackage.duration}
              </span>
              <span className="flex items-center bg-[#FFDA32] text-[#0F1E32] rounded-full px-3 py-1">
                <FaBus className="h-4 w-4 mr-1" />
                {tourPackage.transportation}
              </span>
              <span className="flex items-center bg-[#FFDA32] text-[#0F1E32] rounded-full px-3 py-1">
                <FaUtensils className="h-4 w-4 mr-1" />
                {tourPackage.meals}
              </span>
            </div>

            <h3 className="py-2 text-[#0F1E32]">{tourPackage.brief}</h3>
            <div>
              <ul className="list-disc pl-4 text-[#0F1E32]">
                {tourPackage.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-[#7BBCB0] mt-4">
              {tourPackage.price}
            </h2>
          </section>
          <aside className="max-w-md w-full ">
            <TourContact title={tourPackage.title}></TourContact>
          </aside>
        </section>
      )}

      {/* <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Submission Successful"
      >
        {formData && (
          <div>
            <p>Thank you for your submission!</p>
            <p>Name: {formData.name}</p>
            <p>Phone: {formData.phoneNumber}</p>
            <p>Email: {formData.email}</p>
            <p>Date: {formData.date}</p>
          </div>
        )}
      </Modal> */}
      <Footer></Footer>
    </div>
  );
};

export default Tour;
