import Navbar from "../components/navbar";
import { FaClock, FaBus, FaUtensils } from "react-icons/fa6";
import Carousel from "../components/carousel";
import packages from "../data/packages";
import FAQSection from "../components/faq";
import SalesBanner from "../components/banner";
import SignUpForm from "../components/form";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate


const Home = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleBookNow = (pkg) => {
    navigate("/tour", { state: { package: pkg } }); // Pass package data
  };
  const images = [
    "https://images.unsplash.com/photo-1664212008939-6afc24cc6ce8?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560853960-d776c82ffc92?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const vacationSpots = [
    {
      src: "https://images.unsplash.com/photo-1560853950-2502ec2ab867?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      span: "md:col-span-2 md:row-span-2",
      title: "Kashmir",
    },
    {
      src: "https://images.unsplash.com/photo-1657894736581-ccc35d62d9e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      span: "md:col-span-1 row-span-1",
      title: "Kullu",
    },
    {
      src: "https://images.unsplash.com/photo-1720513138417-5c8eb0b2d660?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaW1sYXxlbnwwfDF8MHx8fDI%3D",
      span: "md:col-span-1 row-span-1",
      title: "Manali",
    },
    {
      src: "https://images.unsplash.com/photo-1594102552386-793e5a27ad10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3VsbHV8ZW58MHwxfDB8fHwy",
      span: "md:col-span-1 row-span-1",
      title: "Jammu",
    },
    {
      src: "https://images.unsplash.com/photo-1586261709963-7a93cad40d44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEdvbGRlbiUyMFRlbXBsZSUyMEFtcml0c2FyfGVufDB8MXwwfHx8Mg%3D%3D",
      span: "md:col-span-1 row-span-1",
      title: "Shimla",
    },
    {
      src: "https://images.unsplash.com/photo-1615445969492-6894df4a5613?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      span: "md:col-span-1 row-span-1",
      title: "Dallhousie",
    },
  ];

  return (
    <div>
      <Navbar />
      <Carousel images={images} />
      <section className="w-full flex items-center justify-center flex-col py-16 ">
        <h1 className="md:text-5xl text-3xl font-semibold pb-8 text-[#0F1E32]">
          Desired Vacation Spots
        </h1>
        <div className="max-w-[1200px] w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {vacationSpots.map((spot, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden ${spot.span} group`}
              >
                <img
                  src={spot.src}
                  alt={`Vacation spot ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white text-xl md:text-2xl font-bold text-center px-2 group-hover:opacity-0 transition-opacity duration-300">
                    {spot.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center flex-col  bg-gray-100 py-16">
        <h1 className="md:text-5xl text-3xl font-semibold pb-8 text-[#0F1E32]">
          Ultimate Travel Experience
        </h1>
        <div className="max-w-[1200px] w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-0 px-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden p-4 bg-gray-200"
            >
              <img
                src={pkg.imgSrc}
                alt={pkg.title}
                className="rounded-xl h-64 w-full object-cover"
              />
              <h1 className="text-2xl  font-semibold text-[#0F1E32]">
                {pkg.title}
              </h1>
              <div className="mb-2 flex gap-x-2 ">
                {pkg.itinerary.map((item) => (
                  <span
                    key={item}
                    className="bg-[#FFDA32] px-2 rounded-full  text-[#1C2B38]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-x-1">
                  <FaClock className="text-[#0F1E32]" />
                  <p>{pkg.duration}</p>
                </li>
                <li className="flex items-center gap-x-1">
                  <FaBus className="text-[#0F1E32]" />
                  <p>{pkg.transportation}</p>
                </li>
                <li className="flex items-center gap-x-1">
                  <FaUtensils className="text-[#0F1E32]" />
                  <p>{pkg.meals}</p>
                </li>
              </ul>
              <div className="flex justify-between my-3">
                <h2 className="text-2xl font-semibold text-[#7BBCB0]">
                  {pkg.price}
                </h2>
                <button
                  className="bg-[#FFDA32] text-[#1C2B38] font-medium px-2 rounded-md"
                  onClick={() => handleBookNow(pkg)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <FAQSection></FAQSection>
      </section>
      <section className="py-16  w-full bg-gray-100">
        <div className="md:max-w-sm max-w-sm mx-auto px-4">
          <SignUpForm></SignUpForm>
        </div>
      </section>
      <section className="pb-16">
        <SalesBanner></SalesBanner>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
