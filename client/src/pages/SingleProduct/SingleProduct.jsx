
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { PiCoatHanger } from 'react-icons/pi';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

function SingleProduct() {
  return (
    <div className='h-full'>
      <div className="flex justify-center items-center">
        <div className="card lg:card-side  w-2/3 gap-8">
          <div className="w-1/2">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src='https://thegivingmovement.com/cdn/shop/files/S1515V12MSRWM_1.jpg?v=1713417157' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='https://thegivingmovement.com/cdn/shop/files/S1515V12MSRWM_2.jpg?v=1713417169' alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='https://thegivingmovement.com/cdn/shop/files/S1515V12MSRWM_3.jpg?v=1713417175' alt='' />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=" w-1/2 ">
            <h2 className="text-[10px] bg-slate-300 rounded w-fit p-1">NEW</h2>
            <p className='text-sm mt-2'>LIGHTWEIGHT LOUNGE</p>
            <p className='text-lg mt-2'> Fitted Wrap Top</p>
            <p className='text-3xl font-fjalla font-semibold mt-3'>249 AED</p>
            <div className="divider"></div>
            <p><span className='font-bold'>Colour:</span>
              Mushroom</p>
            <div className=" flex gap-3 mt-5">
              <div className="border hover:border-black  w-[33px] h-[33px] flex justify-center items-center rounded-full">
                <div className="bg-[#ff9393]  w-6 h-6  rounded-full "></div>
              </div>
              <div className="border hover:border-black  w-[33px] h-[33px] flex justify-center items-center rounded-full">
                <div className="bg-black  w-6 h-6  rounded-full "></div>
              </div>
              <div className="border hover:border-black  w-[33px] h-[33px] flex justify-center items-center rounded-full">
                <div className="bg-[#6fff9c] w-6 h-6  rounded-full "></div>
              </div>
              <div className="border hover:border-black  w-[33px] h-[33px] flex justify-center items-center rounded-full">
                <div className="bg-[#ffff5c] w-6 h-6  rounded-full "></div>
              </div>
              <div className="border hover:border-black  w-[33px] h-[33px] flex justify-center items-center rounded-full">
                <div className="bg-[#5c8fff] w-6 h-6  rounded-full "></div>
              </div>     
              <div className="border hover:border-black  w-[33px] h-[33px] flex justify-center items-center rounded-full">
                <div className="bg-[#5c8fff] w-6 h-6  rounded-full "></div>
              </div>     
              <div className="border hover:border-black  w-[33px] h-[33px] flex justify-center items-center rounded-full">
                <div className="bg-[#5c8fff] w-6 h-6  rounded-full "></div>
              </div>     
              <div className="border hover:border-black  w-[33px] h-[33px] flex justify-center items-center rounded-full">
                <div className="bg-[#5c8fff] w-6 h-6  rounded-full "></div>
              </div>     
            </div>
            <p className='font-bold mt-4'>Size (UK)</p>
            <div className='flex gap-4 mt-8'>
              <div className='cursor-pointer border border-slate-300 rounded-sm p-2 w-[75px] h-[45px] text-center
               hover:border-black'>
                XS
              </div>
              <div className='cursor-pointer border border-slate-300 rounded-sm p-2 w-[75px] h-[45px] text-center
               hover:border-black'>

                S
              </div>
              <div className='cursor-pointer border border-slate-300 rounded-sm p-2 w-[75px] h-[45px] 
              text-center hover:border-black'>
                M
              </div>
              <div className='cursor-pointer border border-slate-300 rounded-sm p-2 w-[75px] h-[45px]
               text-center hover:border-black'>
                L
              </div>
              <div className='cursor-pointer border border-slate-300 rounded-sm p-2 w-[75px] h-[45px]
               text-center hover:border-black'>
                XL
              </div>
            </div>
            <div className='w-full h-[45px] border border-gray-700 rounded-md flex justify-between px-5 mt-8'>
              <div className='flex items-center gap-2'>
              <PiCoatHanger />
              <p>Need help finding the right size?</p>
              </div>
              <div className='flex items-center'>
              <MdOutlineArrowForwardIos />
              </div>
            </div>
            <button className='mt-8 btn w-full bg-zinc-800 text-white hover:bg-zinc-800'> ADD TO BAG </button>

            <div className='flex justify-center items-center mt-5 cursor-pointer'>
            <img src="https://i.ibb.co/q7DK60Q/image.png" alt=""  />
            </div>
            <div className="divider"></div>
            <div className='flex justify-evenly gap-10'>
              <div  className='flex flex-col justify-center items-center'>
                <img src="https://yorkie.thegivingmovement.com/images/usp/earth.svg" alt=""  />
                <p className='text-center'> Eco friendly <br /> fabrics </p>
              </div>
              <div  className='flex flex-col justify-center items-center'>
                    <img src="https://yorkie.thegivingmovement.com/images/usp/charity.svg" alt=""  />
                    <p className='text-center'> $4 to charity <br /> per item sold </p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                  <img src="https://yorkie.thegivingmovement.com/images/usp/flag.svg" alt=""  />
                  <p className='text-center'> Made in the <br /> UAE </p>
              </div>
            </div>
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SingleProduct