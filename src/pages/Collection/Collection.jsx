import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../assets/images/S14PW1V11PBWM_0_2048x.webp'
import img2 from '../../assets/images/S14PW1V11PBWM_1.webp'
import img3 from '../../assets/images/S106V12PBWM_1.jpg'
import img4 from '../../assets/images/S106V12PBWM_2.webp'
import { Navigation } from "swiper/modules";
import { CiHeart } from "react-icons/ci";
// Import Swiper styles
import './SwiperJS.css';
import 'swiper/css/navigation';
import './style.css'
function Collection() {
  const [num, setNum] = useState(null);
  const [mouseOver, setMouseOver] = useState(false)
  const data = ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7', 'Data 8', 'Data 9'];
  const [tabData, setTabData] = useState({});
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
  return (
    <div>
      {
        groupedData2.length > 0 && groupedData2.map((group, index) => (
          <div key={index} className="grid grid-cols-3 gap-5">
            {
              group.map((item, index) => (
                <div onClick={() => { setShow(true), setNum(item.serial), setTabData(item) }} className="w-full bg-blue-600 gap-5 cursor-pointer" key={index}><div>
                  <div className="card bg-base-100 md:w-full w-[80%] mx-auto">
                    {/* Swiper div. single card contains all images */}
                    <div onMouseOver={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} >
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
                            <a className={`bg-base-100 cursor-pointer text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`}  >QUICK BUY</a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide  >
                          <div className="relative">
                            <img className="cursor-pointer" style={handleHideImg} src={img4} alt="" />
                            <img className="cursor-pointer" style={handleShowImg} src={img3} alt="" />
                            <h1 className="absolute z-50 left-3 bottom-4 cursor-pointer text-[10px] bg-[#f4f4f4] text-[#626262] p-1 rounded-sm">new</h1>
                            <p className="z-50 absolute top-2 right-3 text-3xl"><CiHeart /></p>
                            <a className={`bg-base-100 cursor-pointer text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`} >QUICK BUY</a>
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
                </div></div>
              ))
            }

            {
              show && index + 1 === num ? <div className="grid grid-cols-subgrid gap-4 col-span-3 bg-red-950">
                <div className="col-start-2 cursor-pointer" onClick={() => setShow(false)}>fuck you {tabData.data} </div>
              </div> : null
            }
          </div>
        ))
      }

    </div>

  );
}





export default Collection;
