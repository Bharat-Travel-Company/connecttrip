import { useState } from "react";
import axios from "axios";
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    destination: "",
    date: "",
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

    const { username, phone, email } = formData;
    console.log(formData);
    if (!email && !username && !phone) alert("Please fill all fields");
    axios
      .post(`https://tourplanerbackend.onrender.com/send-email`, formData)
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
      {["username", "phone", "email", "date"].map((field) => (
        <div key={field} className="w-full">
          <label className="block mb-2 text-sm text-[#fcaf17]" htmlFor={field}>
            {field.charAt(0).toUpperCase() +
              field.slice(1).replace(/([A-Z])/g, " $1")}
          </label>
          <input
            type={
              field === "date" ? "date" : field === "email" ? "email" : "text"
            }
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full bg-white text-[#0F1E32] border border-[#F37004] rounded-md px-3 py-2 focus:outline-none focus:border-[#F37004] focus:ring-1 focus:ring-[#F37004]"
            placeholder={`Your ${
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
