import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../assets/images/S14PW1V11PBWM_0_2048x.webp'
import img2 from '../../assets/images/S14PW1V11PBWM_1.webp'
import img3 from '../../assets/images/S106V12PBWM_1.jpg'
import img4 from '../../assets/images/S106V12PBWM_2.webp'
import { Navigation } from "swiper/modules";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { HiOutlineMinus } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import { PiCoatHangerBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";


function FaqItem({ title, text }) {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`faq ${isActive ? 'active' : ''}`}>
      <h3 className="faq-title">{title}</h3>
      <p className="faq-text">{text}</p>
      <button className="faq-toggle" onClick={toggleActive}>
        <svg className={`chevron w-6 h-6 text-gray-800 dark:text-white ${isActive ? 'hidden' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
        </svg>
        <svg className={`close w-6 h-6 text-gray-800 dark:text-white ${isActive ? '' : 'hidden'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
      </button>
    </div>
  );
}

function Collection() {
  const [num, setNum] = useState(null);
  const [mouseOver, setMouseOver] = useState(false)
  const data = ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7', 'Data 8', 'Data 9'];
  const [tabData, setTabData] = useState({});
  const [quickBuy, SetQuickBuy] = useState(false)
  const [number, setNumber] = useState(1);
  const [roted, setRoted] = useState(null)
  
  // Create an array to group data items into sets of 3
  const groupedData = [];
  for (let i = 0; i < data.length; i++) {
    const groupNumber = Math.floor(i / 3) + 1; // Calculate the group number
    const dataWithSerial = {
      data: data[i],
      serial: groupNumber
    }; // Add serial number to data item
    groupedData.push(dataWithSerial);
  }

  console.log(groupedData);
  const groupedData2 = [];
  for (let i = 0; i < groupedData.length; i += 3) {
    groupedData2.push(groupedData.slice(i, i + 3));
  }

  console.log(groupedData2);
  const [show, setShow] = useState(false);
  const handleShowImg = {
    display: mouseOver ? 'grid' : 'none'
  }
  const handleHideImg = {
    display: mouseOver ? 'none' : 'grid'
  }
  const handleOnMouseEnter = () => {
    setMouseOver(true)

  };
  const handleOnMouseLeave = () => {

    setMouseOver(false)

  };
  const decreaseNumber = () => {
    if (number > 1) {
      setNumber(prevNumber => prevNumber - 1);
    }
  };

  const increaseNumber = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  return (
    <div className="px-10">
      <h1 className=" text-center text-xl font-fjalla font-semibold ml-10">WOMEN'S COLLECTION</h1>
      <div className="flex justify-between mt-2">
        <div className="flex gap-2 items-center">
          <svg width="20" height="20" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5">
            <path d="M26.25 7.5H22.6625C22.225 5.4875 20.475 4 18.375 4C16.275 4 14.525 5.4875 14.0875 7.5H1.75V9.25H14.0875C14.525 11.2625 16.275 12.75 18.375 12.75C20.475 12.75 22.225 11.2625 22.6625 9.25H26.25V7.5ZM18.375 11C16.8875 11 15.75 9.8625 15.75 8.375C15.75 6.8875 16.8875 5.75 18.375 5.75C19.8625 5.75 21 6.8875 21 8.375C21 9.8625 19.8625 11 18.375 11Z" fill="currentColor"></path>
            <path d="M1.75 21.5H5.3375C5.775 23.5125 7.525 25 9.625 25C11.725 25 13.475 23.5125 13.9125 21.5H26.25V19.75H13.9125C13.475 17.7375 11.725 16.25 9.625 16.25C7.525 16.25 5.775 17.7375 5.3375 19.75H1.75V21.5ZM9.625 18C11.1125 18 12.25 19.1375 12.25 20.625C12.25 22.1125 11.1125 23.25 9.625 23.25C8.1375 23.25 7 22.1125 7 20.625C7 19.1375 8.1375 18 9.625 18Z" fill="currentColor"></path>
          </svg>
          <h1 className="text-xl font-bold">Filter</h1>
          <IoIosArrowBack className="w-[20px] h-[20px]" />
        </div>
        <div>
          <h1 className="text-xl ">132 products
          </h1>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className=" m-1 bg-white hover:bg-white flex items-center gap-2" >Sort <IoIosArrowDown /></div>
          <ul tabIndex={0} className="dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-md w-52 text-black">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>
      <div className="flex  mt-5 gap-2">
        <div className="w-1/3">
          
          <div tabIndex={0} className="collapse collapse-arrow ">
            <div className="collapse-title text-xl font-medium">
              Gender
            </div>
            <div className="collapse-content">
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow ">
            <div className="collapse-title text-xl font-medium">
              Colour
            </div>
            <div className="collapse-content">
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow ">
            <div className="collapse-title text-xl font-medium">
              Size (UK)
            </div>
            <div className="collapse-content">
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow ">
            <div className="collapse-title text-xl font-medium">
              Fit
            </div>
            <div className="collapse-content">
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow ">
            <div className="collapse-title text-xl font-medium">
              Category
            </div>
            <div className="collapse-content">
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow ">
            <div className="collapse-title text-xl font-medium">
              Range
            </div>
            <div className="collapse-content">
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow ">
            <div className="collapse-title text-xl font-medium">
              Price
            </div>
            <div className="collapse-content">
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          {
            groupedData2.length > 0 && groupedData2.map((group, index) => (
              <div key={index} className="grid grid-cols-3 gap-10">
                {
                  group.map((item, index) => (
                    <div onClick={() => { setShow(true), setNum(item.serial), setTabData(item) }} className="w-full  gap-5 cursor-pointer" key={index}><div>
                      <div className="card bg-base-100 md:w-full w-[80%] mx-auto">
                        {/* Swiper div. single card contains all images */}
                        <div onMouseOver={()=>{setMouseOver(true) , setRoted(index)}} onMouseLeave={handleOnMouseLeave} >
                          <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                              clickable: true,
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                          >
                            <SwiperSlide  >
                              <div className="relative">
                                <img className="cursor-pointer" style={handleHideImg} src={img1} alt="" />
                                <img className="cursor-pointer" style={handleShowImg} src={img2} alt="" />
                                <h1 className="absolute z-50 left-3 bottom-4 cursor-pointer text-[10px] bg-[#f4f4f4] text-[#626262] p-1 rounded-sm">new</h1>
                                <p className="z-50 absolute top-2 right-3 text-3xl"><CiHeart /></p>
                                <a className={`bg-base-100 cursor-pointer text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver & roted===index ? '' : 'hidden'}`}  >QUICK BUY</a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="relative">
                                <img className="cursor-pointer" style={handleHideImg} src={img4} alt="" />
                                <img className="cursor-pointer" style={handleShowImg} src={img3} alt="" />
                                <h1 className="absolute z-50 left-3 bottom-4 cursor-pointer text-[10px] bg-[#f4f4f4] text-[#626262] p-1 rounded-sm">new</h1>
                                <p className="z-50 absolute top-2 right-3 text-3xl"><CiHeart /></p>
                                <a className={`bg-base-100 cursor-pointer text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver & roted===index ? '' : 'hidden'}`} >QUICK BUY</a>
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                        <div className="card-body py-0 pl-0 pr-4">
                          <p className="text-[10px] py-2">ETHICAL INDIAN ORGANIC COTTON BLEND</p>
                          <p className="-mt-4 text-[18px]">Oversized Palestine T-Shirt 349 AED</p>
                          {/* color div */}
                          <div className="grid grid-cols-5">
                            <div className="border hover:border-black  w-8 h-8 flex justify-center items-center rounded-full">
                              <div className="bg-[#ff9393]  w-6 h-6  rounded-full "></div>
                            </div>
                            <div className="border hover:border-black  w-8 h-8 flex justify-center items-center rounded-full">
                              <div className="bg-black  w-6 h-6  rounded-full "></div>
                            </div>
                            <div className="border hover:border-black  w-8 h-8 flex justify-center items-center rounded-full">
                              <div className="bg-[#6fff9c] w-6 h-6  rounded-full "></div>
                            </div>
                            <div className="border hover:border-black  w-8 h-8 flex justify-center items-center rounded-full">
                              <div className="bg-[#ffff5c] w-6 h-6  rounded-full "></div>
                            </div>
                            <div className="border hover:border-black  w-8 h-8 flex justify-center items-center rounded-full">
                              <div className="bg-[#5c8fff] w-6 h-6  rounded-full "></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  ))
                }

                {
                  show && index + 1 === num ? <div className="grid col-span-3">
                    <div className={`px-4 md:px-40 py-12 bg-[#f8f9fa]  `}>

                      {/* left part */}
                      <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
                        <div className="relative">
                          <div >
                            <Swiper>
                              <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                              <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                            </Swiper>
                          </div>

                          <p className="z-50 absolute top-2 right-3 text-3xl"><CiHeart /></p>
                          <div className="mt-4">
                            <Swiper slidesPerView={7}
                              spaceBetween={10}
                            >
                              <SwiperSlide><img style={{ borderBottom: '2px solid black' }} src={img1} alt="" /></SwiperSlide>
                              <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                              <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                              <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                              <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                              <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                              <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                              <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                            </Swiper>
                          </div>
                        </div>
                        {/* right part */}
                        <div>
                          <a className="uppercase font-bold text-2xl">Oversized Palestine Hoodie</a>
                          <h1 className="pt-4 pb-6 text-xl">649 AED</h1>
                          <p className="pb-2"><span className="font-bold">Colour:</span> Pitch Black</p>
                          {/* colours */}
                          <div className="grid grid-cols-8 md:grid-cols-10">
                            <div className="border hover:border-black  w-10 h-10 flex justify-center items-center rounded-full">
                              <div className="bg-[#ff9393]  w-8 h-8  rounded-full "></div>
                            </div>
                            <div className="border hover:border-black  w-10 h-10 flex justify-center items-center rounded-full">
                              <div className="bg-black  w-8 h-8  rounded-full "></div>
                            </div>
                            <div className="border hover:border-black  w-10 h-10 flex justify-center items-center rounded-full">
                              <div className="bg-[#6fff9c] w-8 h-8  rounded-full "></div>
                            </div>
                            <div className="border hover:border-black  w-10 h-10 flex justify-center items-center rounded-full">
                              <div className="bg-[#ffff5c] w-8 h-8  rounded-full "></div>
                            </div>
                            <div className="border hover:border-black  w-10 h-10 flex justify-center items-center rounded-full">
                              <div className="bg-[#5c8fff] w-8 h-8  rounded-full "></div>
                            </div>
                          </div>

                          <h1 className="py-3 font-medium text-[#585858]">Size (UK) </h1>
                          <div className="grid grid-cols-7 gap-3">
                            <p className="border text-center py-3 border-black rounded-md">XS</p>
                            <p className="border text-center py-3 rounded-md">XS</p>
                            <p className="border text-center py-3 rounded-md">XS</p>
                            <p className="border text-center py-3 rounded-md">XS</p>
                            <p className="border text-center py-3 rounded-md">XS</p>
                            <p className="border text-center py-3 rounded-md">XS</p>

                          </div>

                          <div>
                            <p className="rounded-md py-3 px-3 border mt-4 mb-6 grid grid-cols-12 items-center gap-3"><span className="col-span-1"><PiCoatHangerBold /> </span> <span className="col-span-10">Need Help finding the right size?</span> <IoIosArrowForward /></p>
                          </div>

                          <div className="flex gap-2">
                            <button className="border p-3 rounded-md" onClick={decreaseNumber}><HiOutlineMinus /></button>
                            <input type="text" value={number} className="border rounded-md text-center p-2 input-bordered w-[8%]" />
                            <button className="border p-3 rounded-md" onClick={increaseNumber}><BsPlusLg /></button>
                          </div>

                          <button className="my-8 py-3 rounded-md w-full bg-slate-950 text-[#e4e4e4]">ADD TO BAG</button>

                          <a className="text-[#5b9bbe] underline flex items-center" href="">More Details <IoIosArrowForward /></a>
                        </div>
                        {/* finish Right Part */}
                        <button className="absolute top-1 right-1 md:top-5 md:right-5 text-2xl md:text-3xl"> <MdClose /></button>
                      </div>
                    </div>
                  </div> : null
                }
              </div>
            ))
          }
          {/* This Style is for navigate arrow icon show */}
          <style>{`
          .swiper-button-prev,
          .swiper-button-next {
          visibility: ${mouseOver ? 'visible !important' : 'hidden'};
          }`
          }</style>

        </div>
      </div>
    </div>

  );
}





export default Collection;
