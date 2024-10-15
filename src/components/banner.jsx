import { FaArrowRight, FaGift } from "react-icons/fa";

const SalesBanner = () => {
  const gradientClasses = "bg-gradient-to-br from-[#13253F] to-[#0F1E32]";
  const buttonClasses =
    "text-[#0F1E32] bg-white hover:bg-gray-50 px-4 py-2 rounded-lg w-fit ease duration-300 flex gap-1 items-center group";

  const phoneNumber = "+91-9319959557";

  return (
    <section className="px-4">
      <div
        className={`${gradientClasses} overflow-hidden p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-[1200px] mx-auto mt-20`}
      >
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-gray-200">Diwali sale</span>
            <br />
            <span className=" text-4xl text-white font-semibold">
              5% off every Group Tour
            </span>
          </div>
          <a href={`tel:${phoneNumber}`} className={buttonClasses}>
            <span>Call Now {phoneNumber}</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform ease duration-200 " />
          </a>
        </div>
        <div className="relative h-full ">
          <FaGift className="size-56 text-gray-100 absolute -top-40 -right-28 -rotate-45 opacity-45" />
        </div>
      </div>
    </section>
  );
};

export default SalesBanner;
