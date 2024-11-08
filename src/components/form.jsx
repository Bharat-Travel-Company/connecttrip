import { useState } from "react";
import axios from "axios";
const SignUpForm = ({ selectedPackage }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    numberOfMembers: "",
    selectedPackage: selectedPackage.packageName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, numberOfMembers, selectedPackage } = formData;
    console.log(formData);
    if (!email && !name && !phone) alert("Please fill all fields");
    axios
      .post(`https://landing-backend-ct.onrender.com/send-email`, formData)
      .then((res) => {
        if (res.message === "Form submitted successfully") {
          alert("Contact Form submited");
        } else {
          alert(res.data.message);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold mb-4">
        Request Callback for: {selectedPackage?.packageName}
      </h2>
      {["name", "phone", "email", "numberOfMembers"].map((field) => (
        <div key={field} className="w-full">
          <label className="block mb-2 text-sm text-[#fcaf17]" htmlFor={field}>
            {field.charAt(0).toUpperCase() +
              field.slice(1).replace(/([A-Z])/g, " $1")}
          </label>
          <input
            type={
              field === "email"
                ? "email"
                : field === "numberOfMembers"
                ? "number"
                : "text"
            }
            id={field}
            name={field}
            value={formData[field]}
            min={0}
            onChange={handleChange}
            className="w-full bg-white text-[#0F1E32] border border-[#F37004] rounded-md px-3 py-2 focus:outline-none focus:border-[#F37004] focus:ring-1 focus:ring-[#F37004]"
            placeholder={`${
              field.charAt(0).toUpperCase() +
              field.slice(1).replace(/([A-Z])/g, " $1")
            }`}
            required
          />
        </div>
      ))}
      <button
        className="mt-4 w-full rounded-md bg-[#F37004] py-2 px-4 text-white font-medium transition-all hover:bg-[#F37004]/90 focus:bg-[#F37004] focus:outline-none focus:ring-2 focus:ring-[#F37004] focus:ring-offset-2"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;
