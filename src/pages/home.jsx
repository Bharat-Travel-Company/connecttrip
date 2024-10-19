import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import packages from "../data/packages";
import FAQSection from "../components/faq";
import SalesBanner from "../components/banner";
import SignUpForm from "../components/form";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { kashmirPackages } from "../data/packagesData";
import { WiStars } from "react-icons/wi";
import { FaTag } from "react-icons/fa6";
const Card = ({
  image,
  duration,
  originalPrice,
  discountedPrice,
  discount,
  inclusions,
  tag,
  packageName,
  stayDetails,
}) => {
  return (
    <div className="rounded-xl flex flex-col w-full gap-2 shadow-lg transition-shadow duration-300">
      <div className=" w-full h-72 relative rounded-xl overflow-hidden">
        <div className=" absolute right-0 top-0 rounded-bl-lg bg-[#f57725] text-white px-2.5">
          {discount}
        </div>
        <img
          src={image}
          alt={packageName}
          className="w-full h-full object-cover rounded-t-xl aspect-square"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">{duration}</p>
          {tag && (
            <div className="flex items-center gap-1 text-xs bg-green-600 text-white px-2 py-1 rounded-full">
              <FaTag />
              <span>{tag}</span>
            </div>
          )}
        </div>
        <h2 className="text-gray-800 text-lg font-semibold">{packageName}</h2>
        <ul className="flex flex-wrap gap-2">
          {stayDetails.map((stay, index) =>
            index <= 2 ? (
              <li key={index} className="flex items-center text-sm">
                <span className="font-bold mr-1">{stay.day}</span>
                <span className="text-gray-600">{stay.location}</span>
              </li>
            ) : index === 3 ? (
              <span
                key={index}
                className="flex items-center justify-center bg-[#f57725] text-white w-6 h-6 rounded-full font-semibold text-xs before:content-['+']"
              >
                {stayDetails.length - 3}
              </span>
            ) : null
          )}
        </ul>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-green-600">
            {discountedPrice}
          </span>
          <span className="text-sm text-gray-500 line-through">
            {originalPrice}
          </span>
          <span className="text-sm font-semibold text-green-600 bg-green-100 px-2">
            SAVE ₹{""}
            {(
              Number(originalPrice.replace(/[^\d.]/g, "")) -
              Number(discountedPrice.replace(/[^\d.]/g, ""))
            ).toLocaleString("en-IN")}
          </span>
        </div>
        <div>
          <button className="w-full  bg-[#f37002] text-white py-2 rounded-lg my-2">Request a Callback</button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleBookNow = (pkg) => {
    navigate("/tour", { state: { package: pkg } }); // Pass package data
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Navbar />
      <Carousel data={kashmirPackages} />
      <section className=" flex items-center justify-center flex-col py-16 max-w-[1200px] w-full">
        <div className="w-full pl-4 mb-4 space-y-0.5">
          <h1 className="text-2xl  font-semibold  text-[#fcaf17] w-full text-start flex ">
            Best Packages <WiStars className="text-[#f57725]" />
          </h1>
          <p className="text-start w-full  text-gray-700 font-semibold">
            Tailor-Made Best Price Packages Just for You{" "}
          </p>
        </div>
        <div className="max-w-[1200px] w-full px-4 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-4">
          {kashmirPackages.map((pkg, index) => (
            <Card
              key={index}
              image={pkg.image}
              duration={pkg.duration}
              discount={pkg.discount}
              discountedPrice={pkg.discountedPrice}
              originalPrice={pkg.originalPrice}
              inclusions={pkg.inclusions}
              tag={pkg.tag}
              packageName={pkg.packageName}
              stayDetails={pkg.stayDetails}
            ></Card>
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
