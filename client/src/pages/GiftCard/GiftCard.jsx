import { useState } from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { FaApplePay, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { MdDirectionsRun, MdKeyboardReturn, MdLocalShipping } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const GiftCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const buttons = ["AED 100", "AED 200", "AED 300", "AED 400", "AED 500"];
  const icons = [
    { icon: <FaCcVisa /> },
    { icon: <FaApplePay /> },
    { icon: <FaCcMastercard /> },
    { icon: <RiMoneyDollarCircleLine /> },
    { icon: <AiOutlineCreditCard /> },
  ];
  const icon = [
    {
      icon: (
        <img
          className="h-10 w-10"
          src="https://yorkie.thegivingmovement.com/images/usp/earth.svg"
          alt=""
        />
      ),
      label: "Eco Friendly Fabrics",
    },
    {
      icon: (
        <img
          className="h-10 w-10"
          src="https://yorkie.thegivingmovement.com/images/usp/charity.svg"
          alt="UAE Flag"
        />
      ),
      label: "$4 to charity per item sold",
    },
    {
      icon: (
        <img
          className="h-10 w-10"
          src="https://cdn.britannica.com/82/5782-050-8A763A9A/Flag-United-Arab-Emirates.jpg"
          alt="UAE Flag"
        />
      ),
      label: "Made in UAE",
    },
  ];
  const deliveryOptions = [
    { text: "FREE Same Day Delivery (up to AED198)", price: "AED0" },
    { text: "AED15 Same Day Delivery (over AED198)", price: "AED15" },
    { text: "AED15 Next Day Delivery (after cut-off)", price: "AED15" },
    { text: "FREE Express Delivery 1-2 Days", price: "AED0" },
    { text: "AED40 Cash on Delivery 1-2 Days", price: "AED40" },
  ];
  const deliveryOption = [
    { text: "FREE Next-Day Delivery (up to AED198)", price: "AED0" },
    { text: "AED15 Next-Day Delivery (over AED198)", price: "AED15" },
    { text: "SAR40 Express Delivery (COD) 2-3 Days", price: "SAR40" },
  ];
  const deliveryOptiones = [
    {
      text: "AED40 Express Delivery (Card) 2-3 Days",
      price: "AED40",
      paymentMethod: "Card",
    },
    {
      text: "AED40 Express Delivery (COD) 2-3 Days",
      price: "AED40",
      paymentMethod: "COD",
    },
  ];
  const returnPolicyItems = [
    {
      text: "Items must be returned within 14 days to be eligible for free returns.",
    },
    {
      text: "Return items must be in their original condition, undamaged and unworn, with the original tag and packaging.",
    },
  ];
  return (
    <div className="flex">
      <div className="w-1/2 flex justify-end mt-10 px-10">
        <img
          className="h-72  object-cover fixed"
          src="https://thegivingmovement.com/cdn/shop/files/GIFTCARD1.jpg?v=1684840570"
          alt="Image"
        />
      </div>
      <div className="w-2/6 overflow-y-auto">
        <div className="p-4">
          <p>Digital Gift Card</p>
          <h1>100 AED</h1>
          <hr className="my-4 border-gray-300" />
          <p>
            <span>Amount:</span>AED
          </p>
          <div className="grid grid-cols-4 gap-3">
            {buttons.map((label, index) => (
              <button
                key={index}
                className="flex items-center  h-14 justify-center uppercase mt-2 btn rounded-xl border-black bg-white border hover:text-white hover:bg-slate-800"
                style={{ transition: "background-color 0.3s, color 0.3s" }}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            className="flex items-center w-full  h-14 justify-center bg-black uppercase  btn rounded-xl border-black  text-white mt-10 border hover:text-white hover:bg-slate-800"
            style={{ transition: "background-color 0.3s, color 0.3s" }}
          >
            ADD TO BAG
          </button>
          <div className="flex flex-row gap-5 justify-center items-center mt-5">
            {icons.map((item, index) => (
              <Link key={index} to="#" className="flex items-center  h-14">
                {item.icon}
              </Link>
            ))}
          </div>
          <hr className="my-4 mt-10 border-gray-300" />
          <div className="flex flex-row justify-center gap-10">
            {icon.map((item, index) => (
              <Link
                key={index}
                to="#"
                className="flex flex-col items-center  uppercase"
              >
                {item.icon}
                <span className="ml-2 text-xs w-24">{item.label}</span>
              </Link>
            ))}
          </div>
          <div className="collapse collapse-plus mt-10">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              <span className="flex flex-row items-center gap-2 ">
                <FiEye className="mt-1" size={20} /> Description
              </span>
            </div>
            <div className="collapse-content">
              <p>
                The gift that brings their wishlist to life: think the perfect
                TGM set, their favorite colors, and just the right fit. Once the
                order is placed, we will send the gift card to the e-mail that
                was used for the order, including the instructions for it to be
                redeemed at checkout. Our gift cards have no additional
                processing fees.
              </p>
            </div>
          </div>
          <hr className="  border-gray-300" />
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              <span className="flex flex-row items-center gap-2 ">
                <MdDirectionsRun className="mt-1" size={20} />{" "} Fit
              </span>
             
            </div>
            <div className="collapse-content">
              <p></p>
            </div>
          </div>
          <hr className=" border-gray-300" />
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium"> <span className="flex flex-row items-center gap-2 ">
                <MdLocalShipping className="mt-1" size={20} /> Shipping
              </span>
            </div>
            <div className="collapse-content">
              <h1>UAE</h1>
              <div className="flex flex-col mt-3">
                {deliveryOptions.map((option, index) => (
                  <div
                    key={index}
                    className="rounded-full  ml-5  flex items-center"
                  >
                    <div className="rounded-full bg-black h-3 w-3 flex items-center justify-center mr-4">
                      <svg
                        className="h-4 w-4 "
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">{option.text}</p>
                      <p>{option.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <h1>Saudi Arabia</h1>
              <div className="flex flex-col mt-3">
                {deliveryOption.map((option, index) => (
                  <div
                    key={index}
                    className="rounded-full  ml-5  flex items-center"
                  >
                    <div className="rounded-full bg-black h-3 w-3 flex items-center justify-center mr-4">
                      <svg
                        className="h-4 w-4 "
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">{option.text}</p>
                      <p>{option.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>All Duties and taxes are paid by TGM</p>
              <h1>Kuwait</h1>
              <div className="flex flex-col mt-3">
                {deliveryOptiones.map((option, index) => (
                  <div
                    key={index}
                    className="rounded-full  ml-5  flex items-center"
                  >
                    <div className="rounded-full bg-black h-3 w-3 flex items-center justify-center mr-4">
                      <svg
                        className="h-4 w-4 "
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">{option.text}</p>
                      <p>{option.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>All Duties and taxes are paid by TGM</p>
            </div>
          </div>
          <hr className=" border-gray-300" />
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium"><span className="flex flex-row items-center gap-2 ">
                <MdKeyboardReturn className="mt-1" size={20} />Returns
              </span></div>
            <div className="collapse-content">
              <div className="flex flex-col mt-3">
                {returnPolicyItems.map((option, index) => (
                  <div
                    key={index}
                    className="rounded-full  ml-5  flex items-center"
                  >
                    <div className="rounded-full bg-black h-3 w-3 flex items-center justify-center mr-4">
                      <svg
                        className="h-4 w-4 "
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">{option.text}</p>
                      <p>{option.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr className=" border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
